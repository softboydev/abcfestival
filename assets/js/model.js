(function(){
  let illo
  let model
  let container
  let clock = 0
  function init(){
    container = document.getElementById("container")
    // create illo
    illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.model',
      resize: true,
    })
    model = new Zdog.Anchor({
      addTo: illo,
      translate: { x: 0, y: 0 },
      rotate: {z:0.1},
      scale: 2,
    })
    // add circle
    let c = new Zdog.Shape({
      addTo: model,
      // no path set, default to single point
      stroke: 350,
      translate: { x: -140, y: 150, z: -180 },
      color: "#442AEB"
    })
    let b = new Zdog.Box({
      addTo: model,
      width: 150,
      height: 150,
      depth: 150,
      stroke: false,
      translate: { x: 150, y: 30, z: 150 },
      rotate: { x: Math.acos(1/3) * -1 + Zdog.TAU/4  },
      color: "#F7B308"
    })
  let a = new Zdog.Anchor({
    addTo: model,
    translate: { x: -150, y: -150, z: -50 },
    rotate: { z: -(Math.acos(1/3) * -1 + Zdog.TAU/4) * 0.5},
    scale: 250,
  })

  var radius = 0.5
  var inradius = Math.cos( Zdog.TAU/6 ) * radius
  var height = radius + inradius

  var triangle = new Zdog.Polygon({
    sides: 3,
    radius: radius,
    addTo: a,
    translate: { y: height/2 },
    fill: true,
    stroke: false,
    color: "#E10505",
    // backface: false,
  })


  for ( var i=0; i < 3; i++ ) {
    var rotor1 = new Zdog.Anchor({
      addTo: a,
      rotate: { y: Zdog.TAU/3 * -i },
    });
    var rotor2 = new Zdog.Anchor({
      addTo: rotor1,
      translate: { z: inradius, y: height/2 },
      rotate: { x: Math.acos(1/3) * -1 + Zdog.TAU/4  },
    });
    triangle.copy({
      addTo: rotor2,
      translate: { y: -inradius },
      color: "#E10505",
    });
  }

    triangle.rotate.set({ x: -Zdog.TAU/4, z: -Zdog.TAU/2 })
    animate()
  }

  function animate() {
    clock  += 0.001
    model.rotate.y = container.scrollTop * 0.001 + clock;
    illo.updateRenderGraph()
    requestAnimationFrame( animate )
  }
  window.addEventListener("DOMContentLoaded",init)
})()
