const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "jVZW7BYeeQY7Ci19fQYJOQ==3fnVTHfF4xeTnnxS"; 

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    const response =await fetch(apiURL, options)
    const data=await response.json()
    jokeEl.innerText = data[0].joke;
}
btnEl.addEventListener("click", getJoke)
