'use client'

import { Trophy, Users, Clock, ThumbsUp } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/siteConfig'

const stats = [
  {
    icon: Trophy,
    value: '94%',
    label: 'Taux de réussite permis B',
    sub: 'Moyenne nationale : 68%',
    color: 'orange',
  },
  {
    icon: Users,
    value: '+800',
    label: 'Élèves formés',
    sub: 'Depuis notre ouverture',
    color: 'blue',
  },
  {
    icon: Clock,
    value: `${new Date().getFullYear() - siteConfig.foundedYear} ans`,
    label: "D'experience",
    sub: 'À votre service',
    color: 'orange',
  },
  {
    icon: ThumbsUp,
    value: '4.9/5',
    label: 'Note Google',
    sub: '+120 avis vérifiés',
    color: 'blue',
  },
]

export default function Stats() {
  return (
    <section id="resultats" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-12">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-wider mb-3">
            Nos résultats
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Des chiffres qui parlent
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Notre engagement : vous préparer au mieux pour réussir du premier coup.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <SectionWrapper key={stat.label} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-colors">
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  stat.color === 'orange' ? 'bg-brand-orange/20' : 'bg-brand-blue/20'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === 'orange' ? 'text-brand-orange' : 'text-blue-400'
                  }`} />
                </div>
                <div className={`text-3xl font-bold mb-1 ${
                  stat.color === 'orange' ? 'text-brand-orange' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
