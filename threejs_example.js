(function() {
  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();
  $(function() {
    var animate, camera, geometry, init, mesh, render, renderer, scene;
    camera = null;
    scene = null;
    geometry = null;
    mesh = null;
    renderer = null;
    init = function() {
      var material;
      camera = new THREE.Camera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;
      scene = new THREE.Scene();
      geometry = new THREE.CubeGeometry(200, 200, 200);
      material = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        wireframe: true
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.addObject(mesh);
      renderer = new THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
      return document.body.appendChild(renderer.domElement);
    };
    animate = function() {
      requestAnimationFrame(animate);
      return render();
    };
    render = function() {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
      return renderer.render(scene, camera);
    };
    init();
    return animate();
  });
}).call(this);
