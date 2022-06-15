export let usingModel = null;
import { obj } from './objParser.js';
import { modelColor } from './Variables.js';
import { materialParam } from './Variables.js';
export function LoadSphere(THREE){
    usingModel = null
    let geometry = new THREE.SphereGeometry(300, 12, 12)
    let material = new THREE.MeshBasicMaterial({color: modelColor, wireframe: true})
    let mesh = new THREE.Mesh(geometry, material)
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}

export function LoadCube(THREE){
    usingModel = null
    const geometry = new THREE.BoxGeometry( 300, 300, 300 );
    const material = new THREE.MeshLambertMaterial({color: modelColor});
    const mesh = new THREE.Mesh( geometry, material );
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}

export function LoadTorus(THREE){
    usingModel = null
    const geometry = new THREE.TorusKnotGeometry( 100, 30, 1000, 160 );
    const material = new THREE.MeshLambertMaterial( {color: modelColor} );
    const mesh = new THREE.Mesh( geometry, material );
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);   
}

export function customLoad(THREE){
    usingModel = 'user';
    const positions = obj.position;
    const normals = obj.normal;
    const uvs = obj.texcoord;
    let geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    geometry.addAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    geometry.addAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    geometry.addAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
        const material = userMaterial(THREE)
        const mesh = new THREE.Mesh( geometry, material );
    
    return mesh;
}
function userMaterial(THREE){
    let material;
    switch(materialParam['type']){
        case "MeshLambertMaterial":
            material = new THREE.MeshLambertMaterial( {color: modelColor} );
            return material;
        case "MeshStandardMaterial":
            material = new THREE.MeshStandardMaterial( {color: modelColor} );
            return material;
        case "MeshBasicMaterial":
            material = new THREE.MeshBasicMaterial( {color: modelColor} );
            return material;
    }
}