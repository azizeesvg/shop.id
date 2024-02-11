import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'


function Nav ({ query, handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Your Search shoes"
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="https://shopee.co.id/">
          <FiHeart className="nav-icons" />
        </a>
        <a href="https://shopee.co.id/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="https://shopee.co.id/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
