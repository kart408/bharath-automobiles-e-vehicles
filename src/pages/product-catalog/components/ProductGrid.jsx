import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
            {/* Skeleton Image */}
            <div className="aspect-[4/3] bg-muted animate-pulse" />
            
            {/* Skeleton Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="h-5 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)]?.map((_, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-muted rounded animate-pulse" />
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-muted rounded animate-pulse" />
                      <div className="h-3 bg-muted rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-1">
                {[...Array(3)]?.map((_, idx) => (
                  <div key={idx} className="h-6 w-16 bg-muted rounded animate-pulse" />
                ))}
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1 h-10 bg-muted rounded animate-pulse" />
                <div className="w-10 h-10 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No Scooters Found</h3>
          <p className="text-muted-foreground mb-4">
            We couldn't find any electric scooters matching your current filters. Try adjusting your search criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product, index) => (
        <ProductCard 
          key={product?.id} 
          product={product} 
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductGrid;