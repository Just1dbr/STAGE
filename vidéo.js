const vidéo=document.querySelector("video")
const chiffre=Math.floor(Math.random()*3)
const source=document.createElement("source")
source.type="video/mp4"
source.src=chiffre+".mp4"
vidéo.appendChild(source)
function chargervidéo(){
    const chiffre=Math.floor(Math.random()*3)
    const vidéo=document.querySelector("video")
    vidéo.src=chiffre+".mp4"
}
document.querySelector("button").addEventListener("click", chargervidéo)
