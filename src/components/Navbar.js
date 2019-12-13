import React from 'react'
import { Link } from 'gatsby'
import twitter from '../img/social/twitter.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      activePage: 0
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggleActivePage = (n) => {
    this.setState({
      activePage: n
    })
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h1>NT4T</h1>
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className={`navbar-item ${this.state.activePage === 1 ? "active-page" : ""}`} to="/about" onClick={() => this.toggleActivePage(1)}>
                About
              </Link>
              <Link className={`navbar-item ${this.state.activePage === 2 ? "active-page" : ""}`} to="/blog" onClick={() => this.toggleActivePage(2)}>
                Blog
              </Link>
              <Link className={`navbar-item ${this.state.activePage === 3 ? "active-page" : ""}`} to="/contact" onClick={() => this.toggleActivePage(3)}>
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://twitter.com/NoTech4Tyrants"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
