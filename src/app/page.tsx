import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur Manguini
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Votre plateforme de services artisanaux de confiance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/inscription/client"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              S'inscrire en tant que client
            </Link>
            <Link
              href="/inscription/professionnel"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              S'inscrire en tant que professionnel
            </Link>
            <Link
              href="/services"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nos services populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cartes des services à implémenter */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Rénovation</h3>
              <p className="text-gray-600">Services de rénovation intérieure et extérieure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Plomberie</h3>
              <p className="text-gray-600">Services de plomberie et installation sanitaire</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Électricité</h3>
              <p className="text-gray-600">Installation et dépannage électrique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Qualité garantie</h3>
              <p className="text-gray-600">
                Tous nos artisans sont sélectionnés et vérifiés
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Prix transparents</h3>
              <p className="text-gray-600">
                Des tarifs clairs et sans surprise
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Service client 24/7</h3>
              <p className="text-gray-600">
                Une équipe à votre écoute pour vous accompagner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 