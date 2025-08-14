import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  
  const pathMap = {
    '/homepage': 'Home',
    '/product-catalog': 'Scooters',
    '/product-detail': 'Product Details',
    '/about-us': 'About Us',
    '/contact': 'Contact'
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location?.pathname?.split('/')?.filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];

    if (pathSegments?.length > 0) {
      let currentPath = '';
      pathSegments?.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const label = pathMap?.[currentPath] || segment?.charAt(0)?.toUpperCase() + segment?.slice(1);
        
        if (currentPath !== '/homepage') {
          breadcrumbs?.push({
            label,
            path: currentPath,
            isLast: index === pathSegments?.length - 1
          });
        }
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs?.map((crumb, index) => (
          <li key={crumb?.path || index} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-muted-foreground/60" 
              />
            )}
            {crumb?.isLast || index === breadcrumbs?.length - 1 ? (
              <span className="font-medium text-foreground">
                {crumb?.label}
              </span>
            ) : (
              <Link
                to={crumb?.path}
                className="hover:text-primary transition-colors duration-200 font-medium"
              >
                {crumb?.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;