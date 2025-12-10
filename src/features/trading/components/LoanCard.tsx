import React from 'react';
import { Loan } from '../types';

interface LoanCardProps {
  loan: Loan;
}

export const LoanCard: React.FC<LoanCardProps> = ({ loan }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{loan.borrowerName}</h3>
          <p className="text-gray-600">{loan.purpose}</p>
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Amount: ${loan.amount.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">
              Rate: {loan.interestRate}%
            </span>
            <span className="text-sm text-gray-500">
              Term: {loan.term} months
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium hover:bg-blue-200">
            View Details
          </button>
          <button className="px-3 py-1 bg-green-100 text-green-600 rounded text-sm font-medium hover:bg-green-200">
            Make Offer
          </button>
        </div>
      </div>
      {loan.sustainabilityScore !== undefined && (
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Sustainability Score:</span>
            <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${
                  loan.sustainabilityScore > 75 
                    ? 'bg-green-500' 
                    : loan.sustainabilityScore > 50 
                      ? 'bg-yellow-500' 
                      : 'bg-red-500'
                }`}
                style={{ width: `${loan.sustainabilityScore}%` }}
              />
            </div>
            <span className="text-sm font-medium">{loan.sustainabilityScore}/100</span>
          </div>
        </div>
      )}
    </div>
  );
};
