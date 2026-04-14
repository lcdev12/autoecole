import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { galleryItems } from '@/lib/siteConfig'

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-wider mb-3">
            Notre univers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Une auto-ecole moderne et rassurante
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <SectionWrapper key={item.title} delay={idx * 0.1}>
              <figure className="group overflow-hidden rounded-2xl border border-gray-100 bg-brand-light">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={420}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="px-5 py-4 text-sm font-semibold text-brand-text">{item.title}</figcaption>
              </figure>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
