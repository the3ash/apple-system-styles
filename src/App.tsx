import ColorsContainer from '@/components/layout/ColorsContainer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TextContainer from '@/components/layout/TextContainer'
import Switch from '@/components/ui/Switch'
import nsColorsData from '@/data/ns-color.json'
import textData from '@/data/text.json'
import uiColorsData from '@/data/ui-color.json'
import { useAppState } from '@/hooks/useAppState'
import { filterColorsByTheme } from '@/utils/colors'

const lightUiColors = filterColorsByTheme(uiColorsData, 'light')
const darkUiColors = filterColorsByTheme(uiColorsData, 'dark')
const lightNsColors = filterColorsByTheme(nsColorsData, 'light')
const darkNsColors = filterColorsByTheme(nsColorsData, 'dark')

function App() {
  const { contentType, prefixType, setContentType, setPrefixType } = useAppState()

  const renderContent = () => {
    if (contentType === 'ui-colors') {
      return (
        <>
          <ColorsContainer
            colors={lightUiColors}
            theme="light"
            prefixType={prefixType}
            contentType={contentType}
          />
          <ColorsContainer
            colors={darkUiColors}
            theme="dark"
            prefixType={prefixType}
            contentType={contentType}
          />
        </>
      )
    }
    if (contentType === 'ns-colors') {
      return (
        <>
          <ColorsContainer
            colors={lightNsColors}
            theme="light"
            prefixType={prefixType}
            contentType={contentType}
          />
          <ColorsContainer
            colors={darkNsColors}
            theme="dark"
            prefixType={prefixType}
            contentType={contentType}
          />
        </>
      )
    }
    return <TextContainer texts={textData} />
  }

  return (
    <div className="mx-auto min-h-screen px-4 py-16 font-mono md:px-7">
      <div className="mx-auto max-w-270">
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
                  className="hover:bg-blue transition-all duration-100 ease-out hover:text-white"
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

        <div className="theme-containers-layout mb-20 *:min-w-0">{renderContent()}</div>

        <Footer />
      </div>
    </div>
  )
}

export default App
