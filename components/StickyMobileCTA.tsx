import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/50 bg-white/90 p-2 shadow-xl backdrop-blur">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
