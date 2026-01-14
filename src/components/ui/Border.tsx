interface BorderProps {
  className?: string
}

const Border: React.FC<BorderProps> = ({
  className = 'w-full text-gray text-center mt-8 overflow-hidden whitespace-nowrap',
}) => {
  return (
    <div className={className}>
      <div
        className="w-full border-b border-gray"
        style={{
          borderStyle: 'dashed',
          borderWidth: '0 0 1px 0',
          borderImage:
            'repeating-linear-gradient(to right, #ddd 0, #ddd 4px, transparent 4px, transparent 8px) 1',
        }}
      ></div>
    </div>
  )
}

export default Border
