<template>
  <div class="container3">
    <hr>
        <label class="ForFile" @click="loadClick()">
            <span>{{btnTitle}}</span>
        </label>
        <input id="input" class="inputForFile" type="file" accept=".obj">
    </div>
</template>

<script>
import { setVarData } from "../../scripts/Three/Variables";
import objParser from "@/components/Blocks/scripts/Three/objParser.js"
import { emitter } from "@/main";
import {obj} from "@/components/Blocks/scripts/Three/objParser.js"
import {jsonVar} from "@/components/Blocks/scripts/Three/Variables"
import getCookie from '../../scripts/getCookie';
import { resetObj } from "@/components/Blocks/scripts/Three/objParser.js";
export default {
    props:{
        btnTitle: String
    },
    data(){
        return{
           
        }
    },
    methods:{
         loadClick(){
             if(this.btnTitle == 'Опубликовать'){
                if(getCookie('login')){
                    if(obj != null){
                        console.log(JSON.stringify(obj))
                        console.log(jsonVar())
                    }else{
                        alert("Загрузите модель")
                    }
                }
                else{
                    alert("Чтобы опубликовать модель авторизуйтесь в системе")
                }
             }
             else{
                resetObj()
                document.querySelector('.inputForFile').click()
                const inputElement = document.getElementById("input");
                inputElement.addEventListener("change", function (){
                let reader = new FileReader();
                reader.readAsText(inputElement.files[0])
                emitter.emit("OpenEditor", {modelNum: null})
                reader.onload = function(){
                objParser(reader.result)
                setVarData("modelNum", 3)
                emitter.emit("Rerender", true)
                }
            }, true);
             }
         }

    }
}
</script>

<style>

</style>