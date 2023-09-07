import {Component} from 'react'

import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="user-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
            alt="profile"
            className="image"
          />
          <h1 className="main-head">Wade Warren</h1>
          <p className="para">Software Developer Intern at Karrynow</p>
        </div>
      </div>
    )
  }
}

export default UserInfo
