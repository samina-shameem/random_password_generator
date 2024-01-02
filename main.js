const btnEl = document.querySelector(".btn");

const inputEl = document.getElementById("input");
const copyIconEl =document.querySelector("fa-copy");

btnEl.addEventListener("click",()=>{
    createPassword()
})

copyIconEl.addEventListener("click",() =>{

    copyPassword()
})

function createPassword(){
    const chars ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const passwordLength = 14;
    let password = ""
    for(let index =0; index < passwordLength; index++){
        const randomNum = Math.floor(Math.random ()* chars.length);
        password += chars.substring(randomNum, randomNum+1);
       // console.log(randomNum, password);
    }
    inputEl.value = password;
}
