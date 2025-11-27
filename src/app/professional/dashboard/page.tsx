'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProfessionalDashboard() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.role !== 'professional') {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Professionnel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Commandes en cours */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Commandes en cours</h2>
          <div className="space-y-4">
            {/* Liste des commandes à implémenter */}
            <p className="text-gray-600">Aucune commande en cours</p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-gray-600">Commandes totales</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-green-600">0€</p>
              <p className="text-gray-600">Revenus</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-yellow-600">0</p>
              <p className="text-gray-600">En attente</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-gray-600">Terminées</p>
            </div>
          </div>
        </div>

        {/* Profil professionnel */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mon profil professionnel</h2>
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
              onClick={() => router.push('/professional/profile')}
            >
              Modifier mon profil
            </button>
          </div>
        </div>
      </div>

      {/* Gestion des services */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Mes services</h2>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => router.push('/professional/services/new')}
          >
            Ajouter un service
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Liste des services à implémenter */}
          <p className="text-gray-600">Aucun service disponible</p>
        </div>
      </div>
    </div>
  );
} 