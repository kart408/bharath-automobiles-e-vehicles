import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ onFilterChange, activeFilters, totalProducts }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRangeOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50000', label: 'Under ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-150000', label: '₹1,00,000 - ₹1,50,000' },
    { value: '150000+', label: 'Above ₹1,50,000' }
  ];

  const batteryCapacityOptions = [
    { value: 'all', label: 'All Capacities' },
    { value: '1-2', label: '1-2 kWh' },
    { value: '2-3', label: '2-3 kWh' },
    { value: '3-4', label: '3-4 kWh' },
    { value: '4+', label: '4+ kWh' }
  ];

  const modelTypeOptions = [
    { value: 'all', label: 'All Models' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'sport', label: 'Sport' },
    { value: 'eco', label: 'Eco' }
  ];

  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'range-desc', label: 'Range (High to Low)' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const clearAllFilters = () => {
    onFilterChange('clear', null);
  };

  const hasActiveFilters = activeFilters?.priceRange !== 'all' || 
                          activeFilters?.batteryCapacity !== 'all' || 
                          activeFilters?.modelType !== 'all';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4 mb-6">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">
            Filters ({totalProducts} scooters)
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          iconName={isFilterOpen ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          iconSize={16}
        >
          {isFilterOpen ? 'Hide' : 'Show'}
        </Button>
      </div>
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">Filter Scooters</h3>
          <span className="text-sm text-muted-foreground">({totalProducts} results)</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            className="text-destructive hover:text-destructive"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Filter Controls */}
      <div className={`space-y-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-4 ${
        isFilterOpen ? 'block' : 'hidden lg:grid'
      }`}>
        {/* Price Range Filter */}
        <div>
          <Select
            label="Price Range"
            options={priceRangeOptions}
            value={activeFilters?.priceRange}
            onChange={(value) => handleFilterChange('priceRange', value)}
            className="w-full"
          />
        </div>

        {/* Battery Capacity Filter */}
        <div>
          <Select
            label="Battery Capacity"
            options={batteryCapacityOptions}
            value={activeFilters?.batteryCapacity}
            onChange={(value) => handleFilterChange('batteryCapacity', value)}
            className="w-full"
          />
        </div>

        {/* Model Type Filter */}
        <div>
          <Select
            label="Model Type"
            options={modelTypeOptions}
            value={activeFilters?.modelType}
            onChange={(value) => handleFilterChange('modelType', value)}
            className="w-full"
          />
        </div>

        {/* Sort By */}
        <div>
          <Select
            label="Sort By"
            options={sortOptions}
            value={activeFilters?.sortBy}
            onChange={(value) => handleFilterChange('sortBy', value)}
            className="w-full"
          />
        </div>
      </div>
      {/* Mobile Clear Filters */}
      {hasActiveFilters && (
        <div className="mt-4 lg:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            fullWidth
            className="text-destructive hover:text-destructive"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;