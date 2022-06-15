<template>
  <div class="mpRoot">
    <div class="LightColor">
        <label class="LightColor">Цвет текстуры:</label>
        <input type="color" name="color" class="LightColor" :value="modelcolor" id="modelcolor" @change="selectModelColor('ambient')">
    </div>
    <div class="LightColor" v-if="modelType">
        <label>Тип материала:</label>
        <form>
            <div class="materialBox">
                <label class="materialBox">Standart material: </label>
                <input class="materialBox" type="radio" name="material" checked @change="rbmChecked(0)">
            </div>
            <div v-if="standartMaterial" class="materalParam">
                <div class="materialBox">
                    <label class="materialBox">Alpha: </label>
                    <input class="materialBox" type="checkbox" name="material" @change="rbmChecked()">
                </div>
            </div>
            <div class="materialBox">
                <label class="materialBox">Basic: </label>
                <input class="materialBox" name="material" type="radio" @change="rbmChecked(1)">
            </div>
            <div v-if="basicMaterial" class="materalParam">
                <p>Параметры</p>
            </div>
            <div class="materialBox">
                <label class="materialBox">Lambert: </label>
                <input class="materialBox" name="material" type="radio" @change="rbmChecked(2)">
            </div>
            <div v-if="lambertMaterial" class="materalParam">
                <p>Параметры</p>
            </div>
        </form>
    </div>
    <div class="LightColor">
        <makeScreenshot></makeScreenshot>
    </div>
  </div>
</template>

<script>
import { setVarData } from '@/components/Blocks/scripts/Three/Variables'
import { modelColor } from '@/components/Blocks/scripts/Three/Variables'
import makeScreenshot from './makeScreenshot.vue'
import {usingModel} from '@/components/Blocks/scripts/Three/Loader.js'
export default {
    components:{
        makeScreenshot
    },
    data(){
        return{
            modelcolor: null,
            standartMaterial: true,
            basicMaterial: false,
            lambertMaterial: false,
            modelType: false
        }
    },
    methods:{
        selectModelColor(){
            setVarData("modelColor", document.getElementById('modelcolor').value)
            this.emitter.emit("Rerender", true)
        },
        rbmChecked(value){
            switch(value){
                case 0:
                    this.standartMaterial = true;
                    this.basicMaterial = false;
                    this.lambertMaterial = false
                    setVarData("material", "MeshStandardMaterial")
                    this.emitter.emit("Rerender", true)
                    break;
                case 1:
                    this.standartMaterial=false;
                    this.basicMaterial = true;
                    this.lambertMaterial = false
                    setVarData("material", "MeshBasicMaterial")
                    this.emitter.emit("Rerender", true)
                    break;
                case 2:
                    this.standartMaterial=false;
                    this.basicMaterial = false;
                    this.lambertMaterial = true
                    setVarData("material", "MeshLambertMaterial")
                    this.emitter.emit("Rerender", true)
            }
        }
    },
    created(){
        this.modelcolor = modelColor
        if(usingModel == 'user'){
            this.modelType = true
        }
    },
    beforeMount(){
        this.modelcolor = modelColor
    }
}
</script>

<style>
input#modelcolor{
    margin-left: 5pt;
}
div.materialBox{
    display: table;
}
label.materialBox{
    display: table-cell;
}
input.materialBox{
    display: table-cell;
}
div.materalParam{
    margin-left: 10%;
}
</style>