const getCharacter = async ()=> new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            characterName: "Luke Skywalker",
            id:1
        })
    })
})

const favoriteCharacter = async()=>{
    const faveCharacter = getCharacter();
    console.log('Before', faveCharacter);
    const character = await faveCharacter;
    console.log('value', character);
    console.log('After', faveCharacter)
}

favoriteCharacter();