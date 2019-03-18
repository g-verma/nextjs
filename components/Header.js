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
        <Link href="/users">
          <a style={linkStyle}>Users</a>
        </Link>
        <Link href="/react">
          <a style={linkStyle}>React</a>
        </Link>
    </div>
)

export default Header
