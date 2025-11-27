'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import manguiniMockup from '@/assets/images/manguini_mockup.png';

const services = [
  { name: 'BTP & Construction', slug: 'btp-construction', icon: '🏗️', count: 125 },
  { name: 'Électricité', slug: 'electricite', icon: '⚡', count: 98 },
  { name: 'Plomberie', slug: 'plomberie', icon: '🔧', count: 85 },
  { name: 'Menuiserie', slug: 'menuiserie', icon: '🪑', count: 72 },
  { name: 'Peinture & Décoration', slug: 'peinture-decoration', icon: '🎨', count: 94 },
  { name: 'Jardinage & Paysagisme', slug: 'jardinage-paysagisme', icon: '🌳', count: 67 },
  { name: 'Nettoyage & Entretien', slug: 'nettoyage-entretien', icon: '🧹', count: 89 },
  { name: 'Climatisation & Chauffage', slug: 'climatisation-chauffage', icon: '❄️', count: 45 },
  { name: 'Carrelage & Revêtement', slug: 'carrelage-revetement', icon: '🔲', count: 56 },
  { name: 'Serrurerie', slug: 'serrurerie', icon: '🔑', count: 38 },
  { name: 'Maçonnerie', slug: 'maconnerie', icon: '🧱', count: 77 },
  { name: 'Rénovation', slug: 'renovation', icon: '🏠', count: 92 }
]

const artisans = [
  {
    id: 1,
    name: 'Omar Ly',
    location: 'Kaolack, Passoire',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['Plomberie', 'Installation'],
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: 'Moustapha Faye',
    location: 'Karang Poste',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['Électricité', 'Dépannage'],
    rating: 4,
    featured: true,
  },
  {
    id: 3,
    name: 'Dial Gueye',
    location: 'Mékhé Village',
    image: 'https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['Maçonnerie', 'Construction'],
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    name: 'Abdou Diop',
    location: 'Thiès',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['Menuiserie', 'Rénovation'],
    rating: 4,
    featured: true,
  },
  {
    id: 5,
    name: 'Fatou Sow',
    location: 'Dakar',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['Peinture', 'Décoration'],
    rating: 5,
    featured: true,
  },
  {
    id: 6,
    name: 'Mamadou Fall',
    location: 'Saint-Louis',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialites: ['BTP', 'Génie Civil'],
    rating: 4,
    featured: true,
  },
]

const communes = [
  'Dakar Plateau',
  'Médina',
  'Grand Dakar',
  'Almadies',
  'Ouakam',
  'Yoff',
  'Parcelles Assainies',
  'Guédiawaye',
]

const heroImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Électricien au travail
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Plombier
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Construction
]

const rotatingWords = ['pour vos travaux', 'près de chez vous', 'en quelques clics']

const featuredCategories = [
  { name: 'Plomberie', slug: 'plomberie', icon: '🔧' },
  { name: 'BTP & Construction', slug: 'btp-construction', icon: '🏗️' },
  { name: 'Électricité', slug: 'electricite', icon: '⚡' },
]

export default function Home() {
  const [isFavorite, setIsFavorite] = useState<{[key: number]: boolean}>({})
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [location, setLocation] = useState('')
  const [isGeolocating, setIsGeolocating] = useState(false)

  const handleGeolocation = () => {
    setIsGeolocating(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Ici vous pourriez utiliser une API de géocodage inverse pour obtenir l'adresse
          setLocation("Position actuelle")
          setIsGeolocating(false)
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error)
          setIsGeolocating(false)
        }
      )
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
        setIsAnimating(true)
      }, 100)
    }, 3000)

    // Animation du slider
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(imageInterval)
    }
  }, [])

  const toggleFavorite = (id: number) => {
    setIsFavorite(prev => ({...prev, [id]: !prev[id]}))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(artisans.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(artisans.length / 3) - 1 : prev - 1))
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.querySelector('input[placeholder="Que recherchez-vous ?"]') as HTMLInputElement;
    const locationInput = form.querySelector('input[placeholder="Dans quelle localité ?"]') as HTMLInputElement;
    const categorySelect = form.querySelector('select') as HTMLSelectElement;

    const query = queryInput.value;
    const location = locationInput.value;
    const category = categorySelect.value; // This should be the slug

    const searchParams = new URLSearchParams();
    if (query) searchParams.set('q', query);
    if (location && location !== 'Position actuelle') searchParams.set('location', location);
    if (category) searchParams.set('category', category);

    window.location.href = `/search?${searchParams.toString()}`; // Use window.location for simple redirect
  }

  return (
    <main className="min-h-screen">
      {/* Section Hero avec nouveau style */}
      <section className="relative overflow-hidden">
        {/* Arrière-plan avec image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B3A]/95 via-[#1B2B3A]/90 to-[#1B2B3A]/80"></div>
        </div>

        {/* Motif de superposition */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto pt-32 pb-24 px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                Trouvez un professionnel<br />
                <span className={`inline-block animate-fade-in-up text-[#eea852] ${isAnimating ? 'animate-rotate-text' : ''}`}>
                  {rotatingWords[currentWordIndex]}
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                Des milliers de professionnels qualifiés prêts à vous accompagner dans vos travaux ou dépannages.
              </p>
            </div>

            {/* Barre de recherche avec nouveau style */}
            <div className="max-w-7xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="grid grid-cols-12 gap-6">
                  {/* Que recherchez-vous? */}
                  <div className="relative col-span-5">
                    <input
                      type="text"
                      placeholder="Que recherchez-vous ?"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-primary-400 bg-transparent"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                  </div>

                  {/* Dans quelle localité ? */}
                  <div className="relative col-span-3">
                    <input
                      type="text"
                      placeholder="Dans quelle localité ?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 rounded-xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-primary-400 bg-transparent"
                    />
                    <button
                      onClick={handleGeolocation}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#eea852] transition-colors"
                    >
                      <svg className={`w-5 h-5 ${isGeolocating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Toutes les catégories */}
                  <div className="relative col-span-2">
                    <select
                      name="category"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-primary-400 bg-transparent appearance-none"
                    >
                      <option value="">Tous</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>{service.name}</option>
                      ))}
                    </select>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </span>
                  </div>

                  {/* Bouton Rechercher */}
                  <button type="submit" className="col-span-2 bg-[#eea852] text-white px-8 py-3 rounded-xl hover:bg-[#de994c] transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                    Rechercher
                  </button>
                </div>
              </form>
            </div>

            {/* Catégories populaires - utilise la constante mise à jour */}
            <div className="mt-8 text-center">
              <p className="text-gray-200 text-sm mb-4">Parcourir les catégories les plus vues :</p>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredCategories.map((category) => (
                  <Link
                    href={`/services/${category.slug}`}
                    key={category.name}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-105 border border-white/20 flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Types de services avec nouveau design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-[#1B2B3A]">Explorez nos catégories de services</h2>
            <p className="text-gray-600 text-lg">Des professionnels qualifiés pour tous vos projets</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {services.map((service) => (
              <Link 
                href={`/services/${service.slug}`}
                key={service.name} 
                className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-[#eea852]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl filter saturate-[.7]">{service.icon}</span>
                  </div>
                  <h3 className="font-semibold text-[#1B2B3A] group-hover:text-[#eea852] transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artisans à la une avec slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Artisans à la une</h2>
            <p className="text-gray-600 text-lg">Les professionnels les mieux notés de notre plateforme</p>
          </div>
          <div className="relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: Math.ceil(artisans.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-none px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {artisans.slice(slideIndex * 3, (slideIndex + 1) * 3).map((artisan) => (
                      <div 
                        key={artisan.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        <div className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <img 
                                src={artisan.image} 
                                alt={artisan.name} 
                                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                              />
                              <button 
                                onClick={() => toggleFavorite(artisan.id)} 
                                className="absolute top-0 right-0 -mt-1 -mr-1 bg-white rounded-full p-1 shadow-sm"
                              >
                                <svg 
                                  className={`w-4 h-4 ${isFavorite[artisan.id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor" 
                                  fill="none"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">{artisan.name}</h3>
                              <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{artisan.location}</span>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < artisan.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {artisan.specialites.map((specialite) => (
                              <Link
                                key={specialite}
                                href={`/specialites/${specialite.toLowerCase().replace(/ /g, '-')}`}
                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm hover:bg-primary-100 transition-colors duration-300"
                              >
                                {specialite}
                              </Link>
                            ))}
                          </div>

                          <div className="mt-6 flex items-center justify-between">
                            <Link 
                              href={`/artisans/${artisan.id}`} 
                              className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                            >
                              Voir le profil →
                            </Link>
                            <Link 
                              href={`/artisans/${artisan.id}/demander-devis`} 
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              Demander un devis
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(artisans.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#eea852]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
            {/* Recherchez un service */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Recherchez un service</h3>
              <p className="text-gray-600 leading-relaxed">
                Parcourez notre base de professionnels qualifiés selon vos besoins en quelques clics.
              </p>
              {/* Ligne de connexion */}
              <div className="hidden md:block absolute top-10 -right-10 w-20 border-t-2 border-dashed border-secondary/40"></div>
            </div>

            {/* Choisissez un artisan */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">👥</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Choisissez un artisan</h3>
              <p className="text-gray-600 leading-relaxed">
                Comparez les profils de professionnels près de chez vous, en tenant compte des avis et qualifications.
              </p>
              {/* Ligne de connexion */}
              <div className="hidden md:block absolute top-10 -right-10 w-20 border-t-2 border-dashed border-secondary/40"></div>
            </div>

            {/* Demandez une prestation */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">📅</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Demandez une prestation</h3>
              <p className="text-gray-600 leading-relaxed">
                Prenez rendez-vous ou demandez un devis personnalisé directement auprès du professionnel sélectionné.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA Téléchargement */}
      <section className="py-24 bg-gradient-to-br from-[#1B2B3A] via-[#1B2B3A] to-[#1B2B3A] relative overflow-hidden">
        {/* Motif de fond */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Téléchargez notre application
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Accédez à tous nos services depuis votre smartphone. Trouvez un artisan, suivez vos projets et gérez vos rendez-vous en quelques clics.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-black/90 hover:bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.46-3.16.07-1.2-.42-2.35-.41-3.56 0-1.49.52-2.27.43-3.16-.07C3.38 16.62 3.85 11.12 7.88 10.9c1.05.01 1.82.46 2.49.46.67 0 1.9-.45 3.21-.47 5.43-.07 6.93 7.95 3.47 9.39M12.9 3.91c-3.35-.19-6.13 2.66-5.87 5.92 2.96-.06 5.82-2.9 5.87-5.92"/>
                  </svg>
                  <div>
                    <div className="text-xs">Télécharger sur</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-black/90 hover:bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.891 12l1.807-1.814zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Télécharger sur</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative h-[600px] hidden md:block">
            <Image 
              src={manguiniMockup} 
              alt="Application mobile" 
              layout="fill" 
              className="absolute inset-0 object-contain object-center transform scale-110"
            />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 