# shim layer with setTimeout fallback
window.requestAnimationFrame = do ->
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        (callback, element) ->
            window.setTimeout(callback, 1000 / 60)

$ ->
    camera = null
    scene = null
    geometry = null
    mesh = null
    renderer = null

    init = ->
        camera = new THREE.Camera 75, 1, 1, 10000
        camera.position.z = 500

        scene = new THREE.Scene()

        geometry = new THREE.CubeGeometry 200, 200, 200
        material = new THREE.MeshBasicMaterial { color: 0xFF0000, wireframe: false }

        mesh = new THREE.Mesh geometry, material
        scene.addObject mesh

        renderer = new THREE.CanvasRenderer()
        renderer.setSize 300, 300

        $('#title').find('h1').first().after(renderer.domElement)

    animate = ->
        # Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
        requestAnimationFrame animate
        render()

    render = ->
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.02

        renderer.render scene, camera

    init()
    animate()
