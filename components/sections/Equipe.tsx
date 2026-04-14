import { Award, Car, HeartHandshake } from 'lucide-react'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { teamMembers } from '@/lib/siteConfig'

const engagements = [
  {
    icon: Award,
    title: 'Moniteurs diplomes',
    description: 'Une equipe pedagogique experimentee, bienveillante et orientee resultats.',
  },
  {
    icon: Car,
    title: 'Vehicules recents',
    description: 'Conduisez sur des vehicules modernes et entretenus pour progresser sereinement.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement humain',
    description: 'Suivi personnalise pour adapter la formation a votre niveau et vos disponibilites.',
  },
]

export default function Equipe() {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-wider mb-3">
            L&apos;ecole
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Une equipe engagee pour votre reussite
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Nous vous formons avec exigence et pedagogie, de l&apos;apprentissage du code jusqu&apos;a l&apos;examen pratique.
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {engagements.map((item, index) => (
            <SectionWrapper key={item.title} delay={index * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-gray-100 bg-brand-light">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <SectionWrapper key={member.name} delay={0.2 + index * 0.1}>
              <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <Image src={member.image} alt={member.name} width={480} height={360} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-text">{member.name}</h3>
                  <p className="text-sm text-brand-blue font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-brand-muted">{member.bio}</p>
                </div>
              </article>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
