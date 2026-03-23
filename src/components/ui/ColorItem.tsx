import { useState, useMemo, memo } from 'react'
import type { ColorItemProps } from '../../types'
import { copyText } from '../../utils/clipboard'

const ColorItem = memo(({ color, prefixType, contentType }: ColorItemProps) => {
  const [showCheckmark, setShowCheckmark] = useState(false)

  const displayName = useMemo(() => {
    const cleanName = color.name.startsWith('.') ? color.name.slice(1) : color.name

    if (prefixType === 'off') {
      return color.name
    }

    if (contentType === 'ui-colors') {
      return `UIColor.${cleanName}`
    }

    if (contentType === 'ns-colors') {
      return `NSColor.${cleanName}`
    }

    return color.name
  }, [color.name, prefixType, contentType])

  const handleClick = async () => {
    const success = await copyText(displayName)
    if (success) {
      setShowCheckmark(true)
      setTimeout(() => setShowCheckmark(false), 500)
    }
  }

  const textColorClass = color.theme === 'dark' ? 'text-white' : 'text-black'
  const needsBorder =
    color.theme === 'light' && (color.hex === '#ffffffff' || color.hex === '#ffffff99')
  const hoverBgColor = color.theme === 'dark' ? 'hover:bg-[#222]' : 'hover:bg-black/4'

  const swatchStyle = useMemo(
    () => ({
      backgroundColor: color.hex,
      border: needsBorder ? `0.5px solid #ddd` : 'none',
    }),
    [color.hex, needsBorder],
  )

  const backgroundLayerStyle = useMemo(
    () => ({
      backgroundColor: color.theme === 'dark' ? '#000000' : '#ffffff',
    }),
    [color.theme],
  )

  return (
    <div
      className={`relative z-10 flex cursor-pointer items-start gap-3 px-6 py-2 md:px-12 xl:items-center ${textColorClass} ${hoverBgColor} transition-colors duration-100 ease-out`}
      onClick={handleClick}
    >
      {/* Color swatch with background layer */}
      <div className="flex h-10.5 w-9 items-center justify-center">
        <div className="relative h-9 w-9">
          <div className="absolute inset-0 h-9 w-9" style={backgroundLayerStyle} />
          <div className="absolute inset-0 h-9 w-9" style={swatchStyle} />
        </div>
      </div>

      {/* Color info */}
      <div className="text-body flex min-w-0 flex-1 flex-col">
        <span>
          {displayName}
          {showCheckmark && <span className={`ml-2 ${textColorClass}`}>(√)</span>}
        </span>
        <div className="color-info-layout">
          <span className="mt-0.75 ml-2 whitespace-nowrap">{color.rgba}</span>
          <span className="color-separator mt-0.75 ml-2">·</span>
          <span className="color-hex-margin-small color-hex-margin-large mt-0.75 ml-2 whitespace-nowrap">
            {color.hex}
          </span>
        </div>
      </div>
    </div>
  )
})

export default ColorItem
