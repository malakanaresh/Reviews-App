// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {num: 0}

  onChangeLeft = () => {
    const {num} = this.state
    if (num === 0) {
      this.setState({num: 0})
    } else {
      this.setState(preValue => ({num: preValue.num - 1}))
    }
  }

  onChangeRight = () => {
    const {num} = this.state
    if (num === 3) {
      this.setState({num: 3})
    } else {
      this.setState(preValue => ({num: preValue.num + 1}))
    }
  }

  render() {
    const {num} = this.state
    const {reviewsList} = this.props
    const details = reviewsList[num]

    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="bg-container">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.onChangeLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="profile-container">
            <img
              src={details.imgUrl}
              alt={details.username}
              className="img-profile"
            />
            <p>{details.username}</p>
            <p>{details.companyName}</p>
            <p>{details.description}</p>
          </div>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.onChangeRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
