import errorHandler from "./errorHandler";
import { emitter } from "@/main";
export default async function(data, method = "POST"){
    try{
      console.log(data)
      let response = await fetch("/",{
          method: method,
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body:JSON.stringify(data)
      }
      );
      
      if (response.ok) {
        let json = await response.json();
        console.log(json);
        responseReader(json);
      } else {
        errorHandler("JSONgenerate", "", response.status);
      }      
    }
    catch(e){
        console.error(e)
    }
}

function responseReader(data){
  switch(data['access']){
    case true:
      console.log(data['biba'])
      emitter.emit("writeName", data['login'])
      document.cookie = encodeURIComponent('login') + '=' + encodeURIComponent(data['login']);
      break;
    default:
      alert("неизвестный ответ сервера")
      console.log(data)
      break;
  }
}


