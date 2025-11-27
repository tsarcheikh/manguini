'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
  // ... autres artisans
]

const getArtisanById = (id: number) => {
  return artisans.find(a => a.id === id)
}

export default function DemanderDevisArtisan() {
  const params = useParams()
  const artisanId = params?.id ? parseInt(params.id as string) : null
  const artisan = artisanId ? getArtisanById(artisanId) : null

  const [formData, setFormData] = useState({
    typeService: '',
    description: '',
    budgetEstime: '',
    delai: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess(true)
      setFormData({
        typeService: '',
        description: '',
        budgetEstime: '',
        delai: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        ville: '',
        codePostal: '',
      })
    } catch (err) {
      setError('Une erreur est survenue lors de la soumission de votre demande')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artisan non trouvé.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Lien retour */}
          <Link 
            href={`/artisans/${artisanId}`}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au profil de l'artisan
          </Link>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* En-tête avec informations de l'artisan */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{artisan.name}</h1>
                  <p className="text-gray-600">{artisan.location}</p>
                  <div className="flex items-center gap-1 mt-1">
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
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Spécialités</h2>
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
            </div>

            {/* Formulaire de demande de devis */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Demander un devis</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="typeService" className="block text-sm font-medium text-gray-700 mb-1">
                      Type de service
                    </label>
                    <select
                      id="typeService"
                      name="typeService"
                      value={formData.typeService}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      {artisan.specialites.map((specialite) => (
                        <option key={specialite} value={specialite}>
                          {specialite}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budgetEstime" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget estimé
                    </label>
                    <input
                      type="text"
                      id="budgetEstime"
                      name="budgetEstime"
                      value={formData.budgetEstime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      placeholder="Ex: 500€ - 1000€"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description détaillée
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    placeholder="Décrivez en détail votre projet..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="delai" className="block text-sm font-medium text-gray-700 mb-1">
                    Délai souhaité
                  </label>
                  <input
                    type="text"
                    id="delai"
                    name="delai"
                    value={formData.delai}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    placeholder="Ex: Dans les 2 semaines"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">
                      Code postal
                    </label>
                    <input
                      type="text"
                      id="codePostal"
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">
                    Photos travaux à faire
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="photos"
                    />
                    <label
                      htmlFor="photos"
                      className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                    >
                      Ajouter des photos
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      Formats acceptés : JPG, PNG. Max 5Mo par image
                    </p>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                {success && (
                  <div className="text-green-500 text-sm">
                    Votre demande de devis a été envoyée avec succès !
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 