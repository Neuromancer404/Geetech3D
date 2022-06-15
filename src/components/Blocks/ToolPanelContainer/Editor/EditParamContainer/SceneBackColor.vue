<template>
  <div class="colorBar">
                <a>Выберите цвет:</a>
                <div class="FirstStorka">
                    <button class="BtnWhite" id="white" @click="changeColor('#FFFFFF')"></button>
                    <button class="BtnBlue" id="blue" @click="changeColor('#0000FF')"></button>
                    <button class="BtnRed" id="red" @click="changeColor('#FF0000')"></button>
                    <button class="BtnGrey" id="grey" @click="changeColor('#808080')"></button>
                    <button class="BtnBlack" id="black" @click="changeColor('#000000')"></button>
                </div>
                <div class="SecondStroka">
                    <div class="defaultColor"></div>
                    <button class="BtnYellow" id="yellow" @click="changeColor('#FFFF00')"></button>
                    <button class="BtnGreen" id="green" @click="changeColor('#008000')"></button>
                    <button class="BtnPurple" id="purple" @click="changeColor('#800080')"></button>
                    <button class="BtnOrange" id="orange" @click="changeColor('#FFA500')"></button>
                    <button class="BtnTema" id="pink" @click="changeColor('#FFC0CB')"></button>
                </div>
                <div class="inputColor">
                        <a>Палитра:</a>
                        <input type="color" id="color" value="#000000" @change="Changed(this.value)">
                    </div>
            </div>
</template>

<script>
import { setVarData } from '@/components/Blocks/scripts/Three/Variables';
export default {
    methods:{
        changeColor(color){
            try{
                setVarData("color", color)
                document.getElementById('color').value = color;
                this.emitter.emit("Rerender", true);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
            },

        Changed(color){
            try{
                color = document.getElementById('color').value;
                setVarData("color", color)
                this.emitter.emit("Rerender", true);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
        },
    }
}
</script>

<style>

</style>