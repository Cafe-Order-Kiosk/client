
import { Component } from "react"

class HomeComp extends Component{
  state = {
    name : '',
  }
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <p className="home-text">화면을 터치해주세요</p>
        <div className="background2"></div>
        
        <video autoPlay controls loop muted preload="auto">
          <source className="main-source" type="video/mp4"
            src={this.props.url}
          />
        </video> 
      </>
    )
  };
}

export default HomeComp;
