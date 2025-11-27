'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useMemo } from 'react'

// Données statiques - à remplacer par une source de données réelle plus tard
const services = [
  { name: 'BTP & Construction', slug: 'btp-construction' },
  { name: 'Électricité', slug: 'electricite' },
  { name: 'Plomberie', slug: 'plomberie' },
  { name: 'Menuiserie', slug: 'menuiserie' },
  // ... autres services
]

const artisans = [
  { id: 1, name: 'Omar Ly', location: 'Kaolack', image: '...', specialites: ['Plomberie'], rating: 5, categories: ['plomberie'] },
  { id: 2, name: 'Moustapha Faye', location: 'Karang', image: '...', specialites: ['Électricité'], rating: 4, categories: ['electricite'] },
  { id: 3, name: 'Dial Gueye', location: 'Mékhé', image: '...', specialites: ['Maçonnerie'], rating: 5, categories: ['btp-construction'] },
  { id: 4, name: 'Abdou Diop', location: 'Thiès', image: '...', specialites: ['Menuiserie'], rating: 4, categories: ['menuiserie'] },
  { id: 5, name: 'Fatou Sow', location: 'Dakar', image: '...', specialites: ['Peinture'], rating: 5, categories: ['peinture'] },
  { id: 6, name: 'Mamadou Fall', location: 'Saint-Louis', image: '...', specialites: ['BTP'], rating: 4, categories: ['btp-construction'] },
  // ... autres artisans
]

// Composant pour la carte artisan (version Grille)
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

// Composant pour la carte artisan (version Liste)
function ArtisanCardList({ artisan }: { artisan: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 p-5 flex flex-col sm:flex-row gap-6 items-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400">
        {/* Image placeholder */}
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

export default function SearchResultsPage() {
  const searchParams = useSearchParams();

  const query = searchParams?.get('q') || '';
  const initialLocation = searchParams?.get('location') || '';
  const initialCategory = searchParams?.get('category') || '';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [locationFilter, setLocationFilter] = useState(initialLocation);
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'name', 'newest'
  const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'list'

  const filteredArtisans = useMemo(() => {
    return artisans
      .filter(a => 
        (a.name.toLowerCase().includes(query.toLowerCase()) || 
         a.specialites.some(s => s.toLowerCase().includes(query.toLowerCase()))) &&
        (categoryFilter ? a.categories.includes(categoryFilter) : true) &&
        (locationFilter ? a.location.toLowerCase().includes(locationFilter.toLowerCase()) : true)
      )
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'newest') return b.id - a.id; // Assuming higher ID is newer
        return 0;
      });
  }, [query, categoryFilter, locationFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Résultats pour "{query}"
          {initialLocation && ` à ${initialLocation}`}
          {initialCategory && ` dans ${services.find(s => s.slug === initialCategory)?.name}`}
        </h1>
        <p className="text-gray-600 mb-8">{filteredArtisans.length} artisans trouvés.</p>

        {/* Barre de filtres et d'affichage */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Filtres (Catégorie, Localisation, Tri) */} 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {/* Filtre Catégorie */}
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                <select 
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Toutes</option>
                  {services.map(s => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>

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
            </div>
            {/* Options d'affichage */} 
            <div className="flex gap-2 flex-shrink-0 mt-4 md:mt-0">
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
        </div>

        {/* Affichage des résultats */}
        {filteredArtisans.length > 0 ? (
          <div className={displayMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"}
          >
            {filteredArtisans.map((artisan) => (
              displayMode === 'grid' 
                ? <ArtisanCardGrid key={artisan.id} artisan={artisan} />
                : <ArtisanCardList key={artisan.id} artisan={artisan} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">Aucun artisan ne correspond à vos critères de recherche.</p>
        )}

        {/* Pagination (optionnelle) */}
        {/* ... */}
      </div>
    </div>
  );
} 