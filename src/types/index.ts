export interface User {
  id: string;
  name: string;
  avatar: string;
  isVerified?: boolean;
  role?: 'user' | 'admin';
  settings?: UserSettings;
  verificationStatus?: 'none' | 'pending' | 'approved' | 'rejected';
}

export interface UserSettings {
  privacy: 'public' | 'friends' | 'private';
  notifications: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  timestamp: Date;
  isPending?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
}

export interface VerificationRequest {
  id: string;
  user: User;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: Date;
  documents?: string[];
  reason?: string;
}