'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Manguini</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
                  Connexion
                </Link>
                <Link href="/auth/register" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Inscription
                </Link>
              </>
            ) : (
              <>
                {user.role === 'admin' && (
                  <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
                    Dashboard Admin
                  </Link>
                )}
                {user.role === 'professional' && (
                  <Link href="/professional/dashboard" className="text-gray-600 hover:text-gray-900">
                    Dashboard Pro
                  </Link>
                )}
                {user.role === 'user' && (
                  <Link href="/user/dashboard" className="text-gray-600 hover:text-gray-900">
                    Mon Compte
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-red-500 hover:text-red-700"
                >
                  Déconnexion
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 