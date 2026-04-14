'use client'

import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/siteConfig'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('submit failed')
      }

      event.currentTarget.reset()
      setStatus('Votre demande a bien ete envoyee. Nous revenons vers vous rapidement.')
    } catch {
      setStatus(
        `Le formulaire n'a pas pu etre envoye. Contactez-nous au ${siteConfig.phoneDisplay} en attendant.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <SectionWrapper>
            <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
              Parlons de votre permis
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              Prenez rendez-vous avec notre equipe pour construire un parcours adapte a vos objectifs.
            </p>

            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-0.5" />
                <span>{siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-brand-blue">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-brand-light border border-gray-100 rounded-2xl p-8 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1">
                  Nom et prenom
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  placeholder="vous@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-1">
                  Telephone
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  placeholder="Votre besoin"
                />
              </div>
              <input type="hidden" name="_subject" value={`Nouveau contact - ${siteConfig.businessName}`} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-orange text-white rounded-lg text-sm font-semibold hover:bg-orange-500 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Etre rappele rapidement'}
              </button>
              {status && <p className="text-xs text-brand-muted">{status}</p>}
            </form>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
