import TextItem from '../ui/TextItem'
import type { TextData } from '../../types'

interface TextContainerProps {
  texts: TextData[]
}

const TextContainer = ({ texts }: TextContainerProps) => {
  return (
    <div className="relative h-[1680px] flex-1 bg-white shadow-sm">
      <div className="relative z-10 py-4 md:py-8">
        <div className="grid">
          {texts.map((text) => (
            <TextItem key={text.name} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TextContainer
