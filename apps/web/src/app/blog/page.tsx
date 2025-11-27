'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Données des articles (à remplacer par les données réelles)
const articles = [
  {
    title: 'Comment choisir le bon artisan pour vos travaux',
    excerpt: 'Découvrez nos conseils pour sélectionner l\'artisan idéal pour vos projets.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '15 Mars 2024',
    category: 'Conseils',
    slug: 'choisir-artisan'
  },
  {
    title: 'Les 10 erreurs à éviter lors de travaux',
    excerpt: 'Apprenez à éviter les pièges courants lors de vos projets de rénovation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '10 Mars 2024',
    category: 'Rénovation',
    slug: 'erreurs-travaux'
  },
  {
    title: 'Comment préparer son logement pour des travaux',
    excerpt: 'Tout ce qu\'il faut savoir pour bien préparer votre logement avant des travaux.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '5 Mars 2024',
    category: 'Préparation',
    slug: 'preparer-travaux'
  }
]

const categories = [
  { name: 'Tous', count: 12 },
  { name: 'Conseils', count: 4 },
  { name: 'Rénovation', count: 3 },
  { name: 'Préparation', count: 2 },
  { name: 'Actualités', count: 3 }
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  return (
    <div className="bg-white">
      {/* En-tête */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Blog Manguini
          </h1>
          <p className="text-lg max-w-2xl opacity-90 animate-slide-up-delay">
            Découvrez nos conseils, astuces et actualités pour vos projets de travaux et rénovation.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Catégories */}
          <div className="lg:col-span-3">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-lg transition-colors ${
                    activeCategory === category.name
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="mt-12 lg:mt-0 lg:col-span-9">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter(article => activeCategory === 'Tous' || article.category === activeCategory)
                .map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group"
                  >
                    <div className="relative h-48 mb-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{article.excerpt}</p>
                    <p className="mt-4 text-sm text-gray-500">{article.date}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 