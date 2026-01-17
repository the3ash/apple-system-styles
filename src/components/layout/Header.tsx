import type { HeaderProps } from '../../types'
import Border from '../ui/Border'

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-heading tracking-tighter text-center leading-none uppercase text-blue mb-6">{title}</h1>
        {description && <div className="text-body text-center mb-12">{description}</div>}
      </div>
      <Border />
    </header>
  )
}

export default Header
