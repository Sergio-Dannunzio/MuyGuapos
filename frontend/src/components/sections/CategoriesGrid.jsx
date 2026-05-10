import { Link } from 'react-router-dom'
import imgTraje      from '../../assets/products/traje/traje-01.webp'
import imgCamisa     from '../../assets/products/camisa/camisa.jpg'
import imgSaco       from '../../assets/products/saco/saco.jpg'
import imgShortBano from '../../assets/products/short-baño/short-baño.jpg'

const CATEGORIES = [
  { slug: 'sacos',        label: 'Sacos',       img: imgSaco,        pos: 'left top'   },
  { slug: 'trajes',       label: 'Trajes',      img: imgTraje,       pos: 'center top' },
  { slug: 'camisas',      label: 'Camisas',     img: imgCamisa,      pos: 'center top' },
  { slug: 'short-bano',   label: 'Short de Baño',  img: imgShortBano,   pos: 'center top' },
]

function CategoryCard({ slug, label, img, pos }) {
  return (
    <Link
      to="/producto/camisa"
      className="relative group overflow-hidden block"
      style={{ textDecoration: 'none', height: '100%' }}
    >
      <img
        src={img}
        alt={label}
        className="group-hover:scale-105"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: pos,
          display: 'block',
          transition: 'transform 0.7s ease',
        }}
      />

      {/* Gradiente sutil solo abajo para el texto */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)' }}
      />

      <div className="absolute bottom-6 left-6" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '22px',
            fontWeight: '500',
            color: '#fff',
            letterSpacing: '0.01em',
          }}
        >
          {label}
        </span>
        <span
          className="ver-detalle"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            paddingBottom: '2px',
            width: 'fit-content',
          }}
        >
          Ver detalle
        </span>
      </div>
    </Link>
  )
}

export default function CategoriesGrid() {
  return (
    <section className="py-24">

      <h2
        style={{
          fontFamily: 'var(--font-barlow)',
          fontSize: '40px',
          fontWeight: '500',
          lineHeight: '1.2',
          color: 'var(--color-on-surface)',
          margin: '0 0 32px 0',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        Viste cada ocasión
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 h-[420px] md:h-[680px]"
        style={{ gap: '8px' }}
      >
        {CATEGORIES.map((cat, i) => (
          <div key={cat.slug} className={i >= 2 ? 'hidden md:block' : ''} style={{ height: '100%' }}>
            <CategoryCard {...cat} />
          </div>
        ))}
      </div>
    </section>
  )
}
