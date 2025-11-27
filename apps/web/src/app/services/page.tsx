import Image from 'next/image'

const services = [
  {
    name: 'Artisans du bâtiment',
    description: 'Plombiers, électriciens, maçons et autres professionnels qualifiés pour vos travaux.',
    icon: '/icons/building.svg',
  },
  {
    name: 'Transport & Livraison',
    description: 'Services de livraison rapide et transport de marchandises.',
    icon: '/icons/delivery.svg',
  },
  {
    name: 'Services à domicile',
    description: 'Ménage, jardinage, garde d'enfants et autres services à domicile.',
    icon: '/icons/home.svg',
  },
  {
    name: 'Réparation & Maintenance',
    description: 'Réparation d'appareils électroménagers, maintenance informatique et plus.',
    icon: '/icons/repair.svg',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez notre large gamme de services professionnels pour répondre à tous vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="relative h-12 w-12 flex-none rounded-lg bg-gray-50">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      className="absolute inset-0 h-12 w-12 rounded-lg object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href={`/professionals?service=${encodeURIComponent(service.name)}`}
                      className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                    >
                      Trouver un professionnel <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 