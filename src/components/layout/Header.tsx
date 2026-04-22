import Border from '@/components/ui/Border'
import type { HeaderProps } from '@/types'

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-6 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 translate-x-0.5 translate-y-0.5 text-[4rem] leading-none tracking-tighter uppercase [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor]"
          >
            {title}
          </span>
          <h1 className="text-blue relative z-10 text-[4rem] leading-none tracking-tighter uppercase">
            {title}
          </h1>
        </div>
        {description && <div className="text-body mb-12 text-center">{description}</div>}
      </div>
      <Border />
    </header>
  )
}

export default Header
