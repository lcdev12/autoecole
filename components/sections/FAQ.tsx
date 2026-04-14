import SectionWrapper from '@/components/ui/SectionWrapper'
import FAQAccordion from '@/components/ui/FAQAccordion'

const faqItems = [
  {
    question: 'A partir de quel age peut-on commencer la conduite accompagnee ?',
    answer:
      "Vous pouvez debuter des 15 ans avec la formule AAC. Cela permet d'acquerir plus d'experience avant l'examen.",
  },
  {
    question: 'Combien de temps faut-il pour obtenir le permis B ?',
    answer:
      'La duree depend de votre disponibilite et progression. En moyenne, nos eleves finalisent leur parcours en 3 a 6 mois.',
  },
  {
    question: 'Proposez-vous des facilites de paiement ?',
    answer:
      'Oui, nous proposons des paiements en plusieurs fois selon la formule choisie. Un devis detaille est remis avant inscription.',
  },
  {
    question: 'Puis-je utiliser mon CPF pour financer la formation ?',
    answer:
      'Selon votre situation, certaines formations peuvent etre financables via le CPF. Nous vous accompagnons dans les demarches.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Questions frequentes
          </h2>
          <p className="text-brand-muted text-lg">
            Toutes les reponses utiles avant de commencer votre formation.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <FAQAccordion items={faqItems} />
        </SectionWrapper>
      </div>
    </section>
  )
}
