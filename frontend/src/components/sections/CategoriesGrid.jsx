import { Link } from 'react-router-dom'
import imgTraje  from '../../assets/products/traje/traje-01.webp'
import imgCamisa from '../../assets/products/camisa/camisa.jpg'
import imgSaco   from '../../assets/products/saco/saco.jpg'

const CATEGORIES = [
  { slug: 'sacos',   label: 'Sacos',   img: imgSaco,   pos: 'left top'   },
  { slug: 'trajes',  label: 'Trajes',  img: imgTraje,  pos: 'center top' },
  { slug: 'camisas', label: 'Camisas', img: imgCamisa, pos: 'center top' },
]

function CategoryCard({ slug, label, img, pos }) {
  return (
    <Link
      to={`/categoria/${slug}`}
      className="relative group overflow-hidden block"
      style={{ textDecoration: 'none' }}
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
    <section className="px-6 md:px-20 py-24 mx-auto" style={{ maxWidth: 'var(--spacing-container-max)' }}>

      <h2
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '40px',
          fontWeight: '500',
          lineHeight: '1.2',
          color: 'var(--color-on-surface)',
          margin: '0 0 32px 0',
        }}
      >
        Viste cada ocasión
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          height: '560px',
        }}
      >
        {CATEGORIES.map(cat => (
          <CategoryCard key={cat.slug} {...cat} />
        ))}
      </div>
    </section>
  )
}
