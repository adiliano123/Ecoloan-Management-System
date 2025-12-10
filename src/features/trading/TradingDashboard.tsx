import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { LoanCard } from './components/LoanCard';
import { Loan, LoanStatus } from './types';
import { fetchLoans } from './api/loans';

export const TradingDashboard = () => {
  const { data: loans, isLoading, error } = useQuery<Loan[]>({
    queryKey: ['loans'],
    queryFn: fetchLoans,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) return <div className="p-6">Loading loans...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading loans</div>;

  const activeLoans = loans?.filter(loan => loan.status === LoanStatus.Active) || [];
  const pendingLoans = loans?.filter(loan => loan.status === LoanStatus.Pending) || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Loan Trading Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Active Loans</h2>
          {activeLoans.length > 0 ? (
            activeLoans.map(loan => (
              <LoanCard key={loan.id} loan={loan} />
            ))
          ) : (
            <p className="text-gray-500">No active loans available</p>
          )}
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pending Approval</h2>
          {pendingLoans.length > 0 ? (
            pendingLoans.map(loan => (
              <LoanCard key={loan.id} loan={loan} />
            ))
          ) : (
            <p className="text-gray-500">No pending loans</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;
