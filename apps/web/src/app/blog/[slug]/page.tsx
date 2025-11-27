'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Données de l'article (à remplacer par les données réelles)
const article = {
  title: 'Comment choisir le bon artisan pour vos travaux',
  date: '15 Mars 2024',
  author: 'Jean Dupont',
  category: 'Conseils',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  content: `
    <p class="lead text-xl text-gray-700 mb-8">Choisir le bon artisan pour vos travaux est une étape cruciale pour garantir la qualité et la réussite de votre projet. Voici quelques conseils pour vous aider dans votre sélection :</p>
    
    <div class="my-12">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Artisan au travail" class="rounded-lg shadow-lg w-full">
      <p class="text-sm text-gray-500 mt-2 text-center">Un artisan qualifié au travail</p>
    </div>
    
    <h2 class="text-3xl font-bold text-gray-900 mb-6">1. Vérifiez les qualifications</h2>
    <p class="text-lg text-gray-700 mb-6">Assurez-vous que l'artisan possède les qualifications nécessaires pour réaliser vos travaux. Demandez à voir ses diplômes, certifications et attestations d'assurance.</p>
    
    <div class="bg-indigo-50 p-8 rounded-lg my-12">
      <h3 class="text-xl font-semibold text-indigo-900 mb-4">Conseil pratique</h3>
      <p class="text-indigo-700 text-lg">N'hésitez pas à demander les références de l'artisan et à contacter ses anciens clients pour avoir leur retour d'expérience.</p>
    </div>
    
    <h2 class="text-3xl font-bold text-gray-900 mb-6">2. Consultez les avis clients</h2>
    <p class="text-lg text-gray-700 mb-6">Les avis des clients précédents sont un excellent indicateur de la qualité du travail et du professionnalisme de l'artisan.</p>
    
    <h2 class="text-3xl font-bold text-gray-900 mb-6">3. Comparez les devis</h2>
    <p class="text-lg text-gray-700 mb-6">N'hésitez pas à demander plusieurs devis pour comparer les prix et les prestations proposées.</p>
    
    <div class="my-12">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Comparaison de devis" class="rounded-lg shadow-lg w-full">
      <p class="text-sm text-gray-500 mt-2 text-center">Comparaison de devis</p>
    </div>
    
    <h2 class="text-3xl font-bold text-gray-900 mb-6">4. Vérifiez les références</h2>
    <p class="text-lg text-gray-700 mb-6">Demandez à voir des exemples de travaux similaires réalisés par l'artisan.</p>
  `,
  relatedArticles: [
    {
      title: 'Les 10 erreurs à éviter lors de travaux',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: '10 Mars 2024',
      slug: 'erreurs-travaux'
    },
    {
      title: 'Comment préparer son logement pour des travaux',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: '5 Mars 2024',
      slug: 'preparer-travaux'
    }
  ]
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Simuler la récupération de l'article basé sur le slug
  const getArticle = (slug: string) => {
    // Dans une vraie application, ceci serait une requête API
    return article
  }

  const currentArticle = getArticle(params.slug)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentArticle.title,
          text: currentArticle.content.substring(0, 100) + '...',
          url: window.location.href,
        })
      } catch (error) {
        console.error('Erreur lors du partage:', error)
        setShowShareMenu(true)
      }
    } else {
      setShowShareMenu(true)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* En-tête de l'article */}
      <div className="relative h-[400px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom h-full flex flex-col justify-center text-white relative z-10">
          <div className="max-w-4xl mx-auto w-full px-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full mb-4 animate-slide-up">
              {currentArticle.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              {currentArticle.title}
            </h1>
            <div className="flex items-center space-x-4 opacity-90 animate-slide-up-delay">
              <span>{currentArticle.date}</span>
              <span>•</span>
              <span>Par {currentArticle.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 hover:prose-a:text-indigo-500"
          dangerouslySetInnerHTML={{ __html: currentArticle.content }}
        />

        {/* Actions */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isLiked ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{likes}</span>
            </button>
          </div>
          <div className="relative">
            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Partager l'article
            </button>
            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentArticle.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(currentArticle.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Articles similaires */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentArticle.relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                  {related.title}
                </h3>
                <p className="mt-2 text-gray-500">{related.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 