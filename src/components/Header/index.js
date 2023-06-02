import './index.css'

import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <button type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
              />
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
              </ul>
              <button type="button">Logout</button>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header
