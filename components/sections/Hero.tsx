'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Shield, Trophy } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const stats = [
  { icon: Trophy, value: '94%', label: 'Taux de réussite', sublabel: 'vs 68% nationale' },
  { icon: Shield, value: '+800', label: 'Eleves formes', sublabel: `depuis ${siteConfig.foundedYear}` },
  { icon: Star, value: '4.9/5', label: 'Avis Google', sublabel: '+120 avis' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
      <Image
        src="/images/hero-driving.svg"
        alt="Lecon de conduite"
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 mb-6"
          >
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold">
              Auto-ecole agreee - {siteConfig.city} et environs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Votre permis de conduire,{' '}
            <span className="text-brand-orange">en toute confiance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl"
          >
            Moniteurs diplomes d Etat, vehicules recents, formation personnalisee.
            Nous vous accompagnons du premier cours jusqu a l obtention de votre permis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30 text-sm"
            >
              Demander un rendez-vous
            </a>
            <a
              href="#formations"
              className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Voir les formations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-4 max-w-xl"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-brand-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
