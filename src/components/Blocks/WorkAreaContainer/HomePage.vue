<template>
    <div class="HomeWorkArea">
        <h1>Загрузите свою первую модель</h1>
        <button>(Виды поддерживаемых форматов)</button>
        <nav class="navb">
            <p>примеры моделей:</p>
            <ul>
                <li><a class="Primer1" @click="ModelNum(0)">Сфера</a></li>
                <li><a class="Primer2" @click="ModelNum(1)">Куб</a></li>
                <li><a class="Primer3" @click="ModelNum(2)">Торический узел</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { setVarData } from '../scripts/Three/Variables';
import { resetObj } from '../scripts/Three/objParser';
export default {
    data(){
      return{

      }
    },
    methods:{
      ModelNum(num){
          resetObj()
          setVarData("modelNum", num)
          this.emitter.emit("OpenEditor", {modelNum: num});
      }
    },
}

</script>

<style>
.HomeWorkArea{
    align-content: center;
    margin-top: 20%;
    text-align: center;
}

.navb li{
    display: inline;
}

h1{
    position: relative;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 0;
}

button{
    position: relative;
    border: none;
    background: #FFFFFF;
    font-family: 'Montserrat';
    font-size: 18px;
}

p{
    text-decoration: none;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 0;
}
ul{
    padding: 0px;
    margin: 0;
}

.navb a{
    color: black;
    text-align: center;
    text-decoration: none;
    padding: 5px 10px;
    font-family: 'Montserrat';
    font-size: 18px;
    border-right: 1px solid black;
}
.navb a.last{
    border-right: none;
}
.navb a:hover{
    cursor: pointer;
}

</style>