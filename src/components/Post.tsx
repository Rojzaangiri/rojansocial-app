import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Post as PostType } from '../types';
import { VerificationBadge } from './VerificationBadge';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold flex items-center">
                {post.user.name}
                {post.user.verificationStatus === 'approved' && <VerificationBadge />}
              </h3>
              <p className="text-gray-500 text-sm">
                {formatDistanceToNow(post.timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="rounded-lg w-full mb-4"
          />
        )}
        
        <div className="flex items-center justify-between text-gray-500 border-t border-b py-2">
          <button className="flex items-center space-x-2 hover:text-blue-600">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-600">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments.length} comments</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-600">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
        
        {post.comments.length > 0 && (
          <div className="mt-4 space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 bg-gray-100 rounded-lg p-3">
                  <h4 className="font-semibold flex items-center">
                    {comment.user.name}
                    {comment.user.verificationStatus === 'approved' && <VerificationBadge size="sm" />}
                  </h4>
                  <p className="text-gray-800">{comment.content}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}