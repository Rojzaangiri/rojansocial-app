import React from 'react';
import { Home, Search, Bell, MessageCircle, Menu, LogOut, Settings, Shield, BadgeCheck } from 'lucide-react';
import { VerificationBadge } from './VerificationBadge';
import { currentUser } from '../data/mockData';

interface NavbarProps {
  onSettingsClick: () => void;
  onVerificationClick: () => void;
}

export function Navbar({ onSettingsClick, onVerificationClick }: NavbarProps) {
  const showVerificationRequest = !currentUser.verificationStatus || currentUser.verificationStatus === 'rejected';

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Rojan Social</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-blue-600">
              <Home className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <Bell className="w-6 h-6" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:border-blue-500"
              />
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src={currentUser.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <span className="hidden md:inline-flex items-center">
                {currentUser.name}
                {currentUser.verificationStatus === 'approved' && <VerificationBadge />}
                {currentUser.verificationStatus === 'pending' && (
                  <span className="ml-2 text-sm text-yellow-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Pending
                  </span>
                )}
              </span>
            </div>
            
            {showVerificationRequest && (
              <button 
                onClick={onVerificationClick}
                className="text-blue-600 hover:text-blue-800 hidden md:flex items-center space-x-1"
              >
                <BadgeCheck className="w-5 h-5" />
                <span className="text-sm">Get Verified</span>
              </button>
            )}
            
            <button 
              onClick={onSettingsClick}
              className="text-gray-600 hover:text-blue-600 hidden md:block"
            >
              <Settings className="w-6 h-6" />
            </button>
            
            {currentUser.role === 'admin' && (
              <button 
                onClick={onVerificationClick}
                className="text-gray-600 hover:text-blue-600 hidden md:block"
              >
                <Shield className="w-6 h-6" />
              </button>
            )}
            
            <button className="text-gray-600 hover:text-blue-600 md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            
            <button className="text-gray-600 hover:text-blue-600 hidden md:block">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}