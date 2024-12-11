import React from 'react';

interface VerificationBadgeProps {
  size?: 'sm' | 'md';
}

export function VerificationBadge({ size = 'sm' }: VerificationBadgeProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5'
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${sizeClasses[size]} inline-block ml-1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flower petals */}
      <path
        d="M12 2C12 5.5 14.5 8 18 8C14.5 8 12 10.5 12 14C12 10.5 9.5 8 6 8C9.5 8 12 5.5 12 2Z"
        fill="#1D9BF0"
        opacity="0.9"
      />
      <path
        d="M12 22C12 18.5 14.5 16 18 16C14.5 16 12 13.5 12 10C12 13.5 9.5 16 6 16C9.5 16 12 18.5 12 22Z"
        fill="#1D9BF0"
        opacity="0.9"
      />
      <path
        d="M2 12C5.5 12 8 14.5 8 18C8 14.5 10.5 12 14 12C10.5 12 8 9.5 8 6C8 9.5 5.5 12 2 12Z"
        fill="#1D9BF0"
        opacity="0.9"
      />
      <path
        d="M22 12C18.5 12 16 14.5 16 18C16 14.5 13.5 12 10 12C13.5 12 16 9.5 16 6C16 9.5 18.5 12 22 12Z"
        fill="#1D9BF0"
        opacity="0.9"
      />
      
      {/* Center circle */}
      <circle cx="12" cy="12" r="4" fill="#1D9BF0" />
      
      {/* Checkmark */}
      <path
        d="M14.5 10.5L11 14L9.5 12.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Subtle outer glow */}
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="#1D9BF0"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
    </svg>
  );
}