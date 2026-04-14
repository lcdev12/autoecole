import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">AE</span>
              </div>
              <span className="text-lg font-bold">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre permis de conduire avec des moniteurs diplômés et passionnés.
              Résultats au-dessus de la moyenne nationale.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Formations
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#formations" className="hover:text-white transition-colors">Permis B</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Code de la route</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Conduite accompagnée</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Permis A2</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
            </ul>
          </div>

          {/* Infos pratiques */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Infos pratiques
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Nous trouver
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-orange" />
                {siteConfig.address}, {siteConfig.postalCode} {siteConfig.city}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-orange" />
                <span>{siteConfig.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. Tous droits reserves.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
