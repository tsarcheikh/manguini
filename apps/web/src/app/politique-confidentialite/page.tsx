'use client'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <div className="prose prose-lg">
                <p>La présente politique de confidentialité définit et vous informe de la manière dont MANGUINI SARL utilise et protège les informations que vous nous transmettez, conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la Protection des données à caractère personnel au Sénégal.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>
              <div className="prose prose-lg">
                <p>Nous collectons les données suivantes :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données professionnelles :</strong> métier, expérience, qualifications (pour les artisans)</li>
                  <li><strong>Données de localisation :</strong> adresse, ville, région</li>
                  <li><strong>Données de connexion :</strong> adresse IP, logs de connexion</li>
                  <li><strong>Données de transaction :</strong> services commandés, devis, factures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des données</h2>
              <div className="prose prose-lg">
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Gérer votre compte et accès aux services</li>
                  <li>Mettre en relation les clients avec les artisans appropriés</li>
                  <li>Traiter les demandes de devis et les transactions</li>
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Vous envoyer des communications relatives à nos services</li>
                  <li>Assurer la sécurité de notre plateforme</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des données</h2>
              <div className="prose prose-lg">
                <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute manipulation accidentelle ou intentionnelle, perte, destruction ou accès par des personnes non autorisées. Nos procédures de sécurité sont constamment améliorées en fonction des nouvelles évolutions technologiques.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Durée de conservation</h2>
              <div className="prose prose-lg">
                <p>Nous conservons vos données personnelles pour la durée nécessaire aux finalités pour lesquelles elles sont collectées et traitées. Cette durée peut varier en fonction du type de données :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Données de compte : pendant la durée de votre inscription</li>
                  <li>Données de transaction : 10 ans (obligation légale)</li>
                  <li>Données de connexion : 1 an</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
              <div className="prose prose-lg">
                <p>Conformément à la loi sénégalaise sur la protection des données personnelles, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
                <p className="mt-4">Pour exercer ces droits, contactez-nous à : privacy@manguini.sn</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <div className="prose prose-lg">
                <p>Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre ordinateur. Nous utilisons :</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
                  <li>Cookies analytiques : pour comprendre l'utilisation du site</li>
                  <li>Cookies de préférence : pour mémoriser vos choix</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications</h2>
              <div className="prose prose-lg">
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prennent effet dès leur publication sur le site. Nous vous encourageons à consulter régulièrement cette page.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
              <div className="prose prose-lg">
                <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Par email : privacy@manguini.sn</li>
                  <li>Par courrier : MANGUINI SARL - Service Protection des données, [Adresse complète]</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 