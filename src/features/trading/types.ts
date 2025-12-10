export enum LoanStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  Closed = 'CLOSED',
  Defaulted = 'DEFAULTED',
}

export interface Loan {
  id: string;
  borrowerName: string;
  amount: number;
  interestRate: number;
  term: number;
  purpose: string;
  status: LoanStatus;
  createdAt: string;
  updatedAt: string;
  sustainabilityScore?: number;
  riskRating?: string;
  collateralType?: string;
  lastPaymentDate?: string;
  nextPaymentDue?: string;
}

export interface ApiResponse<T> {
  data: T;
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface LoanFilters {
  status?: LoanStatus;
  search?: string;
  minAmount?: number;
  maxAmount?: number;
  riskRatings?: string[];
  page?: number;
  limit?: number;
  sortBy?: 'amount' | 'interestRate' | 'term' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface WebSocketMessage {
  type: 'LOAN_UPDATED' | 'LOAN_CREATED' | 'LOAN_DELETED';
  payload: Loan;
}

export interface PaginatedLoans {
  loans: Loan[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
