import React, { useState, useEffect } from 'react'
import type { SwitchItemProps } from '../../types'

const SwitchItem: React.FC<SwitchItemProps> = ({
  options,
  value,
  onChange,
  disabledOptions = [],
}) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(value)

  useEffect(() => {
    setSelectedId(value)
  }, [value])

  const handleToggle = (id: string) => {
    if (disabledOptions.includes(id)) {
      return
    }
    setSelectedId(id)
    onChange?.(id)
  }

  return (
    <div className="inline-flex">
      {options.map((option, index) => {
        const isDisabled = disabledOptions.includes(option.id)
        return (
          <div
            key={option.id}
            className={`inline-flex items-center py-2 px-0.5 group ${index > 0 ? 'ml-2.5' : ''} ${
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => handleToggle(option.id)}
          >
            <div
              className={`
                w-2.5 h-2.5 transition-colors ease-out duration-100
                ${selectedId === option.id ? 'bg-blue' : isDisabled ? 'bg-gray' : 'bg-gray group-hover:bg-[#ccc]'}
              `}
            />
            <span className={`text-body ml-1.5 ${isDisabled ? 'line-through' : ''}`}>
              {option.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default SwitchItem
