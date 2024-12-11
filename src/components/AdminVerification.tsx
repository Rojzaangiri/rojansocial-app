import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import type { VerificationRequest } from '../types';

interface AdminVerificationProps {
  requests: VerificationRequest[];
  onApprove: (requestId: string) => void;
  onReject: (requestId: string) => void;
}

export function AdminVerification({ requests, onApprove, onReject }: AdminVerificationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Verification Requests</h2>
      
      {requests.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No pending verification requests</p>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={request.user.avatar}
                    alt={request.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{request.user.name}</h3>
                    <p className="text-sm text-gray-500">
                      Requested {new Date(request.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {request.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => onApprove(request.id)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => onReject(request.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                      >
                        <XCircle className="w-6 h-6" />
                      </button>
                    </>
                  ) : (
                    <span className={`flex items-center space-x-1 ${
                      request.status === 'approved' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {request.status === 'approved' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span className="capitalize">{request.status}</span>
                    </span>
                  )}
                </div>
              </div>
              
              {request.documents && request.documents.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-semibold mb-2">Submitted Documents:</p>
                  <div className="flex flex-wrap gap-2">
                    {request.documents.map((doc, index) => (
                      <a
                        key={index}
                        href={doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Document {index + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}