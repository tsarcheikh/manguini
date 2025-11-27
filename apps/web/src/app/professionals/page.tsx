import Image from 'next/image'

const professionals = [
  {
    id: 1,
    name: 'Jean Dupont',
    profession: 'Plombier',
    rating: 4.8,
    reviews: 127,
    image: '/images/professionals/profile1.jpg',
    location: 'Paris 11e',
    availability: 'Disponible maintenant',
  },
  {
    id: 2,
    name: 'Marie Martin',
    profession: 'Électricienne',
    rating: 4.9,
    reviews: 89,
    image: '/images/professionals/profile2.jpg',
    location: 'Paris 15e',
    availability: 'Disponible dans 2h',
  },
]

const filters = [
  {
    id: 'service',
    name: 'Service',
    options: [
      { value: 'plomberie', label: 'Plomberie' },
      { value: 'electricite', label: 'Électricité' },
      { value: 'menage', label: 'Ménage' },
      { value: 'jardinage', label: 'Jardinage' },
    ],
  },
  {
    id: 'availability',
    name: 'Disponibilité',
    options: [
      { value: 'now', label: 'Maintenant' },
      { value: 'today', label: 'Aujourd\'hui' },
      { value: 'week', label: 'Cette semaine' },
    ],
  },
  {
    id: 'rating',
    name: 'Note minimale',
    options: [
      { value: '4', label: '4+ étoiles' },
      { value: '4.5', label: '4.5+ étoiles' },
    ],
  },
]

export default function ProfessionalsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtres */}
          <div className="w-full md:w-64 flex-none">
            <div className="sticky top-4">
              <h2 className="sr-only">Filtres</h2>
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.id} className="border-b border-gray-200 py-6">
                    <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
                    <div className="mt-4 space-y-4">
                      {filter.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`${filter.id}-${option.value}`}
                            name={`${filter.id}[]`}
                            value={option.value}
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <label
                            htmlFor={`${filter.id}-${option.value}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Liste des professionnels */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {professionals.map((pro) => (
                <div
                  key={pro.id}
                  className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
                >
                  <div className="aspect-h-3 aspect-w-4 bg-gray-200 sm:aspect-none sm:h-48">
                    <Image
                      src={pro.image}
                      alt={pro.name}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={`/professionals/${pro.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {pro.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{pro.profession}</p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <svg
                            key={rating}
                            className={`h-5 w-5 flex-shrink-0 ${
                              pro.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {pro.rating} ({pro.reviews} avis)
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm text-gray-500">{pro.location}</p>
                      <p className="text-sm font-medium text-primary-600">{pro.availability}</p>
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