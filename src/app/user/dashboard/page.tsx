'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function UserDashboard() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.role !== 'user') {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mes commandes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mes commandes</h2>
          <div className="space-y-4">
            {/* Liste des commandes à implémenter */}
            <p className="text-gray-600">Aucune commande en cours</p>
          </div>
        </div>

        {/* Mes services favoris */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mes services favoris</h2>
          <div className="space-y-4">
            {/* Liste des services favoris à implémenter */}
            <p className="text-gray-600">Aucun service favori</p>
          </div>
        </div>

        {/* Mon profil */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mon profil</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Nom</p>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <button
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => router.push('/user/profile')}
            >
              Modifier mon profil
            </button>
          </div>
        </div>
      </div>

      {/* Section des services recommandés */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Services recommandés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Liste des services recommandés à implémenter */}
          <p className="text-gray-600">Chargement des recommandations...</p>
        </div>
      </div>
    </div>
  );
} 