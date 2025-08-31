import Header from './components/layout/Header'
import Switch from './components/ui/Switch'
import ColorsContainer from './components/layout/ColorsContainer'
import TextContainer from './components/layout/TextContainer'
import Footer from './components/layout/Footer'
import colorsData from './data/colors.json'
import textData from './data/text.json'
import { useAppState } from './hooks/useAppState'
import type { ColorData } from './types'

function App() {
  const { contentType, colorType, setContentType, setColorType } = useAppState()

  // Filter colors by theme with proper typing
  const lightColors = colorsData.filter((color) => color.theme === 'light') as ColorData[]
  const darkColors = colorsData.filter((color) => color.theme === 'dark') as ColorData[]

  const renderContent = () => {
    if (contentType === 'colors') {
      return (
        <>
          <ColorsContainer colors={lightColors} theme="light" colorType={colorType} />
          <ColorsContainer colors={darkColors} theme="dark" colorType={colorType} />
        </>
      )
    }
    return <TextContainer texts={textData} />
  }

  return (
    <div className="min-h-screen font-mono mx-auto px-4 md:px-7 py-16">
      <div className="max-w-[1080px] mx-auto">
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
                  className="hover:text-white hover:bg-black transition-all ease-out duration-100"
                >
                  [GitHub ↱]
                </a>
              </span>
            </>
          }
        />

        <Switch
          contentType={contentType}
          colorType={colorType}
          onContentTypeChange={setContentType}
          onColorTypeChange={setColorType}
        />

        <div className="theme-containers-layout [&>*]:min-w-0 mb-20">{renderContent()}</div>

        <Footer />
      </div>
    </div>
  )
}

export default App
