import Header from './components/layout/Header'
import Switch from './components/ui/Switch'
import ColorsContainer from './components/layout/ColorsContainer'
import TextContainer from './components/layout/TextContainer'
import Footer from './components/layout/Footer'
import uiColorsData from './data/ui-color.json'
import nsColorsData from './data/ns-color.json'
import textData from './data/text.json'
import { useAppState } from './hooks/useAppState'
import type { ColorData } from './types'

function App() {
  const { contentType, prefixType, setContentType, setPrefixType } = useAppState()

  // Filter colors by theme with proper typing
  const lightUiColors = uiColorsData.filter((color) => color.theme === 'light') as ColorData[]
  const darkUiColors = uiColorsData.filter((color) => color.theme === 'dark') as ColorData[]

  const lightNsColors = nsColorsData.filter((color) => color.theme === 'light') as ColorData[]
  const darkNsColors = nsColorsData.filter((color) => color.theme === 'dark') as ColorData[]

  const renderContent = () => {
    if (contentType === 'ui-colors') {
      return (
        <>
          <ColorsContainer colors={lightUiColors} theme="light" prefixType={prefixType} contentType={contentType} />
          <ColorsContainer colors={darkUiColors} theme="dark" prefixType={prefixType} contentType={contentType} />
        </>
      )
    }
    if (contentType === 'ns-colors') {
      return (
        <>
          <ColorsContainer colors={lightNsColors} theme="light" prefixType={prefixType} contentType={contentType} />
          <ColorsContainer colors={darkNsColors} theme="dark" prefixType={prefixType} contentType={contentType} />
        </>
      )
    }
    return <TextContainer texts={textData} />
  }

  return (
    <div className="min-h-screen font-mono mx-auto px-4 md:px-7 py-16">
      <div className="max-w-270 mx-auto">
        <Header
          title="Apple System Styles"
          description={
            <>
              Apple system colors & text styles{' '}
              <span className="inline-flex flex-wrap items-center gap-1">
                reference ∙{' '}
                <a
                  href="https://github.com/the3ash/apple-system-styles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:bg-blue transition-all ease-out duration-100"
                >
                  [GitHub ↱]
                </a>
              </span>
            </>
          }
        />

        <Switch
          contentType={contentType}
          prefixType={prefixType}
          onContentTypeChange={setContentType}
          onPrefixTypeChange={setPrefixType}
        />

        <div className="theme-containers-layout *:min-w-0 mb-20">{renderContent()}</div>

        <Footer />
      </div>
    </div>
  )
}

export default App
