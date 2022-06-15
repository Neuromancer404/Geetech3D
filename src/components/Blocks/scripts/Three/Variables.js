export let orbValue = false;
export let color = "black"
export let screenshot = false
export let modelColor = "#ffffff"
export let autoRotate = false;
export let AddSetka = false;
export let modelNum = 0;
export let Userlight = {
    "type": "direct",
    "color": "#ffffff",
    "intensity": 1.0,
    "decay": 1,
    "distance": 1000,
        "x": 50,
        "y": 50,
        "z": 50
}
export let materialParam = {
    "type": "MeshLambertMaterial"
}
export function setVarData(key, value){
    switch(key){
        case "color":
            color = value; 
            break;
        case "orbValue":
            orbValue = value;
            break;
        case "autoRotate":
            autoRotate = value
            break;
        case "AddSetka":
            AddSetka = value
            break;
        case "modelNum":
            modelNum = value;
            break;
        case "ColorType":
            Userlight['type'] = value['type']
            break;
        case "LightColor":
            Userlight['color'] = value['color']
            break;
        case "LightIntensity":
            Userlight["intensity"] = value['intensity'];
            break;
        case "pointLightDecay":
            Userlight['decay'] = value['pointLightDecay']
            break;
        case 'pointLightDistance':
            Userlight['distance'] = value['pointLightDistance']
            break;
        case 'pointLightCoord':
            Userlight['x'] = value['x']
            Userlight['y'] = value['y']
            Userlight['z'] = value['z']
            break;
        case 'modelColor':
            modelColor = value
            break;
        case 'makeScreenshot':
            screenshot = value;
            break;
        case 'material':
            materialParam['type'] = value
            break;
    }
}
export function jsonVar(){
    return {}
}