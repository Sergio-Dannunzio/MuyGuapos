const links = {
  'Atención al Cliente': [
    { label: 'Envíos y Entregas' },
    { label: 'Cambios y Devoluciones' },
    { label: 'Guía de Talles' },
    { label: 'Contacto' },
  ],
  Colecciones: [
    { label: 'Trajes' },
    { label: 'Sacos & Blazers' },
    { label: 'Camisas' },
    { label: 'Accesorios' },
  ],
  Legal: [
    { label: 'Términos y Condiciones' },
    { label: 'Política de Privacidad' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: 'var(--color-surface-container-lowest)',
        color: 'var(--color-on-surface)',
        borderTopColor: 'var(--color-outline-variant)',
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20 py-20 mx-auto"
        style={{ maxWidth: 'var(--spacing-container-max)' }}
      >
        {/* Brand */}
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-playfair)',
              fontSize: '22px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              color: '#2a2a2a',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            MuyGuapos
          </span>
          <p
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '240px',
            }}
          >
            Sastrería de precisión. Autoridad a través de la contención. El arte de vestir bien.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>photo_camera</span>
            <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>share</span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h5
              className="mb-6 uppercase"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                color: '#2a2a2a',
              }}
            >
              {title}
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {items.map(({ label }) => (
                <li key={label}>
                  <span
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '15px',
                      color: 'var(--color-on-surface-variant)',
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
        <div
          className="px-6 md:px-20 py-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ maxWidth: 'var(--spacing-container-max)' }}
        >
          <span
            className="uppercase"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: 'var(--color-on-surface-variant)',
            }}
          >
            © 2026 MuyGuapos. Todos los derechos reservados.
          </span>
          <div className="flex gap-6">
            {['Términos', 'Privacidad'].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  color: 'var(--color-on-surface-variant)',
                  cursor: 'pointer',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
