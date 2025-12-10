import { Loan } from '../types';

// Mock data - replace with actual API calls
const mockLoans: Loan[] = [
  {
    id: '1',
    borrowerName: 'Green Energy Corp',
    amount: 500000,
    interestRate: 5.5,
    term: 60,
    purpose: 'Solar panel installation',
    status: 'ACTIVE',
    createdAt: '2023-01-15',
    updatedAt: '2023-01-15',
    sustainabilityScore: 85,
    riskRating: 'A',
    collateralType: 'Commercial Property',
    lastPaymentDate: '2023-05-01',
    nextPaymentDue: '2023-06-01',
  },
  {
    id: '2',
    borrowerName: 'Urban Housing Ltd',
    amount: 1200000,
    interestRate: 4.75,
    term: 120,
    purpose: 'Eco-friendly residential complex',
    status: 'ACTIVE',
    createdAt: '2023-02-10',
    updatedAt: '2023-02-10',
    sustainabilityScore: 92,
    riskRating: 'AA',
    collateralType: 'Residential Property',
    lastPaymentDate: '2023-05-01',
    nextPaymentDue: '2023-06-01',
  },
  {
    id: '3',
    borrowerName: 'Tech Innovations Inc',
    amount: 250000,
    interestRate: 6.25,
    term: 36,
    purpose: 'Green technology R&D',
    status: 'PENDING',
    createdAt: '2023-03-15',
    updatedAt: '2023-03-15',
    sustainabilityScore: 78,
    riskRating: 'BBB',
    collateralType: 'Intellectual Property',
  },
];

export const fetchLoans = async (): Promise<Loan[]> => {
  // In a real app, this would be an API call
  // const response = await fetch('/api/loans');
  // return response.json();
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockLoans), 500);
  });
};
