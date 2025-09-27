import { motion } from 'framer-motion'
import { Package, MapPin, Tags, Users, Activity, RefreshCw } from 'lucide-react'
import { useEffect } from 'react'
import { useDashboardStore } from '@/store/dashboardStore'
import LoadingScreen from '@/components/ui/LoadingScreen'

const DashboardPage = () => {
  const { stats, isLoading, error, loadStats, refreshStats, clearError } = useDashboardStore()

  useEffect(() => {
    loadStats()
  }, [])

  const handleRefresh = () => {
    refreshStats()
  }

  if (isLoading && !stats) {
    return <LoadingScreen />
  }

  const dashboardStats = [
    {
      title: 'Total Parts',
      value: stats?.totalParts?.toString() || '0',
      icon: Package,
      change: '',
      changeType: 'neutral' as const,
    },
    {
      title: 'Locations',
      value: stats?.totalLocations?.toString() || '0',
      icon: MapPin,
      change: '',
      changeType: 'neutral' as const,
    },
    {
      title: 'Categories',
      value: stats?.totalCategories?.toString() || '0',
      icon: Tags,
      change: '',
      changeType: 'neutral' as const,
    },
    {
      title: 'Active Users',
      value: stats?.activeUsers?.toString() || '0',
      icon: Users,
      change: '',
      changeType: 'neutral' as const,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-2">
            Welcome to MakerMatrix - Battle With Bytes Inventory System
          </p>
        </div>
        <button 
          onClick={handleRefresh}
          disabled={isLoading}
          className="btn btn-secondary flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-4"
        >
          <p className="text-red-400">{error}</p>
          <button 
            onClick={clearError}
            className="text-red-300 hover:text-red-200 text-sm mt-2"
          >
            Dismiss
          </button>
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </p>
                {stat.change && (
                  <div className="flex items-center mt-2">
                    <span
                      className="text-sm font-medium text-text-muted"
                    >
                      {stat.change}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3 bg-bg-secondary rounded-lg">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="card"
      >
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-text-primary">
              Recent Activity
            </h2>
          </div>
        </div>
        <div className="card-content">
          <div className="text-center py-8">
            <Activity className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-secondary">No recent activity to display</p>
            <p className="text-sm text-text-muted mt-2">Activity will appear here as you use the system</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="card"
      >
        <div className="card-header">
          <h2 className="text-xl font-semibold text-text-primary">
            Quick Actions
          </h2>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="btn btn-secondary flex flex-col items-center gap-2 py-4">
              <Package className="w-5 h-5" />
              <span>Add Part</span>
            </button>
            <button className="btn btn-secondary flex flex-col items-center gap-2 py-4">
              <MapPin className="w-5 h-5" />
              <span>Add Location</span>
            </button>
            <button className="btn btn-secondary flex flex-col items-center gap-2 py-4">
              <Tags className="w-5 h-5" />
              <span>Manage Categories</span>
            </button>
            <button className="btn btn-secondary flex flex-col items-center gap-2 py-4">
              <Users className="w-5 h-5" />
              <span>Manage Users</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DashboardPage