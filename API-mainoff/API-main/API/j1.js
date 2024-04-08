function fetchStarWars3() {
    return fetch(
        'https://hp-api.lainocs.fr/characters/harry-potter'
         )





.then((response) => response.json())
}
  
async function displayStarWrs3() {
const data = await fetchStarWars3()

document.getElementById("star-wars-3").innerHTML = `
    <h1>${data.name}</H1>
    <h1>${data.eyes}</H1>
    <h1>${data.hairs}</H1>
    <h1>${data.birthday}</H1>
    <h1>${data.blood}</H1>
    <h1>${data.wand}</H1>
    <h1>${data.patronus}</H1>
    <h1>${data.role}</H1>
    <h1>${data.house}</H1>
    <img src="${data.image}" alt="${
        data.title}" />
`
    }
displayStarWrs3()