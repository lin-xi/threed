import React from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  CylinderGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

class Texture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const rect = this.$el.getBoundingClientReact();
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer();
    renderer.setSize(rect.width, rect.height);
    this.$el.appendChild(renderer.domElement);

    const geometry = new CylinderGeometry(5, 5, 20, 32);
    const material = new MeshBasicMaterial({ color: 0xffff00 });
    const cylinder = new Mesh(geometry, material);
    scene.add(cylinder);
    camera.position.z = 5;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="texture">
        <canvas></canvas>
      </div>
    );
  }
}

export default Texture;
