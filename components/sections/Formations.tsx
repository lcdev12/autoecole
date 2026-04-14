'use client'

import { Car, BookOpen, Users, Bike } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const formations = [
  {
    icon: Car,
    title: 'Permis B',
    description:
      'La formation classique pour conduire un véhicule léger. Apprentissage du code et de la conduite avec nos moniteurs diplômés.',
    details: ['Leçons en double commande', 'Véhicules récents (< 3 ans)', 'Passage examen organisé', 'Financement CPF possible'],
    color: 'blue',
    popular: false,
  },
  {
    icon: Users,
    title: 'Conduite accompagnée (AAC)',
    description:
      'Dès 15 ans, commencez à conduire accompagné d\'un adulte. Moins cher, plus rapide pour l\'obtention du permis à 18 ans.',
    details: ['Dès 15 ans', 'Réduction de la prime assurance', 'Plus d\'expérience = plus de sécurité', 'Accès permis dès 17 ans'],
    color: 'orange',
    popular: true,
  },
  {
    icon: BookOpen,
    title: 'Code de la route',
    description:
      'Accès illimité à notre plateforme en ligne et/ou séances en salle. Tout pour réussir l\'examen théorique du premier coup.',
    details: ['Accès plateforme 24h/24', 'Séances en salle disponibles', 'Examens blancs illimités', 'Suivi personnalisé'],
    color: 'blue',
    popular: false,
  },
  {
    icon: Bike,
    title: 'Permis A2 (Moto)',
    description:
      'Formation pour conduire une moto de puissance intermédiaire. Idéal pour les trajets quotidiens et les passionnés de deux-roues.',
    details: ['Formation plateau obligatoire', 'ETG (examen théorique)', 'Accès A après 2 ans', 'Motos récentes'],
    color: 'orange',
    popular: false,
  },
]

export default function Formations() {
  return (
    <section id="formations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
            Nos formations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Tout pour obtenir votre permis
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Du code à la conduite, nous proposons toutes les formations avec un accompagnement sur-mesure.
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {formations.map((f, index) => (
            <SectionWrapper key={f.title} delay={index * 0.1}>
              <div className={`relative h-full rounded-2xl p-8 border transition-all hover:shadow-lg ${
                f.popular
                  ? 'bg-brand-dark text-white border-brand-orange ring-2 ring-brand-orange'
                  : 'bg-white border-gray-100 hover:border-brand-blue/30'
              }`}>
                {f.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      Recommandé
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  f.popular ? 'bg-brand-orange/20' : f.color === 'blue' ? 'bg-blue-50' : 'bg-orange-50'
                }`}>
                  <f.icon className={`w-6 h-6 ${
                    f.popular ? 'text-brand-orange' : f.color === 'blue' ? 'text-brand-blue' : 'text-brand-orange'
                  }`} />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${f.popular ? 'text-white' : 'text-brand-text'}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${f.popular ? 'text-gray-300' : 'text-brand-muted'}`}>
                  {f.description}
                </p>

                <ul className="space-y-2">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        f.popular ? 'bg-brand-orange' : 'bg-brand-blue'
                      }`} />
                      <span className={f.popular ? 'text-gray-300' : 'text-brand-muted'}>{d}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-block mt-6 text-sm font-semibold transition-colors ${
                    f.popular
                      ? 'text-brand-orange hover:text-orange-300'
                      : 'text-brand-blue hover:text-blue-700'
                  }`}
                >
                  En savoir plus →
                </a>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
