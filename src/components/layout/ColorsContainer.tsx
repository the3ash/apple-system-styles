import React from 'react'
import ColorItem from '../ui/ColorItem'
import BGPattern from './BGPattern'
import type { ColorsContainerProps } from '../../types'

const ColorsContainer: React.FC<ColorsContainerProps> = ({ colors, theme, colorType }) => {
  const isDark = theme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'

  return (
    <div className={`flex-1 ${bgColor} shadow-sm relative`}>
      {isDark && <BGPattern />}
      <div className="py-5 md:py-10 relative z-10">
        <div className="grid overflow-x-auto scrollbar-hide">
          {colors.map((color, index) => (
            <ColorItem key={`${color.name}-${color.theme}-${index}`} color={color} colorType={colorType} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorsContainer
