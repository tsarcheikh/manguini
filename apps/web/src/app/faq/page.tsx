'use client'

import { useState } from 'react'

const faqCategories = [
  {
    title: 'Général',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    questions: [
      {
        question: 'Qu\'est-ce que Manguini ?',
        answer: 'Manguini est une plateforme de mise en relation entre clients et artisans qualifiés pour tous types de travaux et services à domicile.'
      },
      {
        question: 'Comment fonctionne Manguini ?',
        answer: 'Les clients peuvent rechercher des artisans par catégorie de service, consulter leurs profils et avis, et demander des devis. Les artisans peuvent créer leur profil, gérer leurs services et recevoir des demandes de devis.'
      }
    ]
  },
  {
    title: 'Pour les Clients',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    questions: [
      {
        question: 'Comment demander un devis ?',
        answer: 'Vous pouvez demander un devis en remplissant le formulaire sur notre page "Demander un devis" ou en contactant directement un artisan via son profil.'
      },
      {
        question: 'Comment choisir un artisan ?',
        answer: 'Nous vous recommandons de consulter les profils des artisans, leurs avis clients, leurs qualifications et leur zone d\'intervention pour faire votre choix.'
      }
    ]
  },
  {
    title: 'Pour les Artisans',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    questions: [
      {
        question: 'Comment s\'inscrire comme artisan ?',
        answer: 'Rendez-vous sur notre page d\'inscription professionnelle, remplissez le formulaire avec vos informations et documents, et notre équipe validera votre inscription sous 48h.'
      },
      {
        question: 'Quels sont les documents requis ?',
        answer: 'Les documents requis incluent : carte d\'identité, justificatif de domicile, attestation d\'assurance professionnelle, et diplômes/certifications selon votre domaine d\'activité.'
      }
    ]
  },
  {
    title: 'Paiement et Tarifs',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    questions: [
      {
        question: 'Comment fonctionne le paiement ?',
        answer: 'Le paiement se fait directement entre le client et l\'artisan selon les modalités convenues. Manguini ne prend pas de commission sur les transactions.'
      },
      {
        question: 'Quels sont les tarifs des services ?',
        answer: 'Les tarifs sont fixés librement par les artisans en fonction de leur expertise et des spécificités de chaque projet.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState(0)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="bg-white">
      {/* En-tête */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Questions fréquentes
          </h1>
          <p className="text-lg max-w-2xl opacity-90 animate-slide-up-delay">
            Trouvez rapidement les réponses à vos questions sur notre plateforme.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Catégories */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-colors ${
                    activeCategory === index
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.icon}
                    />
                  </svg>
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div className="mt-12 lg:mt-0 lg:col-span-9">
            <div className="space-y-6">
              {faqCategories[activeCategory].questions.map((item, questionIndex) => (
                <div
                  key={item.question}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleQuestion(activeCategory, questionIndex)}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    <svg
                      className={`${
                        openQuestions[`${activeCategory}-${questionIndex}`]
                          ? 'transform rotate-180'
                          : ''
                      } h-6 w-6 text-gray-400 transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      openQuestions[`${activeCategory}-${questionIndex}`]
                        ? 'max-h-96'
                        : 'max-h-0'
                    } overflow-hidden transition-all duration-300`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 