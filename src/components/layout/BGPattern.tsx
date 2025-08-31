import React from 'react'

const BGPattern: React.FC = () => {
  const svgPattern = `data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='10' height='10' fill='%23000000'/%3E%3Crect x='10' y='0' width='10' height='10' fill='%23171717'/%3E%3Crect x='0' y='10' width='10' height='10' fill='%23171717'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23000000'/%3E%3C/svg%3E`

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("${svgPattern}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '20px 20px',
        zIndex: 0,
      }}
    />
  )
}

export default BGPattern
