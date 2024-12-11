import React from 'react';

const onlineFriends = [
  { id: 1, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40' },
  { id: 2, name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40' },
  { id: 3, name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&h=40' },
];

export function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 fixed right-0 h-screen pt-16 bg-white border-l">
      <div className="p-4">
        <h2 className="text-gray-500 font-semibold mb-4">Online Friends</h2>
        <div className="space-y-4">
          {onlineFriends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-800">{friend.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}