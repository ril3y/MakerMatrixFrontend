import { motion } from 'framer-motion'
import { Tag, Plus, Search, Filter, Tags, Hash } from 'lucide-react'

const CategoriesPage = () => {
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
            <Tag className="w-6 h-6" />
            Categories
          </h1>
          <p className="text-text-secondary mt-1">
            Organize parts with categories and tags
          </p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Category
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
              placeholder="Search categories..."
              className="input pl-10 w-full"
            />
          </div>
          <button className="btn btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </motion.div>

      {/* Category Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <Tags className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-text-secondary">Total Categories</p>
              <p className="text-2xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <Hash className="w-8 h-8 text-secondary" />
            <div>
              <p className="text-sm text-text-secondary">Active Categories</p>
              <p className="text-2xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <Tag className="w-8 h-8 text-accent" />
            <div>
              <p className="text-sm text-text-secondary">Most Used</p>
              <p className="text-xl font-bold text-text-primary">-</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Popular Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="card p-4"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Popular Categories</h3>
        <div className="flex flex-wrap gap-2">
          {['Electronics', 'Resistors', 'Capacitors', 'Connectors', 'Tools'].map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cursor-pointer hover:bg-primary/20 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Categories List Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6 text-center"
      >
        <Tag className="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Category Management Coming Soon
        </h3>
        <p className="text-text-secondary">
          The full category management interface is being developed.
        </p>
      </motion.div>
    </div>
  )
}

export default CategoriesPage