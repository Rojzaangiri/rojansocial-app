import React, { useState } from 'react';
import { Bell, Mail, Lock, Moon } from 'lucide-react';
import type { UserSettings as UserSettingsType } from '../types';

interface UserSettingsProps {
  settings: UserSettingsType;
  onSave: (settings: UserSettingsType) => void;
}

export function UserSettings({ settings, onSave }: UserSettingsProps) {
  const [currentSettings, setCurrentSettings] = useState(settings);

  const handleSave = () => {
    onSave(currentSettings);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lock className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Privacy</h3>
              <p className="text-sm text-gray-500">Who can see your posts</p>
            </div>
          </div>
          <select
            value={currentSettings.privacy}
            onChange={(e) => setCurrentSettings({
              ...currentSettings,
              privacy: e.target.value as UserSettingsType['privacy']
            })}
            className="border rounded-lg px-3 py-2"
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Push Notifications</h3>
              <p className="text-sm text-gray-500">Get notified about activity</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentSettings.notifications}
              onChange={(e) => setCurrentSettings({
                ...currentSettings,
                notifications: e.target.checked
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Email Notifications</h3>
              <p className="text-sm text-gray-500">Get updates via email</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentSettings.emailNotifications}
              onChange={(e) => setCurrentSettings({
                ...currentSettings,
                emailNotifications: e.target.checked
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Moon className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Dark Mode</h3>
              <p className="text-sm text-gray-500">Toggle dark theme</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentSettings.darkMode}
              onChange={(e) => setCurrentSettings({
                ...currentSettings,
                darkMode: e.target.checked
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Changes
      </button>
    </div>
  );
}