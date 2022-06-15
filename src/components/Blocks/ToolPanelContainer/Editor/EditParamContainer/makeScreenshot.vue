<template>
  <div class="mkScrRoot">
    <button class="MenuBtn" @click="makeScreenshot()">Сделать скриншот</button>
  </div>
</template>

<script>
import { setVarData } from '@/components/Blocks/scripts/Three/Variables';
export default {
    methods:{
        makeScreenshot(){
          setVarData("makeScreenshot", true)
          this.emitter.emit("Rerender", true)
          const canvas = document.getElementById('canvas')
          canvas.toBlob((blob) => {
          saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
          setVarData("makeScreenshot", false)
  })
    }
}}
const saveBlob = (function() {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  return function saveData(blob, fileName) {
     const url = window.URL.createObjectURL(blob);
     a.href = url;
     a.download = fileName;
     a.click();
  };
}());
</script>

<style>
button.MenuBtn{
  background: #7D7D7D;
  border-radius: 10px;
  margin-left: 10%;
  color: #FFFFFF;
}
button.MenuBtn:hover{
  cursor: pointer;
}
</style>