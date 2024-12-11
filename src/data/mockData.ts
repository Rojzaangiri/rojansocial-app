import type { Post, User, VerificationRequest, UserSettings } from '../types';

export const defaultSettings: UserSettings = {
  privacy: 'public',
  notifications: true,
  emailNotifications: true,
  darkMode: false,
};

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40',
  verificationStatus: 'approved',
  role: 'admin',
  settings: defaultSettings,
};

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40',
      verificationStatus: 'approved'
    },
    content: 'Just finished a great hiking trip! The views were absolutely breathtaking! 🏔️',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&h=600',
    likes: 42,
    comments: [
      {
        id: '1',
        user: currentUser,
        content: 'Looks amazing! Where was this?',
        timestamp: new Date(Date.now() - 1000 * 60 * 15)
      }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 30)
  },
  {
    id: '2',
    user: {
      id: '3',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40',
      verificationStatus: 'pending'
    },
    content: 'Just launched my new project! Check it out and let me know what you think 🚀',
    likes: 28,
    comments: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60)
  }
];

export const mockVerificationRequests: VerificationRequest[] = [
  {
    id: '1',
    user: {
      id: '4',
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&h=40',
      verificationStatus: 'pending'
    },
    status: 'pending',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    documents: [
      'https://example.com/document1.pdf',
      'https://example.com/document2.pdf'
    ]
  },
  {
    id: '2',
    user: {
      id: '5',
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=40&h=40',
      verificationStatus: 'approved'
    },
    status: 'approved',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48)
  }
];