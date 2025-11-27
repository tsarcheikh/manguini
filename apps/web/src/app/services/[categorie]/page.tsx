'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { useState, useMemo } from 'react'

// Données statiques - à remplacer par une source de données réelle plus tard
const services = [
  { 
    name: 'BTP & Construction', 
    categorie: 'btp-construction', 
    icon: '🏗️', 
    description: 'Trouvez des maçons, couvreurs, et autres experts du bâtiment.',
    faqs: [
      { question: "Quels types de travaux peuvent réaliser vos artisans en BTP ?", 
        answer: "Nos artisans en BTP peuvent réaliser une large gamme de travaux : construction neuve, rénovation, extension, maçonnerie, couverture, etc." },
      { question: "Comment choisir le bon artisan pour mon projet de construction ?", 
        answer: "Nous vous recommandons de vérifier les qualifications, lire les avis, comparer plusieurs devis et discuter en détail de votre projet avec l'artisan." },
      { question: "Quelles garanties offrent vos artisans en BTP ?", 
        answer: "Nos artisans sont assurés et offrent des garanties décennales sur leurs travaux de construction, conformément à la réglementation en vigueur." }
    ]
  },
  { 
    name: 'Électricité', 
    categorie: 'electricite', 
    icon: '⚡', 
    description: 'Pour vos installations électriques, dépannages et mises aux normes.',
    faqs: [
      { question: "Mes installations électriques sont-elles aux normes ?", 
        answer: "Nos électriciens peuvent réaliser un diagnostic complet de votre installation et vous conseiller sur les mises aux normes nécessaires." },
      { question: "Quels types de travaux électriques peuvent être réalisés ?", 
        answer: "Installation neuve, rénovation, dépannage, mise aux normes, installation de systèmes de sécurité, domotique, etc." },
      { question: "Combien coûte une intervention d'urgence en électricité ?", 
        answer: "Les tarifs varient selon l'urgence et la complexité. Contactez directement l'électricien pour un devis précis." }
    ]
  },
  { 
    name: 'Plomberie', 
    categorie: 'plomberie', 
    icon: '🔧', 
    description: 'Artisans plombiers pour fuites, installations et réparations.',
    faqs: [
      { question: "Comment détecter une fuite d'eau ?", 
        answer: "Surveillez votre compteur d'eau, les taches d'humidité, les moisissures ou une augmentation inhabituelle de votre facture d'eau." },
      { question: "Quels sont les tarifs moyens en plomberie ?", 
        answer: "Les tarifs varient selon le type d'intervention. Un devis détaillé vous sera fourni avant toute intervention." },
      { question: "Proposez-vous des services d'urgence en plomberie ?", 
        answer: "Oui, plusieurs de nos plombiers proposent des services d'urgence 24/7 pour les fuites et pannes graves." }
    ]
  },
  { 
    name: 'Menuiserie', 
    categorie: 'menuiserie', 
    icon: '🪑', 
    description: 'Experts en fabrication et pose de meubles, portes, fenêtres.',
    faqs: [
      { question: "Quels types de menuiserie proposez-vous ?", 
        answer: "Menuiserie intérieure (portes, placards), extérieure (fenêtres, volets), et mobilier sur mesure." },
      { question: "Quels matériaux utilisez-vous ?", 
        answer: "Nos menuisiers travaillent avec différents matériaux : bois massif, MDF, aluminium, PVC, selon vos besoins et votre budget." },
      { question: "Quel est le délai moyen pour un projet de menuiserie ?", 
        answer: "Les délais varient selon la complexité du projet, généralement de quelques jours pour des petits travaux à plusieurs semaines pour du sur-mesure." }
    ]
  }
]

const artisans = [
  { id: 1, name: 'Omar Ly', location: 'Kaolack', image: '...', specialites: ['Plomberie'], rating: 5, categories: ['plomberie'] },
  { id: 2, name: 'Moustapha Faye', location: 'Karang', image: '...', specialites: ['Électricité'], rating: 4, categories: ['electricite'] },
  { id: 3, name: 'Dial Gueye', location: 'Mékhé', image: '...', specialites: ['Maçonnerie'], rating: 5, categories: ['btp-construction'] },
  { id: 4, name: 'Abdou Diop', location: 'Thiès', image: '...', specialites: ['Menuiserie'], rating: 4, categories: ['menuiserie'] },
  // Ajoutez d'autres artisans ici
]

// Réutiliser les composants de carte de la page de recherche
function ArtisanCardGrid({ artisan }: { artisan: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-5">
         <div className="flex items-start gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{artisan.name}</h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{artisan.location}</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < artisan.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {artisan.specialites.map((specialite: string) => (
            <span key={specialite} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              {specialite}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Link href={`/artisans/${artisan.id}`} className="text-orange-500 hover:text-orange-600 font-medium text-sm">Voir le profil →</Link>
          <Link href={`/demander-devis?artisanId=${artisan.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">Demander un devis</Link>
        </div>
      </div>
    </div>
  );
}

function ArtisanCardList({ artisan }: { artisan: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 p-5 flex flex-col sm:flex-row gap-6 items-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{artisan.name}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>{artisan.location}</span>
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < artisan.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {artisan.specialites.map((specialite: string) => (
            <span key={specialite} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              {specialite}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:items-end gap-3 mt-4 sm:mt-0 flex-shrink-0">
        <Link href={`/artisans/${artisan.id}`} className="text-orange-500 hover:text-orange-600 font-medium text-sm text-center sm:text-right">Voir le profil →</Link>
        <Link href={`/demander-devis?artisanId=${artisan.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-100 px-4 py-2 rounded-lg text-center">Demander un devis</Link>
      </div>
    </div>
  );
}

export default function ServiceCategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const categorieSlug = params?.categorie as string;
  const category = services.find(s => s.categorie === categorieSlug);

  // State for filters and display
  const [locationFilter, setLocationFilter] = useState(searchParams?.get('location') || '');
  const [sortBy, setSortBy] = useState(searchParams?.get('sort') || 'rating'); 
  const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'list'

  const filteredArtisans = useMemo(() => {
    return artisans
      .filter(a => category ? a.categories.includes(category.categorie) : true)
      .filter(a => locationFilter ? a.location.toLowerCase().includes(locationFilter.toLowerCase()) : true)
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'newest') return b.id - a.id; // Assuming higher ID is newer
        return 0;
      });
  }, [category, locationFilter, sortBy]);

  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    q1: false,
    q2: false
  })

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Catégorie non trouvée.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        {/* En-tête de la catégorie */}
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 inline-block">{category.icon}</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        </div>

        

        <div className="flex flex-col md:flex-row gap-8">
          {/* Colonne des Filtres */} 
          <aside className="w-full md:w-1/4 lg:w-1/5 sticky top-24">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Filtres</h3>
              <div className="space-y-6">
                {/* Filtre Localisation */}
                <div>
                  <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
                  <input 
                    type="text"
                    id="location-filter"
                    placeholder="Entrer une ville..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Tri */}
                <div>
                  <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">Trier par</label>
                  <select 
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="rating">Popularité</option>
                    <option value="name">Nom (A-Z)</option>
                    <option value="newest">Plus récents</option>
                  </select>
                </div>
                {/* Ajoutez d'autres filtres si nécessaire (ex: note minimale) */} 
              </div>
            </div>
          </aside>

          {/* Contenu principal (Liste/Grille des artisans) */} 
          <main className="flex-1">
             {/* Options d'affichage et nombre de résultats */} 
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredArtisans.length} artisans trouvés</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setDisplayMode('grid')} 
                  className={`p-2 rounded-lg ${displayMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </button>
                <button 
                  onClick={() => setDisplayMode('list')} 
                  className={`p-2 rounded-lg ${displayMode === 'list' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                </button>
              </div>
            </div>

            {/* Affichage des artisans */}
            {filteredArtisans.length > 0 ? (
              <div className={displayMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-6"}
              >
                {filteredArtisans.map((artisan) => (
                  displayMode === 'grid' 
                    ? <ArtisanCardGrid key={artisan.id} artisan={artisan} />
                    : <ArtisanCardList key={artisan.id} artisan={artisan} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-12">Aucun artisan trouvé pour cette catégorie{locationFilter && ` à ${locationFilter}`}.</p>
            )}
            
            {/* ... Pagination ... */}
          </main>
        </div>

        {/* Séparateur décoratif 
        <div className="relative py-14">
          <div className="absolute left-0 w-full overflow-hidden" style={{ height: "48px" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-50 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-12/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h6 className="text-xl font-semibold">Qualité garantie</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Artisans sélectionnés et certifiés
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h6 className="text-xl font-semibold">Intervention rapide</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Réponse sous 24h maximum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h6 className="text-xl font-semibold">Prix transparent</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Devis détaillé gratuit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* Section FAQ */}
        <div className="mt-14 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes sur {category.name}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {category.faqs?.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between font-medium text-gray-900"
                  onClick={() => setOpenQuestions(prev => ({...prev, [index]: !prev[index]}))}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openQuestions[index] ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestions[index] && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 