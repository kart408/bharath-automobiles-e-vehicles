import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductStats = ({ totalProducts, filteredProducts, activeFilters }) => {
  const hasActiveFilters = activeFilters?.priceRange !== 'all' || 
                          activeFilters?.batteryCapacity !== 'all' || 
                          activeFilters?.modelType !== 'all';

  const stats = [
    {
      icon: 'Zap',
      label: 'Total Models',
      value: totalProducts,
      color: 'text-primary'
    },
    {
      icon: 'Filter',
      label: 'Filtered Results',
      value: filteredProducts,
      color: 'text-secondary'
    },
    {
      icon: 'Star',
      label: 'Premium Models',
      value: Math.floor(totalProducts * 0.3),
      color: 'text-accent'
    },
    {
      icon: 'Leaf',
      label: 'Eco-Friendly',
      value: totalProducts,
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Title Section */}
        <div className="mb-4 lg:mb-0">
          <h2 className="text-xl font-bold text-foreground mb-1">
            Electric Scooter Collection
          </h2>
          <p className="text-muted-foreground">
            {hasActiveFilters 
              ? `Showing ${filteredProducts} of ${totalProducts} scooters based on your filters`
              : `Explore our complete range of ${totalProducts} electric scooters`
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats?.map((stat, index) => (
            <div 
              key={stat?.label}
              className="text-center lg:text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-1">
                <Icon 
                  name={stat?.icon} 
                  size={18} 
                  className={stat?.color}
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {stat?.label}
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">
                {stat?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductStats;