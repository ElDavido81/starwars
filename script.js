const output = document.querySelector('.answer')
const button = document.querySelector('#get-info')
button.addEventListener('click', getInfo)

async function getInfo() {
    const input = document.querySelector('#question')
    const question = input.value
    console.log(question)
    const infoUrl = `https://swapi.dev/api/people/?search=${question}`
    console.log(infoUrl)
    
    const response = await fetch(infoUrl)
    const data = await response.json()
    
    
let names=""

for (let i=0; i < data.results.length; i++) {
    if (names) {
        names += '\n' + data.results[i].name;
      } else {
        names = data.results[i].name;
      }
    }
    output.innerText = names;
}