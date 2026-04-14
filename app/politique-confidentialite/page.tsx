import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-brand-light py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-brand-blue hover:text-blue-700">
          Retour a l&apos;accueil
        </Link>
        <h1 className="text-3xl font-bold text-brand-text mt-4 mb-8">Politique de confidentialite</h1>

        <div className="space-y-6 text-sm text-brand-muted leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Collecte des donnees</h2>
            <p>
              Nous collectons uniquement les informations necessaires au traitement de vos demandes
              (nom, email, telephone, message) via le formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Usage des donnees</h2>
            <p>
              Les donnees sont utilisees pour vous recontacter, vous informer sur nos offres et assurer
              le suivi de votre demande. Elles ne sont pas revendues a des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Conservation</h2>
            <p>
              Les donnees sont conservees pendant une duree proportionnee a la finalite du traitement,
              puis supprimees conformement a la reglementation applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-2">Vos droits</h2>
            <p>
              Conformement au RGPD, vous pouvez demander l&apos;acces, la rectification ou la suppression de
              vos donnees en ecrivant a {siteConfig.email}.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
