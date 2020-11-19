import React from 'react'

interface GDAOIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const GDAOIcon: React.FC<GDAOIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
    🧁
  </span>
)

export default GDAOIcon
