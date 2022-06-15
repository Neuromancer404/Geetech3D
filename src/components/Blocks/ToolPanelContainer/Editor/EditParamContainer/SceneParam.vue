<template>
    <div class="SceneParamRoot">
        <p @click="openBlock('colors')" class="title">Смена цвета фона сцены</p>
        <div class="backColor" v-if="colorVisible">
            <scene-back-color></scene-back-color>
        </div>
        <p class="title" @click="openBlock('control')">Управление</p>
        <div v-if="controlVisible" class="control">
            <ModelControl></ModelControl>
        </div>
        <p @click="openBlock('light')" class="title">Настройка освещения</p>
        <div class="lightControl" v-if="lightVisible">
            <LightColorVue></LightColorVue>
        </div>
        <p @click="openBlock('model')" class="title">Настройки модели</p>
        <div class="lightControl" v-if="modelParamsVisible">
            <ModelParams></ModelParams>
        </div>
    </div>
</template>

<script>
import SceneBackColor from './SceneBackColor.vue';
import ModelControl from './ModelControl.vue';
import LightColorVue from './LightParams.vue';
import ModelParams from './ModelParams.vue';
export default{
  components: { SceneBackColor, ModelControl, LightColorVue, ModelParams },
    data(){
        return{
            rotation: false,
            colorVisible: false,
            controlVisible: false,
            lightVisible: false,
            modelParamsVisible: false
        }
    },
    methods:{
        openBlock(block){
            switch(block){
                case "colors":
                    this.controlVisible = false;
                    this.lightVisible = false;
                    this.colorVisible = !this.colorVisible
                    this.modelParamsVisible = false
                    break;
                case 'control':
                    this.colorVisible = false;
                    this.lightVisible = false;
                    this.modelParamsVisible = false
                    this.controlVisible = !this.controlVisible
                    break;
                case 'light':
                    this.colorVisible = false;
                    this.controlVisible = false;
                    this.modelParamsVisible = false
                    this.lightVisible = !this.lightVisible;
                    break;
                case 'model':
                    this.colorVisible = false;
                    this.controlVisible = false;
                    this.lightVisible = false;
                    this.modelParamsVisible = !this.modelParamsVisible 
                    break;
            }
        },         
    }
}
</script>

<style>
p.title{
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}
p.title:hover{
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}
.Scroll{
    align-items: center;
    display: flex;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: left;
}
.widget{
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: left;
}
.slider{
    cursor: ew-resize;
    overflow: hidden;
    touch-action: pan-y;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.fill{
    box-sizing: content-box;
    height: 100%;
    cursor: ew-resize;
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: left;
}
input .number{
    flex-shrink: 0;
    outline: none; 
    box-sizing: border-box;
    margin: 0;
    pointer-events: auto;
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: left;
}


.Osveshenie p{
    top: 5%;
    position: relative;
    margin-top: 0%;
    text-align: left;
}
.Osveshenie{
    position: relative;
    height: 15%;
}
.Osveshenie input{
    position: relative;
    float: left;
    margin: 0%;
    vertical-align: middle;
}
.Osveshenie label{
    position: relative;
    margin: 0%;
    padding-left: 10px;
}

.inputColor input{
    position: relative;
    margin-left: 3%;
}

.orbControl{
    position: relative;
    width: 100%;
}

.backColor p{
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}
.colorBar{
    width: 100%;
    margin-bottom: 5%;
}

label{
    font-family: 'Montserrat','sans-serif';
    font-size: 18px;
}
.control button{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;
    text-align: left;
}
.control button:hover{
    background-color: #B0E0E6;
}
#checkbox{
    position: relative;
    width: 5%;
    height: auto;
    
}
.colorBar button{
    position: relative;
    width: 25px;
    height: 25px;
    margin: 2%;
    float: left;
}

.colorBar button:hover{
    border-radius: 50%;
}

.FirstStorka{
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}
.SecondStroka{
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}

button.BtnGrey{
    
    background-color: grey;
    border: 1px solid #B0E0E6;
}
button.BtnRed{
    
    background-color: red;
    border: 1px solid #B0E0E6;
}
button.BtnWhite{
   
    background-color: white;
    border: 1px solid #B0E0E6;
}
button.BtnBlack{
   
    background-color: black;
    border: 1px solid #B0E0E6;
}
button.BtnBlue{
    
    background-color: blue;
    border: 1px solid #B0E0E6;
}
button.BtnYellow{
    
    background-color: yellow;
    border: 1px solid #B0E0E6;
}
button.BtnGreen{

    background-color: green;
    border: 1px solid #B0E0E6;
}
button.BtnOrange{
    
    background-color: orange;
    border: 1px solid #B0E0E6;
}
button.BtnTema{
  
    background-color: pink;
    border: 1px solid #B0E0E6;
}
button.BtnPurple{
  
    background-color: rebeccapurple;
    border: 1px solid #B0E0E6;
}
</style>