import { motion } from 'framer-motion'
import { Database, ArrowLeft, Download, FileText, RefreshCw, HardDrive } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSettingsStore } from '@/store/settingsStore'

const DatabasePage = () => {
  const navigate = useNavigate()
  const {
    backupStatus,
    isBackupLoading,
    loadBackupStatus,
    downloadBackup,
    exportData,
    error
  } = useSettingsStore()

  useEffect(() => {
    loadBackupStatus()
  }, [loadBackupStatus])

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
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
              <Database className="w-6 h-6" />
              Database Settings
            </h1>
            <p className="text-text-secondary mt-1">
              Backup, restore, and database maintenance options
            </p>
          </div>
        </div>
      </motion.div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Database Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
            <HardDrive className="w-5 h-5" />
            Database Status
          </h3>
          <button
            onClick={loadBackupStatus}
            disabled={isBackupLoading}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-surface-secondary hover:bg-surface-tertiary rounded-lg transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isBackupLoading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {isBackupLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-text-secondary mt-2">Loading database status...</p>
          </div>
        ) : backupStatus ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{formatBytes(backupStatus.database_size)}</div>
              <div className="text-text-secondary">Database Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{backupStatus.total_records.toLocaleString()}</div>
              <div className="text-text-secondary">Total Records</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{formatDate(backupStatus.last_modified)}</div>
              <div className="text-text-secondary">Last Modified</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-text-secondary">Unable to load database status</p>
          </div>
        )}
      </motion.div>

      {/* Record Counts */}
      {backupStatus && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold text-text-primary mb-4">Record Counts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex justify-between items-center p-3 bg-surface-secondary rounded-lg">
              <span className="text-text-secondary">Parts:</span>
              <span className="text-text-primary font-semibold">{backupStatus.parts_count.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface-secondary rounded-lg">
              <span className="text-text-secondary">Locations:</span>
              <span className="text-text-primary font-semibold">{backupStatus.locations_count.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface-secondary rounded-lg">
              <span className="text-text-secondary">Categories:</span>
              <span className="text-text-primary font-semibold">{backupStatus.categories_count.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Backup & Export Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Backup & Export</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-surface-tertiary rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-6 h-6 text-primary" />
              <div>
                <h4 className="font-semibold text-text-primary">Database Backup</h4>
                <p className="text-sm text-text-secondary">Download complete SQLite database file</p>
              </div>
            </div>
            <button
              onClick={downloadBackup}
              disabled={isBackupLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              Download Backup
            </button>
          </div>

          <div className="p-4 border border-surface-tertiary rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-secondary" />
              <div>
                <h4 className="font-semibold text-text-primary">JSON Export</h4>
                <p className="text-sm text-text-secondary">Export all data in JSON format</p>
              </div>
            </div>
            <button
              onClick={exportData}
              disabled={isBackupLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50"
            >
              <FileText className="w-4 h-4" />
              Export JSON
            </button>
          </div>
        </div>
      </motion.div>

      {/* Maintenance Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="card p-6 bg-blue-500/10 border border-blue-500/20"
      >
        <h3 className="text-lg font-semibold text-blue-400 mb-2">Database Maintenance</h3>
        <p className="text-text-secondary">
          Regular backups are recommended to prevent data loss. The database is automatically optimized during normal operations.
          For advanced maintenance operations, please contact your system administrator.
        </p>
      </motion.div>
    </div>
  )
}

export default DatabasePage