import React, { useState } from 'react';
import { Image, Smile, Send } from 'lucide-react';

export function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center justify-between border-t pt-3">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Image className="w-6 h-6" />
            <span className="text-sm">Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Smile className="w-6 h-6" />
            <span className="text-sm">Feeling</span>
          </button>
        </div>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700"
          disabled={!content.trim()}
        >
          <Send className="w-4 h-4" />
          <span>Post</span>
        </button>
      </div>
    </div>
  );
}