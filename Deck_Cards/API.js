

async function Clicou(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
    const resp = await fetch(url)
    
    if (resp.status === 200){
        let carta = document.getElementById("imagem")
        const obj = await resp.json()
        carta.src = obj.cards[0].image
    }

}

