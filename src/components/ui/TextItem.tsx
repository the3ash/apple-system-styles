import type { TextItemProps } from '../../types'
import Border from './Border'
import { useState } from 'react'
import { copyText } from '../../utils/clipboard'

const TITLE_MAPPING: Record<string, string> = {
  largeTitle: 'Large Title',
  title2: 'Title 2',
  title3: 'Title 3',
}

const TextItem = ({ text }: TextItemProps) => {
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
        className="flex items-center h-20 px-8 md:px-14 cursor-pointer hover:bg-black/4 transition-colors ease-out duration-100"
        onClick={handleCopy}
      >
        <div className="w-1/2 flex items-center">
          <span
            className="font-sans text-left"
            style={{
              fontSize: `${text.size}px`,
              fontWeight: text.weight,
            }}
          >
            {formatTitle(text.name)}
          </span>
        </div>

        <div className="w-1/2 flex items-center justify-between">
          <span className="text-body text-left">{text.name}</span>
          {copied && <span className="text-body">(√)</span>}
        </div>
      </div>
      <Border className="px-8 md:px-14" />
    </div>
  )
}

export default TextItem
