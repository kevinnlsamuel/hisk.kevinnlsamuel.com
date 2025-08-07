const eles = document.querySelectorAll('.nextifvalid')
eles.forEach((e) => {
	e.addEventListener('keyup',handler)
	e.addEventListener('keydown',bckspHandler)
})

function bckspHandler(event) {
	if (event.key === 'Backspace' && event.target.value === '') {
		return event.target.previousElementSibling?.focus()
	}
}
function handler(event) {
	if (/^[A-Za-zàÀéÉèÈùÙùôÔïÏâÂçÇ]{1}$/.test(event.key)) {
		if (event.target.checkValidity())
			return event.target.nextElementSibling?.focus() 
	}
}
