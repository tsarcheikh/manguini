'use client'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
              <div className="prose prose-lg">
                <p>Le site Manguini est édité par :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Raison sociale :</strong> MANGUINI SARL</li>
                  <li><strong>Forme juridique :</strong> Société à responsabilité limitée</li>
                  <li><strong>Capital social :</strong> 10 000 000 FCFA</li>
                  <li><strong>Siège social :</strong> [Adresse complète], Dakar, Sénégal</li>
                  <li><strong>NINEA :</strong> [Numéro NINEA]</li>
                  <li><strong>RCCM :</strong> [Numéro RCCM]</li>
                  <li><strong>Directeur de la publication :</strong> [Nom du directeur]</li>
                  <li><strong>Contact :</strong> contact@manguini.sn</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
              <div className="prose prose-lg">
                <p>Le site Manguini est hébergé par :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>[Nom de l'hébergeur]</li>
                  <li>[Adresse de l'hébergeur]</li>
                  <li>Téléphone : [Numéro de téléphone]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
              <div className="prose prose-lg">
                <p>L'ensemble du contenu du site Manguini (architecture, textes, photos, illustrations, logos, bases de données, etc.) est protégé par le droit d'auteur et le Code de la Propriété Intellectuelle sénégalais. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de MANGUINI SARL.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Données personnelles</h2>
              <div className="prose prose-lg">
                <p>Conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la Protection des données à caractère personnel au Sénégal, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Envoyer un email à : privacy@manguini.sn</li>
                  <li>Adresser un courrier à : MANGUINI SARL - Service Protection des données, [Adresse]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
              <div className="prose prose-lg">
                <p>Le site Manguini utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur le site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Loi applicable et juridiction</h2>
              <div className="prose prose-lg">
                <p>Les présentes mentions légales sont régies par la loi sénégalaise. En cas de litige, les tribunaux sénégalais seront seuls compétents.</p>
                <p>Pour toute question relative à ces mentions légales, vous pouvez nous contacter à l'adresse : legal@manguini.sn</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 