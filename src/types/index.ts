export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'professional' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  professionalId: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  serviceId: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
} 