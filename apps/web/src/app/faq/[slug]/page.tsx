'use client'

import { useState } from 'react'
import Link from 'next/link'

// Données de la FAQ (à remplacer par les données réelles)
const faqItem = {
  title: 'Comment fonctionne le paiement sur Manguini ?',
  category: 'Paiement et Tarifs',
  content: `
    <p class="text-lg text-gray-700 mb-6">
      Le paiement sur Manguini est simple et sécurisé. Voici comment cela fonctionne :
    </p>
    
    <div class="space-y-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
            1
          </span>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Signature du devis</h3>
          <p class="mt-2 text-gray-600">
            Une fois le devis accepté, vous effectuez un acompte de 30% du montant total.
          </p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
            2
          </span>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Paiements intermédiaires</h3>
          <p class="mt-2 text-gray-600">
            Des paiements intermédiaires peuvent être effectués selon l'avancement des travaux.
          </p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
            3
          </span>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Solde final</h3>
          <p class="mt-2 text-gray-600">
            Le solde est versé à la réception des travaux, après validation de la qualité des prestations.
          </p>
        </div>
      </div>
    </div>
    
    <div class="mt-8 bg-indigo-50 p-6 rounded-lg">
      <h3 class="text-lg font-medium text-indigo-900">Conseil pratique</h3>
      <p class="mt-2 text-indigo-700">
        Nous vous recommandons de conserver tous les justificatifs de paiement et de signer un état des lieux à la fin des travaux.
      </p>
    </div>
  `,
  relatedQuestions: [
    {
      title: 'Quels sont les modes de paiement acceptés ?',
      slug: 'modes-paiement'
    },
    {
      title: 'Comment obtenir un remboursement ?',
      slug: 'remboursement'
    }
  ]
}

export default function FAQItemPage() {
  return (
    <div className="bg-white">
      {/* En-tête */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container-custom h-full flex flex-col justify-center text-white relative z-10">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full mb-4 animate-slide-up">
            {faqItem.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            {faqItem.title}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: faqItem.content }}
        />

        {/* Questions connexes */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions connexes</h2>
          <div className="space-y-4">
            {faqItem.relatedQuestions.map((question) => (
              <Link
                key={question.slug}
                href={`/faq/${question.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {question.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 