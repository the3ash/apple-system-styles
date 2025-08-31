import TextItem from '../ui/TextItem'
import type { TextData } from '../../types'

interface TextContainerProps {
  texts: TextData[]
}

const TextContainer = ({ texts }: TextContainerProps) => {
  return (
    <div className="h-[1680px] flex-1 bg-white shadow-sm relative">
      <div className="py-8 relative z-10">
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
