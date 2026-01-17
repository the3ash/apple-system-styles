import React from 'react'
import SwitchItem from './SwitchItem'
import type { SwitchProps, ContentType, PrefixType } from '../../types'

const Switch: React.FC<SwitchProps> = ({ contentType, prefixType, onContentTypeChange, onPrefixTypeChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-0 mb-4">
      <SwitchItem
        options={[
          { id: 'ui-colors', label: 'UIColor' },
          { id: 'ns-colors', label: 'NSColor' },
          { id: 'text', label: 'Text' },
        ]}
        value={contentType}
        onChange={(selectedId: string) => onContentTypeChange(selectedId as ContentType)}
      />
      <div className="flex items-center gap-4">
        <span className="text-body">Prefix: </span>
        <SwitchItem
          options={[
            { id: 'off', label: 'Off' },
            { id: 'on', label: 'On' },
          ]}
          value={prefixType}
          onChange={
            contentType === 'text' ? undefined : (selectedId: string) => onPrefixTypeChange(selectedId as PrefixType)
          }
          disabledOptions={contentType === 'text' ? ['on', 'off'] : []}
        />
      </div>
    </div>
  )
}

export default Switch
