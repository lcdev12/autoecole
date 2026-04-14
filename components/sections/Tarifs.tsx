import SectionWrapper from '@/components/ui/SectionWrapper'

const tarifs = [
  {
    title: 'Pack Code + Permis B',
    price: '1 390 EUR',
    details: [
      'Cours de code illimités (3 mois)',
      '20 heures de conduite incluses',
      'Accompagnement examen pratique',
      'Frais administratifs inclus',
    ],
    highlighted: true,
  },
  {
    title: 'Conduite accompagnée (AAC)',
    price: '1 590 EUR',
    details: [
      'Formation initiale complète',
      '2 rendez-vous pédagogiques',
      'Suivi progressif personnalisé',
      'Préparation passage à 17 ans',
    ],
    highlighted: false,
  },
  {
    title: 'Code de la route seul',
    price: '290 EUR',
    details: [
      'Accès plateforme en ligne 24/7',
      'Séries thématiques illimitées',
      'Examens blancs',
      'Suivi par un formateur',
    ],
    highlighted: false,
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-14">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
            Tarifs transparents
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Choisissez la formule adaptee a votre rythme
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Des offres claires, sans frais caches, avec un accompagnement humain du debut a la reussite.
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {tarifs.map((tarif, idx) => (
            <SectionWrapper key={tarif.title} delay={idx * 0.1}>
              <div
                className={`h-full rounded-2xl p-8 border ${
                  tarif.highlighted
                    ? 'bg-brand-dark border-brand-orange ring-2 ring-brand-orange'
                    : 'bg-white border-gray-100'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${tarif.highlighted ? 'text-white' : 'text-brand-text'}`}>
                  {tarif.title}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${tarif.highlighted ? 'text-brand-orange' : 'text-brand-blue'}`}>
                  {tarif.price}
                </p>
                <ul className="space-y-2">
                  {tarif.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${tarif.highlighted ? 'bg-brand-orange' : 'bg-brand-blue'}`} />
                      <span className={tarif.highlighted ? 'text-gray-300' : 'text-brand-muted'}>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-block mt-6 text-sm font-semibold ${
                    tarif.highlighted ? 'text-brand-orange hover:text-orange-300' : 'text-brand-blue hover:text-blue-700'
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
