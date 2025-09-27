import { motion } from 'framer-motion'
import { Palette, ArrowLeft, Save, Monitor, Sun, Moon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AppearancePage = () => {
  const navigate = useNavigate()
  const [settings, setSettings] = useState({
    theme: 'dark',
    colorScheme: 'default',
    fontSize: 'medium',
    compactMode: false,
    animations: true,
    gridDensity: 'comfortable'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement appearance settings update
    console.log('Appearance settings update:', settings)
  }

  const colorSchemes = [
    { id: 'default', name: 'MakerMatrix', primary: '#00ff9d', secondary: '#ff6b9d' },
    { id: 'blue', name: 'Ocean Blue', primary: '#3b82f6', secondary: '#06b6d4' },
    { id: 'purple', name: 'Purple Rain', primary: '#8b5cf6', secondary: '#a855f7' },
    { id: 'green', name: 'Forest Green', primary: '#10b981', secondary: '#059669' },
    { id: 'orange', name: 'Sunset Orange', primary: '#f59e0b', secondary: '#d97706' }
  ]

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
              <Palette className="w-6 h-6" />
              Appearance Settings
            </h1>
            <p className="text-text-secondary mt-1">
              Customize the look and feel of your interface
            </p>
          </div>
        </div>
      </motion.div>

      {/* Theme Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Theme</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              settings.theme === 'light' ? 'border-primary bg-primary/10' : 'border-surface-tertiary hover:border-surface-tertiary/60'
            }`}
            onClick={() => setSettings({ ...settings, theme: 'light' })}
          >
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-text-primary">Light</h4>
                <p className="text-sm text-text-secondary">Bright and clean interface</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              settings.theme === 'dark' ? 'border-primary bg-primary/10' : 'border-surface-tertiary hover:border-surface-tertiary/60'
            }`}
            onClick={() => setSettings({ ...settings, theme: 'dark' })}
          >
            <div className="flex items-center gap-3">
              <Moon className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-text-primary">Dark</h4>
                <p className="text-sm text-text-secondary">Easy on the eyes</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              settings.theme === 'auto' ? 'border-primary bg-primary/10' : 'border-surface-tertiary hover:border-surface-tertiary/60'
            }`}
            onClick={() => setSettings({ ...settings, theme: 'auto' })}
          >
            <div className="flex items-center gap-3">
              <Monitor className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-text-primary">Auto</h4>
                <p className="text-sm text-text-secondary">Follow system preference</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Color Scheme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Color Scheme</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                settings.colorScheme === scheme.id ? 'border-primary bg-primary/10' : 'border-surface-tertiary hover:border-surface-tertiary/60'
              }`}
              onClick={() => setSettings({ ...settings, colorScheme: scheme.id })}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: scheme.primary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: scheme.secondary }}
                  ></div>
                </div>
                <h4 className="font-semibold text-text-primary">{scheme.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Display Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-lg font-semibold text-text-primary">Display Options</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => setSettings({ ...settings, fontSize: e.target.value })}
                className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Grid Density
              </label>
              <select
                value={settings.gridDensity}
                onChange={(e) => setSettings({ ...settings, gridDensity: e.target.value })}
                className="w-full px-3 py-2 border border-surface-tertiary rounded-lg bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="comfortable">Comfortable</option>
                <option value="compact">Compact</option>
                <option value="spacious">Spacious</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-text-primary font-medium">Compact Mode</span>
                <p className="text-text-secondary text-sm">Use smaller spacing throughout the interface</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.compactMode}
                  onChange={(e) => setSettings({ ...settings, compactMode: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-text-primary font-medium">Animations</span>
                <p className="text-text-secondary text-sm">Enable smooth transitions and animations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.animations}
                  onChange={(e) => setSettings({ ...settings, animations: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Preferences
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default AppearancePage