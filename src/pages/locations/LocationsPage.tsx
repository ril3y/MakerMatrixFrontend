import { motion } from 'framer-motion'
import { MapPin, Plus, Search, Filter, Building, FolderTree } from 'lucide-react'

const LocationsPage = () => {
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
            <MapPin className="w-6 h-6" />
            Locations
          </h1>
          <p className="text-text-secondary mt-1">
            Manage storage locations and hierarchies
          </p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Location
        </button>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-4"
      >
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search locations..."
              className="input pl-10 w-full"
            />
          </div>
          <button className="btn btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="btn btn-secondary flex items-center gap-2">
            <FolderTree className="w-4 h-4" />
            Tree View
          </button>
        </div>
      </motion.div>

      {/* Location Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <Building className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-text-secondary">Total Locations</p>
              <p className="text-2xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-secondary" />
            <div>
              <p className="text-sm text-text-secondary">Active Locations</p>
              <p className="text-2xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <FolderTree className="w-8 h-8 text-accent" />
            <div>
              <p className="text-sm text-text-secondary">Root Locations</p>
              <p className="text-2xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Locations List Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6 text-center"
      >
        <MapPin className="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Location Management Coming Soon
        </h3>
        <p className="text-text-secondary">
          The full location management interface is being developed.
        </p>
      </motion.div>
    </div>
  )
}

export default LocationsPage