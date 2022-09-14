function main() {
  const canvas = document.querySelector("#z");

  const fov = 50;
  const aspect = canvas.clientWidth / canvas.clientHeight;
  const near = 0.1;
  const far = 2000;

  const orbit = new THREE.OrbitControls(camera, canvas);

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ canvas });

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height);
  const scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const texture = loader.load('https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg', () => {
    const rf = new THREE.WebGLCubeRenderTarget(texture.image.height)
    rf.fromEquirectangularTexture(renderer, texture)
    scene.background = rt.texture;
  });

  function render() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
    requestAnimationFrame(render);
}


main();