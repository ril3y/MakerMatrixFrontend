import { motion } from 'framer-motion'
import { Settings, User, Bell, Shield, Database, Printer, Palette, Globe } from 'lucide-react'

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Settings
          </h1>
          <p className="text-text-secondary mt-1">
            Configure application preferences and system settings
          </p>
        </div>
      </motion.div>

      {/* Settings Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* Profile Settings */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <User className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-semibold text-text-primary">Profile</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Manage your personal information and account details
          </p>
        </div>

        {/* Notifications */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <Bell className="w-8 h-8 text-secondary" />
            <h3 className="text-lg font-semibold text-text-primary">Notifications</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Configure email and system notification preferences
          </p>
        </div>

        {/* Security */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold text-text-primary">Security</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Password, two-factor authentication, and security settings
          </p>
        </div>

        {/* Database */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-8 h-8 text-blue-500" />
            <h3 className="text-lg font-semibold text-text-primary">Database</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Backup, restore, and database maintenance options
          </p>
        </div>

        {/* Printer Settings */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <Printer className="w-8 h-8 text-green-500" />
            <h3 className="text-lg font-semibold text-text-primary">Printers</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Configure label printers and printing preferences
          </p>
        </div>

        {/* Appearance */}
        <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-8 h-8 text-purple-500" />
            <h3 className="text-lg font-semibold text-text-primary">Appearance</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Theme, colors, and interface customization options
          </p>
        </div>
      </motion.div>

      {/* Quick Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Quick Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-text-primary">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-primary">Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Settings Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6 text-center"
      >
        <Settings className="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Advanced Settings Coming Soon
        </h3>
        <p className="text-text-secondary">
          The full settings interface is being developed.
        </p>
      </motion.div>
    </div>
  )
}

export default SettingsPage