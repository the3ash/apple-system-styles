import { useState } from 'react'
import type { ColorItemProps } from '../../types'
import { copyText } from '../../utils/clipboard'

const ColorItem = ({ color, colorType }: ColorItemProps) => {
  const [showCheckmark, setShowCheckmark] = useState(false)

  const getCopyText = () => {
    const cleanName = color.name.startsWith('.') ? color.name.slice(1) : color.name

    switch (colorType) {
      case 'uicolor':
        return `UIColor.${cleanName}`
      case 'nscolor':
        return `NSColor.${cleanName}`
      default:
        return color.name
    }
  }

  const handleClick = async () => {
    const copyTextValue = getCopyText()
    const success = await copyText(copyTextValue)
    if (success) {
      setShowCheckmark(true)
      setTimeout(() => setShowCheckmark(false), 500)
    }
  }

  const textColorClass = color.theme === 'dark' ? 'text-white' : 'text-black'
  const needsBorder = color.theme === 'light' && (color.hex === '#ffffffff' || color.hex === '#ffffff99')
  const backgroundLayerColor = color.theme === 'dark' ? '#000000' : '#ffffff'
  const hoverBgColor = color.theme === 'dark' ? 'hover:bg-[#222]' : 'hover:bg-black/4'

  const swatchStyle = {
    backgroundColor: color.hex,
    border: needsBorder ? `0.5px solid #ddd` : 'none',
  }

  const backgroundLayerStyle = {
    backgroundColor: backgroundLayerColor,
  }

  return (
    <div
      className={`flex items-start px-6 md:px-12 py-2 xl:items-center gap-3 cursor-pointer relative z-10 ${textColorClass} ${hoverBgColor} transition-colors duration-100 ease-out`}
      onClick={handleClick}
    >
      {/* Color swatch with background layer */}
      <div className="flex items-center justify-center w-9 h-[42px]">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 w-9 h-9" style={backgroundLayerStyle} />
          <div className="absolute inset-0 w-9 h-9" style={swatchStyle} />
        </div>
      </div>

      {/* Color info */}
      <div className="flex flex-col text-body flex-1 min-w-0">
        <span>
          {color.name}
          {showCheckmark && <span className={`ml-2 ${textColorClass}`}>(√)</span>}
        </span>
        <div className="color-info-layout">
          <span className="ml-2 mt-0.75 whitespace-nowrap">{color.rgba}</span>
          <span className="ml-2 mt-0.75 color-separator">·</span>
          <span className="ml-2 mt-0.75 color-hex-margin-small color-hex-margin-large whitespace-nowrap">
            {color.hex}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ColorItem
