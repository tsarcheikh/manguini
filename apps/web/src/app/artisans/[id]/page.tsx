'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

// Données statiques avec images Unsplash à jour
const artisans = [
  {
    id: 1,
    name: 'Omar Ly',
    location: 'Kaolack, Passoire',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=300&h=300&fit=crop', // Plombier souriant
    specialites: ['Plomberie', 'Installation Sanitaire', 'Dépannage Urgent'],
    rating: 5,
    description: "Artisan plombier expérimenté, Omar Ly intervient rapidement pour tous vos travaux d'installation et de dépannage à Kaolack et ses environs. Réputé pour son sérieux et la qualité de son travail.",
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470', // Plumber fixing sink
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470', // Bathroom installation
      'https://images.unsplash.com/photo-1541123356219-284ebe98ae3a?q=80&w=1470'  // Pipes
    ],
    reviews: [
      { id: 1, author: "Aissatou Diallo", rating: 5, comment: "Intervention rapide et efficace. Très professionnel."}, 
      { id: 2, author: "Mamadou Diouf", rating: 5, comment: "Excellent travail pour l'installation de ma nouvelle salle de bain. Je recommande vivement !"}
    ]
  },
  {
    id: 2,
    name: 'Moustapha Faye',
    location: 'Karang Poste',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&h=300&fit=crop', // Électricien pensif
    specialites: ['Électricité Générale', 'Tableaux électriques', 'Mise aux normes'],
    rating: 4,
    description: "Électricien qualifié et réactif, Moustapha Faye assure la sécurité et la conformité de vos installations électriques.",
    gallery: [
      'https://images.unsplash.com/photo-1487611459769-bd7f4b59b069?q=80&w=1470', // Electrician working
      'https://images.unsplash.com/photo-1617510281653-855c8464a79e?q=80&w=1471', // Electrical panel
      'https://images.unsplash.com/photo-1517028923856-a3ec41a8a59d?q=80&w=1470' // Wires
    ],
    reviews: [
      { id: 3, author: "Alioune Badara", rating: 4, comment: "Très bon service, délai respecté."}, 
    ]
  },
  {
    id: 4,
    name: 'Abdou Diop',
    location: 'Thiès',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop', // Menuisier souriant
    specialites: ['Menuiserie Bois', 'Fenêtres & Portes', 'Agencement intérieur'],
    rating: 4,
    description: "Passionné par le bois, Abdou Diop réalise des ouvrages sur mesure alliant esthétique et durabilité.",
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1470', // Interior design wood
      'https://images.unsplash.com/photo-1595514521698-7507614f635f?q=80&w=1470', // Woodworking tools
      'https://images.unsplash.com/photo-1556912173-35feb396ae4a?q=80&w=1470' // Custom furniture
    ],
    reviews: [
      { id: 4, author: "Coumba Ndiaye", rating: 4, comment: "Fenêtres de qualité, pose impeccable."}, 
    ]
  },
  // Ajoutez d'autres artisans ici si nécessaire pour les tests
]

// Fonction pour récupérer un artisan par ID (simulée)
const getArtisanById = (id: number) => {
  return artisans.find(a => a.id === id);
}

export default function ArtisanProfilePage() {
  const params = useParams();
  const artisanId = params?.id ? parseInt(params.id as string) : null;
  const artisan = artisanId ? getArtisanById(artisanId) : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Veuillez attribuer une note');
      return;
    }

    if (!comment.trim()) {
      setError('Veuillez écrire un avis');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Réinitialiser le formulaire
      setRating(0);
      setComment('');
      setSuccess(true);
      
      // Réinitialiser le message de succès après 3 secondes
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Une erreur est survenue lors de la soumission de votre avis');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artisan non trouvé.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Bannière de profil (optionnelle) */}
          <div className="h-48 bg-gradient-to-r from-blue-100 to-orange-100 relative">
            {/* Vous pouvez ajouter une image de couverture ici */}
            <div className="absolute bottom-0 left-8 transform translate-y-1/2">
              <img 
                src={artisan.image} 
                alt={artisan.name} 
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Contenu principal */}
          <div className="pt-20 pb-12 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{artisan.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{artisan.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < artisan.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-2">({artisan.reviews.length} avis)</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Link 
                  href={`/artisans/${artisan.id}/demander-devis`} 
                  className="bg-[#eea852] hover:bg-[#e69635] text-white px-6 py-3 rounded-xl transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Spécialités */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spécialités</h2>
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">À propos de {artisan.name}</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{artisan.description}</p>
                {/* Ajoutez plus de détails si nécessaire */}
              </div>
            </div>

            {/* Galerie */}
            {artisan.gallery && artisan.gallery.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Galerie</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artisan.gallery.map((imageUrl, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square rounded-lg overflow-hidden group shadow-sm cursor-pointer"
                      onClick={() => setSelectedImage(imageUrl)}
                    >
                      <img 
                        src={imageUrl} 
                        alt={`Réalisation ${index + 1} de ${artisan.name}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Avis Clients */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Avis Clients</h2>
              <div className="space-y-6">
                {artisan.reviews.length > 0 ? (
                  artisan.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-semibold text-gray-800">{review.author}</span>
                      </div>
                      <p className="text-gray-600 italic">"{review.comment}"</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Aucun avis pour le moment.</p>
                )}

                {/* Formulaire pour laisser un avis */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Laisser un avis</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <label htmlFor="rating" className="text-sm font-medium text-gray-700">
                        Note :
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            className={`w-5 h-5 focus:outline-none ${
                              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            <svg viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={2}
                        className="w-full x-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                        placeholder="Partagez votre expérience avec cet artisan..."
                      ></textarea>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    {success && (
                      <div className="text-green-500 text-sm">
                        Votre avis a été publié avec succès !
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-1.5 px-4 rounded-lg transition-colors duration-300 text-sm ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Publication...' : 'Publier l\'avis'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}> 
            <img 
              src={selectedImage} 
              alt="Zoomed realization" 
              className="block max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 