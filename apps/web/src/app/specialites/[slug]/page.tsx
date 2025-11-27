'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// Données statiques (à remplacer par un appel API)
const artisans = [
  {
    id: 1,
    name: 'Omar Ly',
    location: 'Kaolack, Passoire',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=300&h=300&fit=crop',
    specialites: ['Plomberie', 'Installation Sanitaire', 'Dépannage Urgent'],
    rating: 5,
    description: "Artisan plombier expérimenté, Omar Ly intervient rapidement pour tous vos travaux d'installation et de dépannage à Kaolack et ses environs. Réputé pour son sérieux et la qualité de son travail.",
  },
  {
    id: 2,
    name: 'Moustapha Faye',
    location: 'Karang Poste',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&h=300&fit=crop',
    specialites: ['Électricité Générale', 'Tableaux électriques', 'Mise aux normes'],
    rating: 4,
    description: "Électricien qualifié et réactif, Moustapha Faye assure la sécurité et la conformité de vos installations électriques.",
  },
  {
    id: 3,
    name: 'Abdou Diop',
    location: 'Thiès',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop',
    specialites: ['Menuiserie Bois', 'Fenêtres & Portes', 'Agencement intérieur'],
    rating: 4,
    description: "Passionné par le bois, Abdou Diop réalise des ouvrages sur mesure alliant esthétique et durabilité.",
  },
]

// Liste des spécialités disponibles
const specialites = [
  'Plomberie',
  'Installation Sanitaire',
  'Dépannage Urgent',
  'Électricité Générale',
  'Tableaux électriques',
  'Mise aux normes',
  'Menuiserie Bois',
  'Fenêtres & Portes',
  'Agencement intérieur',
]

export default function SpecialitePage() {
  const params = useParams()
  const slug = params?.slug as string
  const specialite = specialites.find(s => s.toLowerCase().replace(/ /g, '-') === slug)

  // Filtrer les artisans par spécialité
  const artisansFiltres = artisans.filter(artisan => 
    artisan.specialites.some(s => s.toLowerCase().replace(/ /g, '-') === slug)
  )

  if (!specialite) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Spécialité non trouvée.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Artisans en {specialite}</h1>
            <p className="text-gray-600">Découvrez nos artisans spécialisés en {specialite.toLowerCase()}</p>
          </div>

          {/* Liste des artisans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisansFiltres.map((artisan) => (
              <Link 
                key={artisan.id}
                href={`/artisans/${artisan.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{artisan.name}</h2>
                  <p className="text-gray-600 mb-4">{artisan.location}</p>
                  <div className="flex items-center gap-1 mb-4">
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
                  <div className="flex flex-wrap gap-2">
                    {artisan.specialites.map((specialite) => (
                      <span
                        key={specialite}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {specialite}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 