import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button">
          <UserIcon className="w-8 h-8" />
          <span className="font-bold">Sign in</span>
        </Link>
        <link href="/cart" className="header-button">
          <ShoppingCartIcon className="w-8 h-8" />
          <span className="font-bold">Cart</span>
        </link>
      </nav>
    </div>
  )
}

export default Menu
