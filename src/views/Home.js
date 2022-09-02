import React from "react";
import { useRoutes } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="item" onClick={this.jump("cyliderTexture")}>
          圆柱体纹理贴图
        </div>
      </div>
    );
  }
  jump() {
    Router;
  }
}
export default Home;
