import React from 'react';
import { Users, Bookmark, Calendar, Video, ShoppingBag } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Users, label: 'Friends' },
    { icon: Bookmark, label: 'Saved' },
    { icon: Calendar, label: 'Events' },
    { icon: Video, label: 'Videos' },
    { icon: ShoppingBag, label: 'Marketplace' },
  ];

  return (
    <div className="hidden md:block w-64 fixed h-screen pt-16 bg-white border-r">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 text-gray-700"
          >
            <item.icon className="w-6 h-6" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}