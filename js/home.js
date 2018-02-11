var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

var container;
var camera, scene, renderer;

var particles, particle, count = 0;

var mouseX = 0, mouseY = -200;

var windowHalfX = 750 / 2;
var windowHalfY = 140 / 2;

init();
animate();

function init() {

    container = document.createElement( 'div' );
    var bannerAll = document.querySelector(".banner");
    var banner2 = bannerAll;
    banner2.appendChild( container );

    camera = new THREE.PerspectiveCamera( 75, 750 / 140, 1, 10000 );
    camera.position.z = 1000;
    
    scene = new THREE.Scene();
    particles = new Array();
    var PI2 = Math.PI * 2;
    var material = new THREE.ParticleCanvasMaterial( {
        color: 0xb5b5b5,
        program: function ( context ) {
            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();
        }
    } );
    var i = 0;
    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
            particle = particles[ i ++ ] = new THREE.Particle( material );
            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
            scene.add( particle );
        }
    }

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( 750 , 140 );
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.bottom = "0";
    renderer.domElement.style.left = "50%";
    renderer.domElement.style.marginLeft = "-" + (750/2) + "px";
    
    container.appendChild( renderer.domElement );

    document.querySelector(".banner").addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.querySelector(".banner").addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.querySelector(".banner").addEventListener( 'touchmove', onDocumentTouchMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
    windowHalfX = 750 / 2;
    windowHalfY = 140 / 2;

    camera.aspect = 750 / 140;
    camera.updateProjectionMatrix();

    renderer.setSize( 750, 140 );
}


//

function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    //mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        //mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

function onDocumentTouchMove( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        //mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}
function animate() {
    requestAnimationFrame( animate );
    render();
}
function render() {
    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    
    var i = 0;
    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
            particle = particles[ i++ ];
            particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
            particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
        }
    }
    renderer.render( scene, camera );
    count += 0.1;
}