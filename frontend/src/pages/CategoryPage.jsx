import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import imgCamisa      from '../assets/products/camisa/camisa.jpg'
import imgCamisa01    from '../assets/products/camisa/camisa-01.jpg'
import imgCamisa02    from '../assets/products/camisa/camisa-02.jpg'
import imgTraje       from '../assets/products/traje/traje-01.webp'
import imgSaco        from '../assets/products/saco/saco.jpg'
import imgSacoChaleco from '../assets/products/saco-chaleco/saco-chaleco.jpg'
import imgShortBano   from '../assets/products/short-baño/short-baño.jpg'
import imgShortRemera from '../assets/products/short-remera/short-remera.jpg'

const PRODUCTS = [
  { slug: 'camisa-oxford',       name: 'Camisa de Vestir Oxford',    price: 89900,  img: imgCamisa,      tag: 'Nueva colección' },
  { slug: 'traje-clasico',       name: 'Traje Clásico de Vestir',    price: 356800, originalPrice: 420000, img: imgTraje,       tag: 'Nueva colección' },
  { slug: 'saco-sport',          name: 'Saco Sport Estructurado',    price: 198500, img: imgSaco,        tag: 'Nueva colección' },
  { slug: 'saco-chaleco',        name: 'Saco con Chaleco',           price: 274000, originalPrice: 320000, img: imgSacoChaleco, tag: 'Nueva colección' },
  { slug: 'short-bano',          name: 'Short de Baño Premium',      price: 54900,  img: imgShortBano,   tag: 'Nueva colección' },
  { slug: 'camisa-celeste',      name: 'Camisa Sport Celeste',       price: 79900,  originalPrice: 95000,  img: imgCamisa01,    tag: 'Nueva colección' },
  { slug: 'camisa-blanca',       name: 'Camisa Slim Fit Blanca',     price: 84900,  img: imgCamisa02,    tag: 'Nueva colección' },
  { slug: 'short-remera',        name: 'Conjunto Short & Remera',    price: 64900,  img: imgShortRemera, tag: 'Nueva colección' },
]

const SORT_OPTIONS = ['Relevancia', 'Precio: menor a mayor', 'Precio: mayor a menor', 'Novedades']

const CATEGORY_LABELS = {
  sacos:       'Sacos & Blazers',
  trajes:      'Trajes',
  camisas:     'Camisas',
  pantalones:  'Pantalones',
  accesorios:  'Accesorios',
  'short-bano':'Short de Baño',
}

function fmt(n) {
  return 'ARS ' + n.toLocaleString('es-AR')
}

function ProductCard({ product }) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)
  const hasDiscount = !!product.originalPrice

  return (
    <div style={{ position: 'relative' }}>
      {/* Imagen */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-container-low)',
          aspectRatio: '3/4',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to="/producto/camisa" style={{ display: 'block', height: '100%' }}>
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.6s ease',
            }}
          />
        </Link>

        {/* Badge */}
        {hasDiscount && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: '#101453',
              color: '#e5e2e1',
              fontFamily: 'var(--font-hanken)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              padding: '4px 8px',
            }}
          >
            -{Math.round((1 - product.price / product.originalPrice) * 100)}% off
          </span>
        )}

        {/* Favorito */}
        <button
          onClick={() => setWished(w => !w)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: wished ? '#e9c349' : 'var(--color-on-surface-variant)',
            transition: 'color 0.2s',
          }}
          aria-label="Agregar a favoritos"
        >
          <span
            className={`material-symbols-outlined${wished ? ' fill' : ''}`}
            style={{ fontSize: '22px' }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 12px 8px' }}>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#101453',
            margin: '0 0 4px 0',
          }}
        >
          {product.tag}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--color-on-surface)',
            margin: '0 0 2px 0',
          }}
        >
          MuyGuapos
        </p>
        <Link
          to="/producto/camisa"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '13px',
            fontWeight: '400',
            color: '#101453',
            textDecoration: 'none',
            display: 'block',
            margin: '0 0 10px 0',
          }}
        >
          {product.name}
        </Link>

        {/* Precios */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          {hasDiscount && (
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                color: 'var(--color-outline)',
                textDecoration: 'line-through',
              }}
            >
              {fmt(product.originalPrice)}
            </span>
          )}
          <span
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '15px',
              fontWeight: '600',
              color: hasDiscount ? '#b91c1c' : 'var(--color-on-surface)',
            }}
          >
            {fmt(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CategoryPage() {
  const { slug } = useParams()
  const [sortOpen,    setSortOpen]    = useState(false)
  const [sortLabel,   setSortLabel]   = useState('Relevancia')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const categoryLabel = CATEGORY_LABELS[slug] ?? slug?.replace(/-/g, ' ') ?? 'Catálogo'

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        paddingTop: '80px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--spacing-container-max)', padding: '32px 0 80px' }}>

        {/* Breadcrumb + Título */}
        <div style={{ padding: '0 20px 24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}>
              Inicio
            </Link>
            <span style={{ color: 'var(--color-outline)', fontSize: '12px' }}>›</span>
            <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface)' }}>
              {categoryLabel}
            </span>
          </nav>
          <h1
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '36px',
              fontWeight: '500',
              color: 'var(--color-on-surface)',
              margin: 0,
            }}
          >
            {categoryLabel}
          </h1>
        </div>

        {/* Barra de filtros */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--color-outline-variant)',
            borderBottom: '1px solid var(--color-outline-variant)',
            padding: '10px 20px',
            marginBottom: '20px',
          }}
        >
          {/* Filtros + contador */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setFiltersOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--color-on-surface)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {filtersOpen ? 'remove_circle' : 'add_circle'}
              </span>
              Filtrar
            </button>
            <span style={{ color: 'var(--color-outline-variant)' }}>|</span>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                color: '#101453',
                fontWeight: '500',
              }}
            >
              {PRODUCTS.length} resultados
            </span>
          </div>

          {/* Ordenar */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSortOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--color-on-surface)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {sortLabel}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '18px', transition: 'transform 0.2s', transform: sortOpen ? 'rotate(180deg)' : 'rotate(0)' }}
              >
                keyboard_arrow_down
              </span>
            </button>

            {sortOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 'calc(100% + 4px)',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  border: '1px solid var(--color-outline-variant)',
                  minWidth: '200px',
                  zIndex: 20,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setSortLabel(opt); setSortOpen(false) }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '11px 16px',
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '13px',
                      fontWeight: sortLabel === opt ? '600' : '400',
                      color: sortLabel === opt ? '#101453' : 'var(--color-on-surface)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--color-outline-variant)',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: '24px 8px', padding: '0 8px' }}
        >
          {PRODUCTS.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
