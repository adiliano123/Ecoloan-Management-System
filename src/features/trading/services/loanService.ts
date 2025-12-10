import { api } from '@/lib/api';
import { Loan, LoanStatus } from '../types';

interface FetchLoansParams {
  status?: LoanStatus;
  page?: number;
  limit?: number;
  search?: string;
}

export const loanService = {
  async fetchLoans(params: FetchLoansParams = {}) {
    const response = await api.get('/loans', { params });
    return response.data;
  },

  async fetchLoanById(id: string) {
    const response = await api.get(`/loans/${id}`);
    return response.data;
  },

  async createLoan(loanData: Omit<Loan, 'id' | 'createdAt' | 'updatedAt'>) {
    const response = await api.post('/loans', loanData);
    return response.data;
  },

  async updateLoan(id: string, updates: Partial<Loan>) {
    const response = await api.put(`/loans/${id}`, updates);
    return response.data;
  },

  async deleteLoan(id: string) {
    await api.delete(`/loans/${id}`);
  },

  async submitOffer(loanId: string, offerData: { amount: number; interestRate: number }) {
    const response = await api.post(`/loans/${loanId}/offers`, offerData);
    return response.data;
  }
};

export default loanService;
