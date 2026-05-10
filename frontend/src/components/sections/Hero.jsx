import { Link } from 'react-router-dom'
import heroBg from '../../assets/brand/interior.jpg'

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '90vh', minHeight: '600px' }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(8,11,56,0.45)',
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8" style={{ maxWidth: '900px' }}>
        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.2em',
            color: '#e9c349',
          }}
        >
          Nueva Colección 2026
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#e5e2e1',
            margin: 0,
          }}
        >
          Viste con Carácter
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: '#c4c7c7',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          Sastrería moderna para el hombre que sabe lo que quiere
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link
            to="/shop"
            style={{
              display: 'block',
              backgroundColor: '#e9c349',
              color: '#3c2f00',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 32px',
              textAlign: 'center',
            }}
          >
            Ver Colección
          </Link>
          <Link
            to="/lookbook"
            style={{
              display: 'block',
              border: '1px solid #e5e2e1',
              color: '#e5e2e1',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 32px',
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}
          >
            Lookbook
          </Link>
        </div>
      </div>

      {/* Línea dorada inferior */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '2px', backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}
      />
    </section>
  )
}
