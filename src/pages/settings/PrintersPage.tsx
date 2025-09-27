import { motion } from 'framer-motion'
import { Printer, ArrowLeft, Save, TestTube, RefreshCw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSettingsStore } from '@/store/settingsStore'
import { PrinterConfig } from '@/services/settings.service'

const PrintersPage = () => {
  const navigate = useNavigate()
  const {
    printerConfig,
    isPrinterLoading,
    loadPrinterConfig,
    updatePrinterConfig,
    error
  } = useSettingsStore()

  const [formData, setFormData] = useState<PrinterConfig>({
    backend: 'usb',
    printer_identifier: '',
    dpi: 203,
    model: 'Generic Label Printer',
    scaling_factor: 1.0
  })

  useEffect(() => {
    loadPrinterConfig()
  }, [loadPrinterConfig])

  useEffect(() => {
    if (printerConfig) {
      setFormData(printerConfig)
    }
  }, [printerConfig])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updatePrinterConfig(formData)
    } catch (error) {
      console.error('Failed to update printer config:', error)
    }
  }

  const handleTestPrint = () => {
    // TODO: Implement test print functionality
    console.log('Test print requested')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/settings')}
            className="p-2 rounded-lg bg-surface-secondary hover:bg-surface-tertiary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <Printer className="w-6 h-6" />
              Printer Settings
            </h1>
            <p className="text-text-secondary mt-1">
              Configure label printers and printing preferences
            </p>
          </div>
        </div>
      </motion.div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Printer Configuration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">Printer Configuration</h3>
          <button
            onClick={loadPrinterConfig}
            disabled={isPrinterLoading}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-surface-secondary hover:bg-surface-tertiary rounded-lg transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isPrinterLoading ? 'animate-spin' : ''}`} />
            Reload
          </button>
        </div>

        {isPrinterLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-text-secondary mt-2">Loading printer configuration...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Backend
                </label>
                <select
                  value={formData.backend}
                  onChange={(e) => setFormData({ ...formData, backend: e.target.value })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="usb">USB</option>
                  <option value="network">Network</option>
                  <option value="serial">Serial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Printer Identifier
                </label>
                <input
                  type="text"
                  value={formData.printer_identifier}
                  onChange={(e) => setFormData({ ...formData, printer_identifier: e.target.value })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter printer identifier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Driver (Optional)
                </label>
                <input
                  type="text"
                  value={formData.driver || ''}
                  onChange={(e) => setFormData({ ...formData, driver: e.target.value })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Printer driver name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Model
                </label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Printer model"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  DPI
                </label>
                <select
                  value={formData.dpi}
                  onChange={(e) => setFormData({ ...formData, dpi: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value={203}>203 DPI</option>
                  <option value={300}>300 DPI</option>
                  <option value={600}>600 DPI</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Scaling Factor
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="5.0"
                  value={formData.scaling_factor}
                  onChange={(e) => setFormData({ ...formData, scaling_factor: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleTestPrint}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <TestTube className="w-4 h-4" />
                Test Print
              </button>

              <button
                type="submit"
                disabled={isPrinterLoading}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                Save Configuration
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Current Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Current Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between">
            <span className="text-text-secondary">Status:</span>
            <span className="text-green-400">Ready</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Backend:</span>
            <span className="text-text-primary">{formData.backend}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Model:</span>
            <span className="text-text-primary">{formData.model}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">DPI:</span>
            <span className="text-text-primary">{formData.dpi}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PrintersPage