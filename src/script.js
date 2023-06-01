import * as dat from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import { gsap } from 'gsap'

/**
 * Base
 */
// Debug
const debugObject = {}
// const gui = new dat.GUI({
//     width: 400
// })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1) // PlaneBufferGeometry
const overlayMaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms:
    {
        uAlpha: { value: 1 }
    },
    vertexShader: `
        void main()
        {
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uAlpha;

        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
    `
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)

/**
 * Loaders
 */
let sceneReady = false
const loadingBarElement = document.querySelector('.loading-bar')

const loadingManager = new THREE.LoadingManager(
    // Loaded
    () =>
    {
        // Wait a little
        window.setTimeout(() =>
        {
            //Animate overlay  
            gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0, delay: 1 })

            // Update loadingBarElement
            loadingBarElement.classList.add('ended')
            loadingBarElement.style.transform = ''
        }, 500)

        window.setTimeout(() =>
        {
            sceneReady = true
        }, 1000)
    },

    // Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
    } 
)

// Texture loader
const textureLoader = new THREE.TextureLoader(loadingManager)

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Textures 
 */
const bakedTexture1 = textureLoader.load('b1-baked.jpg') 
bakedTexture1.flipY = false
bakedTexture1.encoding = THREE.sRGBEncoding

const bakedTexture2 = textureLoader.load('b2-baked.jpg') 
bakedTexture2.flipY = false
bakedTexture2.encoding = THREE.sRGBEncoding

const bakedTexture3 = textureLoader.load('b3-baked.jpg') 
bakedTexture3.flipY = false
bakedTexture3.encoding = THREE.sRGBEncoding

const bakedTexture4 = textureLoader.load('b4-baked.jpg') 
bakedTexture4.flipY = false
bakedTexture4.encoding = THREE.sRGBEncoding

const bakedTexture5 = textureLoader.load('b5-baked.jpg') 
bakedTexture5.flipY = false
bakedTexture5.encoding = THREE.sRGBEncoding

const bakedTexture6 = textureLoader.load('b6-baked.jpg') 
bakedTexture6.flipY = false
bakedTexture6.encoding = THREE.sRGBEncoding

const bakedTexture7 = textureLoader.load('b7-baked.jpg') 
bakedTexture7.flipY = false
bakedTexture7.encoding = THREE.sRGBEncoding

const bakedTexture8 = textureLoader.load('b8-baked.jpg') 
bakedTexture8.flipY = false
bakedTexture8.encoding = THREE.sRGBEncoding

const bakedTexture9 = textureLoader.load('b9-baked.jpg') 
bakedTexture9.flipY = false
bakedTexture9.encoding = THREE.sRGBEncoding

const bakedTexture10 = textureLoader.load('b10-baked.jpg') 
bakedTexture10.flipY = false
bakedTexture10.encoding = THREE.sRGBEncoding

const bakedTexture11 = textureLoader.load('b11-baked.jpg') 
bakedTexture11.flipY = false
bakedTexture11.encoding = THREE.sRGBEncoding

const bakedTexture12 = textureLoader.load('b12-baked.jpg') 
bakedTexture12.flipY = false
bakedTexture12.encoding = THREE.sRGBEncoding

const bakedTexture13 = textureLoader.load('b13-baked.jpg') 
bakedTexture13.flipY = false
bakedTexture13.encoding = THREE.sRGBEncoding

const bakedTexture14 = textureLoader.load('b14-baked.jpg') 
bakedTexture14.flipY = false
bakedTexture14.encoding = THREE.sRGBEncoding

const bakedTexture15 = textureLoader.load('b15-baked.jpg') 
bakedTexture15.flipY = false
bakedTexture15.encoding = THREE.sRGBEncoding

const bakedTexture16 = textureLoader.load('b16-baked.jpg') 
bakedTexture16.flipY = false
bakedTexture16.encoding = THREE.sRGBEncoding

const bakedTexture17 = textureLoader.load('b17-baked.jpg') 
bakedTexture17.flipY = false
bakedTexture17.encoding = THREE.sRGBEncoding

const bakedTexture18 = textureLoader.load('b18-baked.jpg') 
bakedTexture18.flipY = false
bakedTexture18.encoding = THREE.sRGBEncoding

const bakedTexture19 = textureLoader.load('b19-baked.jpg') 
bakedTexture19.flipY = false
bakedTexture19.encoding = THREE.sRGBEncoding

const bakedTexture20 = textureLoader.load('b20-baked.jpg') 
bakedTexture20.flipY = false
bakedTexture20.encoding = THREE.sRGBEncoding

const bakedTexture21 = textureLoader.load('b21-baked.jpg') 
bakedTexture21.flipY = false
bakedTexture21.encoding = THREE.sRGBEncoding

const bakedTexture22 = textureLoader.load('b22-baked.jpg') 
bakedTexture22.flipY = false
bakedTexture22.encoding = THREE.sRGBEncoding

const bakedTexture23 = textureLoader.load('b23-baked.jpg') 
bakedTexture23.flipY = false
bakedTexture23.encoding = THREE.sRGBEncoding

const bakedTexture24 = textureLoader.load('b24-baked.jpg') 
bakedTexture24.flipY = false
bakedTexture24.encoding = THREE.sRGBEncoding

const bakedTexture25 = textureLoader.load('b25-baked.jpg') 
bakedTexture25.flipY = false
bakedTexture25.encoding = THREE.sRGBEncoding

const bakedTexture26 = textureLoader.load('b26-baked.jpg') 
bakedTexture26.flipY = false
bakedTexture26.encoding = THREE.sRGBEncoding

const bakedTexture27 = textureLoader.load('b27-baked.jpg') 
bakedTexture27.flipY = false
bakedTexture27.encoding = THREE.sRGBEncoding

const bakedTexture28 = textureLoader.load('b28-baked.jpg') 
bakedTexture28.flipY = false
bakedTexture28.encoding = THREE.sRGBEncoding

const bakedTexture29 = textureLoader.load('b29-baked.jpg') 
bakedTexture29.flipY = false
bakedTexture29.encoding = THREE.sRGBEncoding

const bakedTexture30 = textureLoader.load('b30-baked.jpg') 
bakedTexture30.flipY = false
bakedTexture30.encoding = THREE.sRGBEncoding

const bakedTexture31 = textureLoader.load('b31-baked.jpg') 
bakedTexture31.flipY = false
bakedTexture31.encoding = THREE.sRGBEncoding

/**
 * Materials
 */
const b1Material = new THREE.MeshBasicMaterial({ map: bakedTexture1 })

const b2Material = new THREE.MeshBasicMaterial({ map: bakedTexture2 })

const b3Material = new THREE.MeshBasicMaterial({ map: bakedTexture3 })

const b4Material = new THREE.MeshBasicMaterial({ map: bakedTexture4 })

const b5Material = new THREE.MeshBasicMaterial({ map: bakedTexture5 })

const b6Material = new THREE.MeshBasicMaterial({ map: bakedTexture6 })

const b7Material = new THREE.MeshBasicMaterial({ map: bakedTexture7 })

const b8Material = new THREE.MeshBasicMaterial({ map: bakedTexture8 })

const b9Material = new THREE.MeshBasicMaterial({ map: bakedTexture9 })

const b10Material = new THREE.MeshBasicMaterial({ map: bakedTexture10 })

const b11Material = new THREE.MeshBasicMaterial({ map: bakedTexture11 })

const b12Material = new THREE.MeshBasicMaterial({ map: bakedTexture12 })

const b13Material = new THREE.MeshBasicMaterial({ map: bakedTexture13 })

const b14Material = new THREE.MeshBasicMaterial({ map: bakedTexture14 })

const b15Material = new THREE.MeshBasicMaterial({ map: bakedTexture15 })

const b16Material = new THREE.MeshBasicMaterial({ map: bakedTexture16 })

const b17Material = new THREE.MeshBasicMaterial({ map: bakedTexture17 })

const b18Material = new THREE.MeshBasicMaterial({ map: bakedTexture18 })

const b19Material = new THREE.MeshBasicMaterial({ map: bakedTexture19 })

const b20Material = new THREE.MeshBasicMaterial({ map: bakedTexture20 })

const b21Material = new THREE.MeshBasicMaterial({ map: bakedTexture21 })

const b22Material = new THREE.MeshBasicMaterial({ map: bakedTexture22 })

const b23Material = new THREE.MeshBasicMaterial({ map: bakedTexture23 })

const b24Material = new THREE.MeshBasicMaterial({ map: bakedTexture24 })

const b25Material = new THREE.MeshBasicMaterial({ map: bakedTexture25 })

const b26Material = new THREE.MeshBasicMaterial({ map: bakedTexture26 })

const b27Material = new THREE.MeshBasicMaterial({ map: bakedTexture27 })

const b28Material = new THREE.MeshBasicMaterial({ map: bakedTexture28 })

const b29Material = new THREE.MeshBasicMaterial({ map: bakedTexture29 })

const b30Material = new THREE.MeshBasicMaterial({ map: bakedTexture30 })

const b31Material = new THREE.MeshBasicMaterial({ map: bakedTexture31 })

// Portal light material
debugObject.portalColorStart = '#000000'
debugObject.portalColorEnd = '#ffffff'

// gui
//     .addColor(debugObject, 'portalColorStart')
//     .onChange(() =>
//     {
//         portalLightMaterial.uniforms.uColorStart.value.set(debugObject.portalColorStart)
//     })

// gui
//     .addColor(debugObject, 'portalColorEnd')
//     .onChange(() =>
//     {
//         portalLightMaterial.uniforms.uColorEnd.value.set(debugObject.portalColorEnd)
//     })

const portalLightMaterial = new THREE.ShaderMaterial({
    uniforms:
    {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color(debugObject.portalColorStart) },
        uColorEnd: { value: new THREE.Color(debugObject.portalColorEnd) }
    },
    vertexShader: portalVertexShader,
    fragmentShader: portalFragmentShader
})

/**
 * Model
 */
gltfLoader.load('pf1-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b1Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf2-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b2Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf3-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b3Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf4-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b4Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf5-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b5Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf6-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b6Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf7-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b7Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf8-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b8Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf9-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b9Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf10-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b10Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf11-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b11Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf12-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b12Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf13-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b13Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf14-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b14Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf15-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b15Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf16-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b16Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf17-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b17Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf18-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b18Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf19-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b19Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf20-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b20Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf21-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b21Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf22-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b22Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf23-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b23Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf24-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b24Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf25-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b25Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf26-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b26Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf27-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b27Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf28-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b28Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf29-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b29Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf30-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b30Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('pf31-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b31Material
        })

        scene.add(gltf.scene)
    }
)

// Portal light - find() method
gltfLoader.load('pf32-projectframe.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b9Material
        })

        const portalLightMesh = gltf.scene.children.find(child => child.name === 'portalLight')

        portalLightMesh.material = portalLightMaterial

        scene.add(gltf.scene)
    }
)

/**
 * Point of Interests
 */
// const raycaster = new Raycaster()
const points = [
    {
        position: new THREE.Vector3(4.38, 0.5, 12.2),
        element: document.querySelector('.mail')
    },
    {
        position: new THREE.Vector3(3.4, 0.5, 12.2),
        element: document.querySelector('.linkedin')
    },
    {
        position: new THREE.Vector3(2.6, 0.5, 13),
        element: document.querySelector('.github')
    },
    {
        position: new THREE.Vector3(2.6, 0.5, 14),
        element: document.querySelector('.twitter')
    },
    {
        position: new THREE.Vector3(-0.42, 0.5, 11.5),
        element: document.querySelector('.steam')
    },
    {
        position: new THREE.Vector3(1.7, 2.1, 16.38),
        element: document.querySelector('.info-1')
    },
    {
        position: new THREE.Vector3(1.6, 2.1, 16.63),
        element: document.querySelector('.info-2')
    },
    {
        position: new THREE.Vector3(0.07, 2.1, 16.39),
        element: document.querySelector('.info-3')
    },
    {
        position: new THREE.Vector3(-0.05, 2.1, 16.64),
        element: document.querySelector('.info-4')
    },
    {
        position: new THREE.Vector3(4.69, 1.58, 5.55),
        element: document.querySelector('.info-5')
    },
    {
        position: new THREE.Vector3(2.75, 1.74, 4.8),
        element: document.querySelector('.info-6')
    }
]

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 9
camera.position.y = 8
camera.position.z = 30
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

debugObject.clearColor = '#211f18'
renderer.setClearColor(debugObject.clearColor)
// gui
//     .addColor(debugObject, 'clearColor')
//     .onChange(() =>
//     {
//         renderer.setClearColor(debugObject.clearColor)
//     })

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update materials
    portalLightMaterial.uniforms.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Point of Interests (Wait for the scene to be ready)
    if(sceneReady)
    {
        // Point of Interests (Go through each point)
        for(const point of points)
        {
            const screenPosition = point.position.clone()
            screenPosition.project(camera)

            // // Raycaster (Showing and hiding the element)
            // raycaster.setfromCamera(screenPosition, camera)
            // const intersects = raycaster.intersectObjects(scene.children, true)

            // if(intersects.length === 0)
            // {
            //     point.element.classList.add('visible')
            // }
            // else 
            // {
            //     const intersectionDistance = intersects[0].distance
            //     const pointDistance = point.position.distanceTo(camera.position)

            //     if(intersectionDistance < pointDistance)
            //     {
            //         point.element.classList.remove('visible')
            //     }
            //     else
            //     {
            //         point.element.classList.add('visible')
            //     }
            // }

            const translateX = screenPosition.x * sizes.width * 0.5
            const translateY = - screenPosition.y * sizes.height * 0.5
            point.element.style.transform = `translate(${translateX}px, ${translateY}px)`
        }
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()