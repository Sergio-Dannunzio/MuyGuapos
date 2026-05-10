import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/brand/logo2.jpg'
import AnnouncementBar from './AnnouncementBar'

const NAV_ITEMS = [
  {
    label: 'SACOS',
    groups: [
      {
        title: 'Sacos & Blazers',
        links: [
          { to: '/categoria/sacos',   label: 'Sacos de Vestir' },
          { to: '/categoria/blazers', label: 'Blazers' },
          { to: '/categoria/sport',   label: 'Sport Coat' },
        ],
      },
    ],
  },
  {
    label: 'CAMISAS',
    groups: [
      {
        title: 'Camisas',
        links: [
          { to: '/categoria/camisas-vestir', label: 'Camisas de Vestir' },
          { to: '/categoria/camisas-sport',  label: 'Camisas Sport' },
          { to: '/categoria/polos',          label: 'Polos' },
        ],
      },
    ],
  },
  {
    label: 'TRAJES',
    groups: [
      {
        title: 'Trajes',
        links: [
          { to: '/categoria/trajes-completos', label: 'Trajes Completos' },
          { to: '/categoria/smoking',          label: 'Smoking' },
          { to: '/categoria/trajes-ceremonia', label: 'Ceremonia' },
        ],
      },
    ],
  },
  {
    label: 'PANTALONES',
    groups: [
      {
        title: 'Pantalones',
        links: [
          { to: '/categoria/pantalones-vestir', label: 'De Vestir' },
          { to: '/categoria/chinos',            label: 'Chinos' },
          { to: '/categoria/jeans-elegantes',   label: 'Jeans Elegantes' },
        ],
      },
    ],
  },
  {
    label: 'ACCESORIOS',
    groups: [
      {
        title: 'Accesorios',
        links: [
          { to: '/categoria/corbatas',  label: 'Corbatas' },
          { to: '/categoria/moños',     label: 'Moños' },
          { to: '/categoria/cintos',    label: 'Cintos' },
          { to: '/categoria/pañuelos',  label: 'Pañuelos de bolsillo' },
        ],
      },
    ],
  },
]

export default function Header({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  function handleMouseEnter(label) {
    clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  function toggleMobileItem(label) {
    setMobileExpanded(prev => (prev === label ? null : label))
  }

  return (
    <header
      className="fixed top-0 w-full z-40"
      style={{
        backgroundColor: '#101453',
        borderColor: '#1c2165',
      }}
    >
      <AnnouncementBar />

      {/* ── Main bar ── */}
      <div
        className="flex items-center justify-between w-full px-6 md:px-20 h-20 mx-auto border-b"
        style={{ borderColor: 'var(--color-outline-variant)', maxWidth: 'var(--spacing-container-max)' }}
      >
        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 -ml-2"
          style={{ color: '#e5e2e1', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Desktop nav — left */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {NAV_ITEMS.map(({ label }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: openDropdown === label ? '#e9c349' : '#e5e2e1',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderBottom: openDropdown === label ? '1px solid #e9c349' : '1px solid transparent',
                }}
              >
                {label}
              </button>

              {openDropdown === label && (
                <DropdownPanel
                  item={NAV_ITEMS.find(i => i.label === label)}
                  onClose={() => setOpenDropdown(null)}
                  onMouseEnter={() => clearTimeout(closeTimer.current)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Logo — centro */}
        <Link
          to="/"
          aria-label="MuyGuapos — Inicio"
          style={{ flexShrink: 0, alignSelf: 'stretch', width: '160px', overflow: 'hidden' }}
        >
          <img
            src={logo}
            alt="MuyGuapos"
            style={{ width: '160px', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block', transform: 'scale(1.2) translateY(5px)', transformOrigin: 'center 55%' }}
          />
        </Link>

        {/* Iconos — derecha */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            style={{ color: '#e5e2e1', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Buscar"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            style={{ color: '#e5e2e1', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Mi cuenta"
          >
            <span className="material-symbols-outlined">person</span>
          </button>
          <button
            className="relative"
            style={{ color: 'var(--color-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Carrito"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-on-secondary)',
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '10px',
                  fontWeight: '700',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="md:hidden border-t overflow-y-auto"
          style={{
            backgroundColor: '#0a0d42',
            borderColor: '#1c2165',
            maxHeight: 'calc(100dvh - 80px)',
          }}
        >
          {NAV_ITEMS.map(({ label, groups }) => (
            <div key={label} style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
              <button
                className="w-full flex items-center justify-between px-6 py-4"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: 'var(--color-on-surface)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleMobileItem(label)}
              >
                {label}
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px', transition: 'transform 0.15s', transform: mobileExpanded === label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {mobileExpanded === label && (
                <div style={{ backgroundColor: 'var(--color-surface-container)', paddingBottom: '8px' }}>
                  {groups.map(group => (
                    <div key={group.title}>
                      <span
                        className="block px-6 pt-4 pb-2 uppercase"
                        style={{
                          fontFamily: 'var(--font-hanken)',
                          fontSize: '11px',
                          fontWeight: '600',
                          letterSpacing: '0.12em',
                          color: 'var(--color-secondary)',
                        }}
                      >
                        {group.title}
                      </span>
                      {group.links.map(({ to, label: linkLabel }) => (
                        <Link
                          key={to}
                          to={to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-2"
                          style={{
                            fontFamily: 'var(--font-hanken)',
                            fontSize: '15px',
                            color: 'var(--color-on-surface-variant)',
                            textDecoration: 'none',
                          }}
                        >
                          {linkLabel}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/lookbook"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-6 py-4"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              color: 'var(--color-on-surface)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-outline-variant)',
            }}
          >
            LOOKBOOK
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </Link>
        </div>
      )}
    </header>
  )
}

function DropdownPanel({ item, onClose, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute top-full left-0 border-t border-b"
      style={{
        backgroundColor: 'var(--color-surface-container-low)',
        borderTopColor: 'var(--color-secondary)',
        borderBottomColor: 'var(--color-outline-variant)',
        minWidth: '320px',
        padding: '28px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        zIndex: 50,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-10">
        {item.groups.map(group => (
          <div key={group.title}>
            <span
              className="block mb-4 uppercase"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                color: 'var(--color-secondary)',
              }}
            >
              {group.title}
            </span>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {group.links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '15px',
                      color: 'var(--color-on-surface-variant)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-on-surface)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-on-surface-variant)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
