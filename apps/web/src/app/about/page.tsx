'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function About() {
  const [counts, setCounts] = useState({
    clients: 0,
    professionals: 0,
    serviceQuality: 0
  })

  const statsRef = useRef(null)
  const animationStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          animationStarted.current = true
          animateNumbers()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    const duration = 2000
    const steps = 50
    const interval = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        clients: Math.floor(progress * 2000),
        professionals: Math.floor(progress * 500),
        serviceQuality: Math.floor(progress * 98)
      })

      if (currentStep === steps) {
        clearInterval(timer)
      }
    }, interval)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section avec animation de fade-in */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            À propos de Manguini
          </h1>
          <p className="text-lg max-w-2xl opacity-90 animate-slide-up-delay">
            Votre site n°1 pour vos travaux et dépannages au Sénégal
          </p>
        </div>
      </div>

      {/* Qui sommes-nous Section avec animation de fade-in */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-primary mb-6">Qui sommes-nous?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Mangui Ni est une plateforme de mise en relation avec des artisans qualifiés et certifiés à travers le Sénégal. 
              Notre mission est de faciliter la recherche et la mise en contact avec des professionnels compétents dans divers 
              secteurs tels que l'électricité, la plomberie, la menuiserie, la mécanique, et bien plus encore.
            </p>
          </div>
        </div>
      </div>

      {/* Nos Offres Section avec hover effects */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Nos Offres de Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Recherche rapide",
                description: "Recherche rapide de professionnels pour travaux ou dépannages.",
                icon: "🔍"
              },
              {
                title: "Professionnels certifiés",
                description: "Accès à notre longue liste de professionnels certifiés.",
                icon: "✅"
              },
              {
                title: "Adhésion facilitée",
                description: "Adhésion facilitée pour ouvriers sans carte professionnelle.",
                icon: "📝"
              },
              {
                title: "Avis clients",
                description: "Avis et évaluations de clients pour un choix éclairé.",
                icon: "⭐"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl transform hover:scale-110 transition-transform duration-300">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pourquoi nous choisir Section avec borders et shadows */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi choisir Mangui Ni ?</h2>
            <p className="text-xl text-gray-600">Gagnez du temps, Testez la différence !</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fiabilité",
                description: "Nous travaillons en partenariat avec la chambre des métiers pour vous garantir des artisans certifiés",
                icon: "🏆"
              },
              {
                title: "Facilité d'Utilisation",
                description: "Notre plateforme est conçue pour être simple et intuitive, vous permettant de trouver le bon artisan en quelques clics.",
                icon: "💻"
              },
              {
                title: "Support",
                description: "Notre équipe est là pour vous assister à chaque étape, de la recherche à la finalisation des travaux.",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistiques Section avec animation */}
      <div ref={statsRef} className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">{counts.clients.toLocaleString()}+</div>
              <div className="text-lg opacity-90">Clients</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">{counts.professionals.toLocaleString()}+</div>
              <div className="text-lg opacity-90">Professionnels</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">{counts.serviceQuality}%</div>
              <div className="text-lg opacity-90">Satisfaction Client</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div id="partenaires" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nous travaillons avec
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Des partenaires de confiance pour vous offrir le meilleur service
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Partenaire 1 */}
            <div className="flex items-center justify-center">
              <img
                className="h-12 opacity-50 hover:opacity-100 transition-opacity"
                src="https://via.placeholder.com/200x100?text=Logo+Partenaire"
                alt="Partenaire 1"
              />
            </div>
            {/* Partenaire 2 */}
            <div className="flex items-center justify-center">
              <img
                className="h-12 opacity-50 hover:opacity-100 transition-opacity"
                src="https://via.placeholder.com/200x100?text=Logo+Partenaire"
                alt="Partenaire 2"
              />
            </div>
            {/* Partenaire 3 */}
            <div className="flex items-center justify-center">
              <img
                className="h-12 opacity-50 hover:opacity-100 transition-opacity"
                src="https://via.placeholder.com/200x100?text=Logo+Partenaire"
                alt="Partenaire 3"
              />
            </div>
            {/* Partenaire 4 */}
            <div className="flex items-center justify-center">
              <img
                className="h-12 opacity-50 hover:opacity-100 transition-opacity"
                src="https://via.placeholder.com/200x100?text=Logo+Partenaire"
                alt="Partenaire 4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Devenez partenaire Manguini
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez notre réseau d'artisans qualifiés et développez votre activité. 
              Bénéficiez d'une visibilité accrue et d'outils professionnels pour gérer vos projets.
            </p>
            <Link 
              href="/devenir-partenaire"
              className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary-light text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg group"
            >
              Devenir partenaire
              <svg 
                className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 