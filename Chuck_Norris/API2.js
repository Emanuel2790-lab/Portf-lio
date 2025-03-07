const url = "https://api.chucknorris.io/jokes/random"


async function Clicar(){
    try{
        const resposta = await fetch(url)

        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.ok}`)
        }

        const obj = await resposta.json()
        const texto = document.getElementById("texto")
        texto.innerHTML = obj.value


    } catch(erro){
        console.log(erro)
        alert("Ocorreu um erro")
    }
    
}





// async function Clicar(){
//     const resposta = await fetch(url)

//     if (resposta.status === 200){
//         const text = document.getElementById("texto")
//         const obj = await resposta.json()
//         text.innerHTML = obj.value
//     }
// }