import { Link } from 'react-router-dom'
import imgSacoChaleco from '../../assets/products/saco-chaleco/saco-chaleco.jpg'

export default function EditorialBanner() {
  return (
    <section className="py-24">
      <div
        className="relative w-full flex items-center overflow-hidden"
        style={{
          height: '680px',
          backgroundColor: 'var(--color-surface-container)',
          border: '1px solid var(--color-outline-variant)',
        }}
      >
        {/* Imagen — derecha */}
        <img
          src={imgSacoChaleco}
          alt="Saco con chaleco"
          className="absolute inset-0 md:left-auto md:w-2/3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '75% top',
          }}
        />

        {/* Texto — izquierda */}
        <div
          className="relative z-10 flex flex-col justify-center h-full p-10 md:p-16"
          style={{
            maxWidth: '520px',
            background: 'linear-gradient(to right, var(--color-surface-container) 55%, transparent 100%)',
          }}
        >
          <span
            className="block mb-4 uppercase"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.2em',
              color: 'var(--color-on-surface)',
            }}
          >
            Editorial
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '500',
              lineHeight: '1.2',
              color: 'var(--color-on-surface)',
              margin: '0 0 32px 0',
            }}
          >
            Ocasiones Especiales.
          </h2>
          <Link
            to="/producto/camisa"
            className="btn-slide-gold"
            style={{
              display: 'inline-block',
              width: 'fit-content',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '16px 32px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Arma tu look
          </Link>
        </div>
      </div>
    </section>
  )
}
