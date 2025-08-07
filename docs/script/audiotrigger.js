const player = document.querySelector("#audioplayer")
document.querySelectorAll(".audiotrigger").forEach((e) => {
	e.addEventListener("click", handler)
})

function handler({target}){
	player.src = target.dataset.src;
	player.play()
}
