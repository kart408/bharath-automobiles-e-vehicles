import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const dealershipLocation = {
    name: 'Bharath Automobiles E-Vehicles',
    address: 'Shop No. 15-16, Main Road, Nandipet, Nizamabad, Telangana 503212',
    lat: 18.6725,
    lng: 78.0941
  };

  return (
    <div className="bg-white rounded-xl shadow-elevation-2 overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-2">
          <Icon name="MapPin" size={20} className="text-primary" />
          <h3 className="text-lg font-bold text-foreground">Our Location</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          {dealershipLocation?.address}
        </p>
      </div>
      <div className="relative h-80 lg:h-96">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Bharath Automobiles E-Vehicles Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${dealershipLocation?.lat},${dealershipLocation?.lng}&z=16&output=embed`}
          className="border-0"
        />
        
        {/* Map overlay with location info */}
        <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-elevation-1">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Zap" size={16} color="white" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-foreground truncate">
                {dealershipLocation?.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                Nandipet, Nizamabad
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>15 min drive from Nizamabad Bus Stand</span>
          </div>
          <button
            onClick={() => window.open(`https://maps.google.com/?q=${dealershipLocation?.lat},${dealershipLocation?.lng}`, '_blank')}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 flex items-center space-x-1"
          >
            <span>Open in Maps</span>
            <Icon name="ExternalLink" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;