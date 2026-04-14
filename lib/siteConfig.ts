export const siteConfig = {
  businessName: 'Auto-ecole Horizon',
  city: 'Lyon',
  domain: 'autoecole-horizon.fr',
  address: '12 Rue de la Republique',
  postalCode: '69002',
  phoneDisplay: '04 72 00 00 00',
  phoneHref: '+33472000000',
  email: 'contact@autoecole-horizon.fr',
  foundedYear: 2016,
  publicationDirector: 'Marie Dupont',
  hostName: 'Vercel Inc.',
  hostAddress: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
  openingHours: 'Lun - Sam : 9h - 19h',
  whatsappHref: 'https://wa.me/33472000000',
  contactFormEndpoint: 'https://formspree.io/f/your-form-id',
} as const

export const teamMembers = [
  {
    name: 'Marie Dupont',
    role: 'Directrice pedagogique',
    bio: '12 ans d experience dans la formation a la conduite et le suivi des eleves.',
    image: '/images/team-marie.svg',
  },
  {
    name: 'Thomas Leroy',
    role: 'Moniteur Permis B',
    bio: 'Specialiste des parcours progressifs pour gagner en confiance des les premieres heures.',
    image: '/images/team-thomas.svg',
  },
  {
    name: 'Sofia Martin',
    role: 'Referente Code',
    bio: 'Anime les sessions de code et prepare les eleves aux questions pieges de l examen.',
    image: '/images/team-sofia.svg',
  },
] as const

export const testimonials = [
  {
    author: 'Nora B.',
    text: 'Equipe super pedagogique, j ai eu mon permis du premier coup. Le suivi est vraiment serieux.',
    rating: 5,
  },
  {
    author: 'Lucas R.',
    text: 'Planning flexible et moniteur au top. Je recommande pour la conduite accompagnee.',
    rating: 5,
  },
  {
    author: 'Ines M.',
    text: 'La plateforme code + les seances en salle m ont beaucoup aidee. Resultat rapide.',
    rating: 5,
  },
] as const

export const galleryItems = [
  { title: 'Parc de vehicules recents', image: '/images/gallery-cars.svg' },
  { title: 'Salle de code moderne', image: '/images/gallery-classroom.svg' },
  { title: 'Accompagnement individuel', image: '/images/gallery-coaching.svg' },
] as const

export const seoConfig = {
  title: `${siteConfig.businessName} - Permis B, code de la route a ${siteConfig.city}`,
  description: `${siteConfig.businessName} a ${siteConfig.city} - Formation permis B, code de la route, conduite accompagnee. Taux de reussite eleve, moniteurs diplomes. Devis gratuit.`,
  ogTitle: `${siteConfig.businessName} - Permis B a ${siteConfig.city}`,
  ogDescription:
    'Formation permis B, code de la route, conduite accompagnee. Encadrement humain et resultats solides.',
  url: `https://${siteConfig.domain}`,
} as const
