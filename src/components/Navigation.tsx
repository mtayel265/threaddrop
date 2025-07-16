// src/components/Navigation.tsx

import React from 'react';
// Import Link and NavLink from react-router-dom
import { Link, NavLink } from 'react-router-dom';
import { Shirt, Palette, Info, User } from 'lucide-react'; // Added User icon for Sign In

// We no longer need the props, so we can remove the interface and the function signature's props
const Navigation: React.FC = () => {
  // This is the function that NavLink will use to set the class names.
  // It receives an `isActive` boolean from the router automatically.
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? 'bg-white/20 text-white' // Style for the active link
        : 'text-white/70 hover:text-white hover:bg-white/10' // Style for inactive links
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - now wrapped in a Link component */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Shirt className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ThreadDrop
            </span>
          </Link>

          {/* Navigation Links - now using NavLink */}
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={getNavLinkClass}>
              <span>Home</span>
            </NavLink>
            
            <NavLink to="/design" className={getNavLinkClass}>
              <Palette className="h-4 w-4" />
              <span>Design</span>
            </NavLink>
            
            <NavLink to="/about" className={getNavLinkClass}>
              <Info className="h-4 w-4" />
              <span>About</span>
            </NavLink>

            {/* A vertical divider for style */}
            <div className="w-px h-6 bg-white/20"></div>

            {/* Optional: Add a Sign In link */}
            <NavLink to="/signin" className={getNavLinkClass}>
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
