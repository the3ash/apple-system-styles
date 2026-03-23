import React from 'react'
import BGPattern from '@/components/layout/BGPattern'
import ColorItem from '@/components/ui/ColorItem'
import type { ColorsContainerProps } from '@/types'

const ColorsContainer: React.FC<ColorsContainerProps> = ({
  colors,
  theme,
  prefixType,
  contentType,
}) => {
  const isDark = theme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'

  return (
    <div className={`flex-1 ${bgColor} relative shadow-sm`}>
      {isDark && <BGPattern />}
      <div className="relative z-10 py-5 md:py-10">
        <div className="scrollbar-hide grid overflow-x-auto">
          {colors.map((color, index) => (
            <ColorItem
              key={`${color.name}-${color.theme}-${index}`}
              color={color}
              prefixType={prefixType}
              contentType={contentType}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorsContainer
