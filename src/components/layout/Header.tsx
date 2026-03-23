import Border from '@/components/ui/Border'
import type { HeaderProps } from '@/types'

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-blue mb-6 text-center text-[4rem] leading-none tracking-tighter uppercase">
          {title}
        </h1>
        {description && <div className="text-body mb-12 text-center">{description}</div>}
      </div>
      <Border />
    </header>
  )
}

export default Header
