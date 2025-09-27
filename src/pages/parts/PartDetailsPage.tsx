import { motion } from 'framer-motion'
import { Package, Edit, Trash2, Tag, MapPin, Calendar } from 'lucide-react'

const PartDetailsPage = () => {
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
            <Package className="w-6 h-6" />
            Part Details
          </h1>
          <p className="text-text-secondary mt-1">
            View and manage part information
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button className="btn btn-danger flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </motion.div>

      {/* Part Information Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-text-muted" />
              <div>
                <p className="text-sm text-text-secondary">Part Number</p>
                <p className="font-semibold text-text-primary">Loading...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-text-muted" />
              <div>
                <p className="text-sm text-text-secondary">Location</p>
                <p className="font-semibold text-text-primary">Loading...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-text-muted" />
              <div>
                <p className="text-sm text-text-secondary">Last Updated</p>
                <p className="font-semibold text-text-primary">Loading...</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-text-secondary mb-2">Description</p>
              <p className="text-text-primary">Loading part description...</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-2">Categories</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                  Loading...
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Placeholder Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6 text-center"
      >
        <Package className="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Part Details Coming Soon
        </h3>
        <p className="text-text-secondary">
          The full part details interface is being developed.
        </p>
      </motion.div>
    </div>
  )
}

export default PartDetailsPage