import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-brand-light py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:text-blue-700">
          Retour a l&apos;accueil
        </Link>
        <h1 className="text-3xl font-bold text-brand-text mt-4 mb-8">Mentions legales</h1>

        <div className="space-y-6 text-sm text-brand-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Editeur du site</h2>
            <p>{siteConfig.businessName}</p>
            <p>{siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}</p>
            <p>Telephone: {siteConfig.phoneDisplay}</p>
            <p>Email: {siteConfig.email}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Directeur de la publication</h2>
            <p>{siteConfig.publicationDirector}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Hebergeur</h2>
            <p>{siteConfig.hostName}</p>
            <p>{siteConfig.hostAddress}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Propriete intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus de ce site (textes, visuels, logos, elements graphiques) est protege.
              Toute reproduction sans autorisation prealable est interdite.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
