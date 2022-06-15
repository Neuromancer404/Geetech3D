<template>
  <div class="LightColorRoot">
    <div class="Osveshenie">
        <form name="UserLight">
            <div class="firsElem">
            <input type="radio" id="contactChoice1" @change="selectLight('ambient')"
            name="light" value="Ambient Light">
            <label for="contactChoice1">Ambient Light</label>
                <div v-if="ambientParam" class="ambientParam">
                    <div class="LightColor">
                        <label class="LightColor">Цвет:</label>
                        <input type="color" name="color" class="LightColor" id="color1" @change="selectLightColor('ambient')">
                    </div>
                    <div class="inputLightIntencity">
                        <label class="inputLightIntencity">Интенсивность:</label>
                        <input class="inputLightIntencity" id="ambientIntensity" value="1.0" type="text" @input="selectLightIntensity('ambient')" v-on:keyup.enter="selectLightIntensity('ambient')">
                    </div>
                </div>
            </div>
            <div class="secElem">
            <input type="radio" id="contactChoice2" @change="selectLight('direct')"
            name="light" value="">
            <label for="contactChoice2">Directional light</label>
                <div v-if="directionalParam" class="directionalParam">
                    <div class="LightColor">
                        <label class="LightColor">Цвет:</label>
                        <input type="color" name="color" class="LightColor" id="color2" @change="selectLightColor('direct', this.value)">
                    </div>
                    <div class="inputLightIntencity">
                        <label class="inputLightIntencity">Интенсивность:</label>
                        <input class="inputLightIntencity" id="directIntensity" value="1.0" type="text" @input="selectLightIntensity('direct')">
                    </div>
                </div>
            </div>
            <div class="thirElem">
            <input type="radio" id="contactChoice3" @change="selectLight('point')"
            name="light">
            <label for="contactChoice3">Point light</label>
            <div v-if="pointParam" class="leftCell">
                <div class="LightColor">
                    <label class="LightColor">Цвет:</label>
                        <input type="color" name="color" class="LightColor" id="color3" @change="selectLightColor('point', this.value)">
                    </div>
                    <div class="inputPointLight">
                        <label class="inputPointLight">Интенсивность:</label>
                        <input class="inputPointLight" id="pointLightIntencity" value="1" type="text" @input="selectLightIntensity('point', this.value)">
                    </div>
                    <div class="inputPointLight">
                        <label class="inputPointLight">Дистанция:</label>
                        <input class="inputPointLight" id="pointLightDistance" value="0.0" type="text" @input="pointLightDistance('point')">
                    </div>
                    <div class="inputPointLight">
                        <label class="inputPointLight">Распад:</label>
                        <input class="inputPointLight" id="pointLightDecay" value="1000" type="text" @input="pointLightDecay('point')">
                    </div>
                    <label class="inputPointLight">Координаты:</label>
                    <div class="inputPointCoord">
                        <label class="coord">X:</label>
                        <input class="coord" id="pointLightX" value="50" type="text" @input="pointLightCoord()">
                    </div>
                    <div class="inputPointCoord">
                        <label class="coord">Y:</label>
                        <input class="coord" id="pointLightY" value="50" type="text" @input="pointLightCoord()">
                    </div>
                    <div class="inputPointCoord">
                        <label class="coord">Z:</label>
                        <input class="coord" id="pointLightZ" value="50" type="text" @input="pointLightCoord()">
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import { setVarData, Userlight } from '@/components/Blocks/scripts/Three/Variables';
export default {
    data(){
        return{
            ambientParam: false,
            directionalParam: false,
            pointParam: false,
        }
    },
    methods:{
        pointLightCoord(){
            setVarData("pointLightCoord", {'x': document.getElementById('pointLightX').value, 'y': document.getElementById('pointLightY').value, 'z': document.getElementById('pointLightZ').value})  
            this.emitter.emit('Rerender', true)
        },
        pointLightDecay(type){
            setVarData("pointLightDecay", {"type":type,"pointLightDecay": document.getElementById('pointLightDecay').value})
            this.emitter.emit('Rerender', true)
        },
        pointLightDistance(type){
            setVarData("pointLightDistance", {"type":type,"pointLightDistance": document.getElementById('pointLightDistance').value})
            this.emitter.emit('Rerender', true)
        },
        selectLightIntensity(type){
            switch(type){
                case "ambient":
                    setVarData("LightIntensity", {"type":type,"intensity": document.getElementById('ambientIntensity').value})
                    this.emitter.emit('Rerender', true)
                    break;
                case "point":
                    setVarData("LightIntensity", {"type":type,"intensity": document.getElementById('pointLightIntencity').value})
                    this.emitter.emit('Rerender', true)
                    break;
                case "direct":
                    setVarData("LightIntensity", {"type":type, "intensity": document.getElementById('directIntensity').value})
                    this.emitter.emit('Rerender', true)
                    break;
            }
            
        },
        selectLightColor(type){
            switch(type){
                case('ambient'):
                setVarData("LightColor", {"type":type,"color": document.getElementById('color1').value})
                this.emitter.emit('Rerender', true)
                break;
                case('point'):
                setVarData("LightColor", {"type":type,"color": document.getElementById('color3').value})
                this.emitter.emit('Rerender', true)
                break;
                case('direct'):
                setVarData("LightColor", {"type":type,"color": document.getElementById('color2').value})
                this.emitter.emit('Rerender', true)
                break;
            }
        },
        selectLight(light){
            switch(light){
                case 'ambient':
                    this.directionalParam = false
                    this.pointParam = false
                    this.ambientParam = true
                    setTimeout(()=>{
                        document.getElementById("color1").value = Userlight['color']
                        document.getElementById("ambientIntensity").value = Userlight['intensity']
                    }, 0)
                    break;
                case 'direct':
                    this.directionalParam = true
                    this.pointParam = false
                    this.ambientParam = false
                    setTimeout(()=>{
                        document.getElementById("color2").value = Userlight['color']
                        document.getElementById("directIntensity").value = Userlight['intensity']
                    }, 0)
                    
                    break;
                case 'point':
                    this.directionalParam = false
                    this.pointParam = true
                    this.ambientParam = false
                    setTimeout(()=>{
                        document.getElementById("color3").value = Userlight['color']
                        document.getElementById("pointLightIntencity").value = Userlight['intensity']
                        document.getElementById("pointLightDistance").value = Userlight['distance']
                        document.getElementById("pointLightDecay").value = Userlight['decay']
                        document.getElementById("pointLightX").value = Userlight['x']
                        document.getElementById("pointLightY").value = Userlight['y']
                        document.getElementById("pointLightZ").value = Userlight['z']
                    }, 0)
                    break;
            }
            setVarData('ColorType', {"type":light})
            this.emitter.emit("Rerender", true)
        },
    }
}
</script>

<style>
div.inputLightIntencity, div.LightColor, .inputPointLight, .inputPointCootd{
    display: table;
    margin-top: 5pt;
}
input.inputLightIntencity, input.inputPointLight, input.inputLightIntencity{
    display: table-cell;
    float: left;
    width: 20%;
}
label.inputLightIntencity, label.LightColor, label.inputPointLight{
    display: table-cell;
    width: 50%;
}
 input.coord{
    display: table-cell;
    width: 30pt;
    left: 5pt;
 }
 label.coord{
    margin-left: 10pt;
    display: table-cell;
    float: left;
 }
</style>