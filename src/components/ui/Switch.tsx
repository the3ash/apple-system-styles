import React from 'react'
import SwitchItem from './SwitchItem'
import type { SwitchProps, ContentType, ColorType } from '../../types'

const Switch: React.FC<SwitchProps> = ({ contentType, colorType, onContentTypeChange, onColorTypeChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-0 mb-4">
      <SwitchItem
        options={[
          { id: 'colors', label: 'Colors' },
          { id: 'text', label: 'Text' },
        ]}
        value={contentType}
        onChange={(selectedId: string) => onContentTypeChange(selectedId as ContentType)}
      />
      <div className="flex items-center gap-4">
        <span className="text-body">Copy as: </span>
        <SwitchItem
          options={[
            { id: 'none', label: 'None' },
            { id: 'uicolor', label: 'UIColor' },
            { id: 'nscolor', label: 'NSColor' },
          ]}
          value={colorType}
          onChange={
            contentType === 'text' ? undefined : (selectedId: string) => onColorTypeChange(selectedId as ColorType)
          }
          disabledOptions={contentType === 'text' ? ['uicolor', 'nscolor'] : []}
        />
      </div>
    </div>
  )
}

export default Switch
