<template>
  <div class="orbControl">
            <input 
                type="checkbox" 
                id="checkbox" 
                v-model="checked" 
                :value="checkboxVal"
                :checked="booleanValue"
                @input="orbContChecked(!checked)"
            >
            <label for="checkbox">Включить orbit control</label>
            </div>
            <div class="rotate" v-if="checked">
                <button @click="rotateOn()">Auto rotate</button>
            </div>
            <div class="fullScreenButt" id="fullScreenButt">
                <button @click="fullScreen()">Открыть на весь экран</button>
            </div>
            <div class="setka" id="setka" >
                <button @click="AddSetka()">Добавить сетку</button>
            </div>
</template>

<script>
import { setVarData } from '@/components/Blocks/scripts/Three/Variables'
export default {
    data(){
        return{
            checked: false,
        }
    },
    methods:{
        orbContChecked(orbValue){
            try{
                setVarData("orbValue", orbValue)
                this.emitter.emit("Rerender", true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'orbContChecked', 'ext':e})
            }
        },
        fullScreen(){
            try{
                this.emitter.emit('FullScreenCanvas', true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})
            }
        },
        rotateOn(){
            try{
                this.rotation = !this.rotation
                setVarData("autoRotate", this.rotation)
                this.emitter.emit("Rerender", true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'rotateOn', 'ext': e})
            }
        },
        AddSetka(){
            try{
                this.setka = !this.setka
                setVarData("AddSetka", this.setka)
                this.emitter.emit("Rerender", true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'AddSetka', 'ext': e})
            }
        }

    }
}
</script>

<style>

</style>