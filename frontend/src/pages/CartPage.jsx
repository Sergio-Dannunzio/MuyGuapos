import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgCamisa from '../assets/products/camisa/camisa.jpg'

const INITIAL_ITEMS = [
  {
    id: 1,
    brand: 'MuyGuapos',
    name: 'Camisa de Vestir Oxford',
    color: 'Negro',
    talle: '42',
    price: 89900,
    img: imgCamisa,
    qty: 1,
  },
]

function fmt(n) {
  return 'ARS ' + n.toLocaleString('es-AR')
}

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  function changeQty(id, delta) {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    )
  }

  function removeItem(id) {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0)
  const envio    = subtotal >= 150000 ? 0 : 9900
  const total    = subtotal + envio

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        paddingTop: '80px',
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 'var(--spacing-container-max)', padding: '48px 48px 80px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '36px',
              fontWeight: '500',
              color: 'var(--color-on-surface)',
              margin: 0,
            }}
          >
            Bolsa de compras
          </h1>
          <Link
            to="/shop"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '13px',
              color: 'var(--color-on-surface-variant)',
              textDecoration: 'underline',
            }}
          >
            Seguir comprando
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'start' }}>

          {/* ── Items ── */}
          <div>
            <div style={{ height: '1px', backgroundColor: 'var(--color-outline-variant)', marginBottom: '0' }} />

            {items.length === 0 ? (
              <div style={{ padding: '64px 0', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '16px', color: 'var(--color-on-surface-variant)', marginBottom: '24px' }}>
                  Tu carrito está vacío.
                </p>
                <Link
                  to="/shop"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#101453',
                    color: '#fff',
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '14px 32px',
                    textDecoration: 'none',
                  }}
                >
                  Ir a la tienda
                </Link>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr auto',
                    gap: '24px',
                    alignItems: 'start',
                    padding: '28px 0',
                    borderBottom: '1px solid var(--color-outline-variant)',
                  }}
                >
                  {/* Imagen */}
                  <Link to="/producto/camisa">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: '120px',
                        height: '150px',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                      }}
                    />
                  </Link>

                  {/* Info */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-on-surface-variant)',
                        margin: '0 0 4px 0',
                      }}
                    >
                      {item.brand}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: 'var(--color-on-surface)',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '13px',
                        color: 'var(--color-on-surface-variant)',
                        margin: '0 0 2px 0',
                      }}
                    >
                      Color: {item.color}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '13px',
                        color: 'var(--color-on-surface-variant)',
                        margin: '0 0 20px 0',
                      }}
                    >
                      Talle: {item.talle}
                    </p>

                    {/* Precio */}
                    <p
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'var(--color-on-surface)',
                        margin: '0 0 20px 0',
                      }}
                    >
                      {fmt(item.price * item.qty)}
                    </p>

                    {/* Cantidad */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        style={{
                          width: '36px',
                          height: '36px',
                          border: '1px solid var(--color-outline-variant)',
                          background: 'none',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-hanken)',
                          fontSize: '18px',
                          color: 'var(--color-on-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          width: '48px',
                          height: '36px',
                          border: '1px solid var(--color-outline-variant)',
                          borderLeft: 'none',
                          borderRight: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-hanken)',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--color-on-surface)',
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        style={{
                          width: '36px',
                          height: '36px',
                          border: '1px solid var(--color-outline-variant)',
                          background: 'none',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-hanken)',
                          fontSize: '18px',
                          color: 'var(--color-on-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Mover a favoritos */}
                    <button
                      style={{
                        marginTop: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '12px',
                        color: 'var(--color-on-surface-variant)',
                        textDecoration: 'underline',
                        padding: 0,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>favorite</span>
                      Mover a favoritos
                    </button>
                  </div>

                  {/* Eliminar */}
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--color-on-surface-variant)',
                      padding: '4px',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* ── Resumen ── */}
          <div style={{ position: 'sticky', top: '104px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '24px',
                fontWeight: '500',
                color: 'var(--color-on-surface)',
                margin: '0 0 24px 0',
              }}
            >
              Resumen
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>Subtotal</span>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface)' }}>{fmt(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>Envío</span>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: envio === 0 ? '#1a5c1a' : 'var(--color-on-surface)' }}>
                  {envio === 0 ? 'Gratis' : fmt(envio)}
                </span>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-outline-variant)', marginBottom: '20px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '28px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--color-on-surface)',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--color-on-surface)',
                }}
              >
                {fmt(total)}
              </span>
            </div>

            <Link
              to="/checkout"
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: items.length === 0 ? 'var(--color-outline-variant)' : '#101453',
                color: '#fff',
                fontFamily: 'var(--font-hanken)',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '18px',
                textAlign: 'center',
                textDecoration: 'none',
                pointerEvents: items.length === 0 ? 'none' : 'auto',
                marginBottom: '16px',
                transition: 'background-color 0.2s',
              }}
            >
              Continuar con la compra
            </Link>

            {/* Envío gratis */}
            {envio > 0 && (
              <div
                style={{
                  backgroundColor: 'var(--color-surface-container)',
                  padding: '16px',
                  marginBottom: '12px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '13px',
                    color: 'var(--color-on-surface)',
                    margin: 0,
                    lineHeight: '1.5',
                  }}
                >
                  Agregá {fmt(150000 - subtotal)} más para obtener <strong>envío gratis</strong>.
                </p>
              </div>
            )}

            {/* Devoluciones */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                padding: '16px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '13px',
                  color: 'var(--color-on-surface-variant)',
                  margin: 0,
                  lineHeight: '1.5',
                }}
              >
                Devoluciones gratis por 30 días | Hacemos la recolección en tu domicilio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
