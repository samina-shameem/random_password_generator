const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    createPassword()
})


function createPassword(){
    const chars ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const passwordLength = 14;
    let password = ""
    for(let index =0; index < passwordLength; index++){
        const randomNum = Math.random ()* chars.length;
    }
}