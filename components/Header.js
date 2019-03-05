import Link from 'next/link'

const linkStyle = {
  marginRight: 25
}

const Header = () => (
    <div>
        <span><strong style={linkStyle}>NextJs</strong></span>
        <Link href="/" >
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/users" prefetch>
          <a style={linkStyle}>Users</a>
        </Link>
    </div>
)

export default Header
