import type { TextItemProps } from '../../types'
import Border from './Border'
import { useState, memo } from 'react'
import { copyText } from '../../utils/clipboard'

const TITLE_MAPPING: Record<string, string> = {
  largeTitle: 'Large Title',
  title2: 'Title 2',
  title3: 'Title 3',
}

const TextItem = memo(({ text }: TextItemProps) => {
  const [copied, setCopied] = useState(false)

  const formatTitle = (name: string): string => {
    const cleanName = name.replace(/^\./, '')
    return (
      TITLE_MAPPING[cleanName] ||
      cleanName
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
    )
  }

  const handleCopy = async () => {
    const success = await copyText(text.name)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 500)
    }
  }

  return (
    <div>
      <div
        className="flex h-20 cursor-pointer items-center px-6 transition-colors duration-100 ease-out hover:bg-black/4 md:px-14"
        onClick={handleCopy}
      >
        <div className="flex w-2/3 items-center md:w-1/2">
          <span
            className="text-left font-sans"
            style={{
              fontSize: `${text.size}px`,
              fontWeight: text.weight,
            }}
          >
            {formatTitle(text.name)}
          </span>
        </div>

        <div className="flex w-1/3 items-center justify-between md:w-1/2">
          <span className="text-body text-left">{text.name}</span>
          {copied && <span className="text-body">(√)</span>}
        </div>
      </div>
      <Border className="px-6 md:px-14" />
    </div>
  )
})

export default TextItem
