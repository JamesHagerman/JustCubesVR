function doVR() {
  //Setup three.js WebGL renderer
  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);

  // Append the canvas element created by the renderer to document body element.
  $('body').append(renderer.domElement);

  // Create a three.js scene.
  var scene = new THREE.Scene();

  // Create a three.js camera.
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);

  // Apply VR headset positional data to camera.
  var controls = new THREE.VRControls(camera);

  // Apply VR stereo rendering to renderer.
  var effect = new THREE.VREffect(renderer);
  effect.setSize(window.innerWidth, window.innerHeight);

  // Create a VR manager helper to enter and exit VR mode.
  var manager = new WebVRManager(renderer, effect, {hideButton: false});

  // Create 3D objects.
  var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh(geometry, material);

  // Position cube mesh
  cube.position.z = -1;

  // Add cube mesh to your three.js scene
  scene.add(cube);

  // Request animation frame loop function
  function animate() {
    // Apply rotation to cube mesh
    cube.rotation.y += 0.01;

    // Update VR headset position and apply to camera.
    controls.update();

    // Render the scene through the manager.
    manager.render(scene, camera);

    requestAnimationFrame(animate);
  }

  // Kick off animation loop
  animate();

  // Reset the position sensor when 'z' pressed.
  function onKey(event) {
    if (event.keyCode == 90) { // z
      controls.resetSensor();
    }
  }

  window.addEventListener('keydown', onKey, true);

  // Handle window resizes
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    effect.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize, false);
}
//doVR();

var width = window.innerWidth/1200;
var height = window.innerHeight/1200;
var camera; // needs to be global for resize
function doShader() {
  // Basic setup:
  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  $('body').append(renderer.domElement);

  // Create a three.js scene and a camera
  var scene = new THREE.Scene();

  // Camera setup:
  //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);
  //camera.position.z = 1;
  //function onWindowResize() {
  //  camera.aspect = window.innerWidth / window.innerHeight;
  //  camera.updateProjectionMatrix();
  //
  //  renderer.setSize(window.innerWidth, window.innerHeight);
  //}

  camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.3, 10000 );
  camera.position.z = 20;
  camera.lookAt( scene.position );
  function onWindowResize() {
    width = window.innerWidth/1200;
    height = window.innerHeight/1200;
    camera.left = width / - 2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / - 2;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  $(window).on('resize', onWindowResize);
  scene.add(camera);

  // Just an object:
  var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  var material = new THREE.MeshNormalMaterial(); //{wireframe: true}
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  var cube2 = new THREE.Mesh(geometry, material);
  scene.add(cube2);

  var cube3 = new THREE.Mesh(geometry, material);
  scene.add(cube3);

  var cube4 = new THREE.Mesh(geometry, material);
  scene.add(cube4);

  var cube5 = new THREE.Mesh(geometry, material);
  scene.add(cube5);

  var cube6 = new THREE.Mesh(geometry, material);
  scene.add(cube6);

  var cube7 = new THREE.Mesh(geometry, material);
  scene.add(cube7);

  var cube8 = new THREE.Mesh(geometry, material);
  scene.add(cube8);


  function animate(time) {
    // Apply rotation to cube mesh
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.0001;

    cube2.rotation.x -= 0.01;
    cube2.rotation.y += 0.001;
    cube2.rotation.z += 0.0001;

    cube3.rotation.x += 0.01;
    cube3.rotation.y -= 0.001;
    cube3.rotation.z += 0.0001;

    cube4.rotation.x -= 0.01;
    cube4.rotation.y -= 0.001;
    cube4.rotation.z += 0.0001;

    cube5.rotation.x += 0.01;
    cube5.rotation.y += 0.001;
    cube5.rotation.z -= 0.0001;

    cube6.rotation.x -= 0.01;
    cube6.rotation.y += 0.001;
    cube6.rotation.z -= 0.0001;

    cube7.rotation.x += 0.01;
    cube7.rotation.y -= 0.001;
    cube7.rotation.z -= 0.0001;

    cube8.rotation.x -= 0.01;
    cube8.rotation.y -= 0.001;
    cube8.rotation.z -= 0.0001;


    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  function onDeviceFound(devices) {
    this.devices=devices;
    if (devices) {
      if (devices.length > 0) {
        console.log("Device(s) found: "+devices.length);
      } else {
        console.log("Device could not be found");
      }
    } else {
      console.log("Permission denied.");
    }
  }

  chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, onDeviceFound);

}

// Entry point
$(document).ready(function () {
  doShader();
});
