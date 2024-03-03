const btnEl=document.getElementById("btn-el")
const divEl=document.getElementById("Pass1")
const divel=document.getElementById("Pass2")
const inputEl=document.getElementById("type")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



btnEl.addEventListener("click",function(){
    let password="  "
    let pass=" "
    let length = inputEl.value
  
       if(length<16){
    for(let i=1;i<=length;i++){
        
    password += characters[ Math.floor( Math.random()*characters.length)]
    pass += characters[ Math.floor( Math.random()*characters.length)]
   
    }
     divEl.textContent=password
     divel.textContent= pass
 
   }
     
    
})



    






