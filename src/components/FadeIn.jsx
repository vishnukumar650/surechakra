import React, { useEffect, useState } from 'react'

export default function FadeIn({ children, className = '', style, ...props }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 300ms ease, transform 300ms ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}