import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { RightSidebar } from './components/RightSidebar';
import { CreatePost } from './components/CreatePost';
import { Post } from './components/Post';
import { UserSettings } from './components/UserSettings';
import { AdminVerification } from './components/AdminVerification';
import { mockPosts, mockVerificationRequests, currentUser } from './data/mockData';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleSettingsSave = (newSettings: typeof currentUser.settings) => {
    console.log('Saving settings:', newSettings);
    setShowSettings(false);
  };

  const handleVerificationAction = (requestId: string, action: 'approve' | 'reject') => {
    console.log(`${action} verification request:`, requestId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        onSettingsClick={() => setShowSettings(true)}
        onVerificationClick={() => setShowVerification(true)}
      />
      <Sidebar />
      <RightSidebar />
      
      <main className="pt-20 pb-8 px-4 md:ml-64 lg:mr-80">
        <div className="max-w-2xl mx-auto">
          {showSettings ? (
            <UserSettings 
              settings={currentUser.settings!}
              onSave={handleSettingsSave}
            />
          ) : showVerification && currentUser.role === 'admin' ? (
            <AdminVerification 
              requests={mockVerificationRequests}
              onApprove={(id) => handleVerificationAction(id, 'approve')}
              onReject={(id) => handleVerificationAction(id, 'reject')}
            />
          ) : (
            <>
              <CreatePost />
              {mockPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;