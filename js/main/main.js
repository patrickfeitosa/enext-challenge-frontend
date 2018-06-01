let onReady = function(){    
    const url = "http://localhost:3000/json/potions.json";
	fetch(url)
		.then(response => response.json()) // retorna uma promise
		.then(result => {
			console.log(result.potions.length)		
		})
		.catch(err => {
			// trata se alguma das promises falhar
			console.error('Erro ao recuperar os dados do JSON', err);
		})

	let btnMobile = document.querySelector('#mobile-btn')
	btnMobile.addEventListener('click', (e) =>{
		enableMenu('.menu')
		toggleClass(btnMobile, 'active')
	})

	enableClickLightbox()
}

if(document.readyState !== 'loading'){
	onReady()
} 

document.addEventListener('DOMContentLoaded', onReady )

//DOM Functions

let toggleClass = function(element, className){
	element.classList.toggle(className)
}

let enableMenu = function(targetClick){
	let menu = document.querySelector(targetClick)
	menu.classList.toggle('d-sm-none')

	let targets = document.querySelectorAll('.toggle-target')
	Array.from(targets).forEach(target => {
		toggleClass(target, 'd-sm-none')
	})
}

let enableClickLightbox = function (){	
	let images = document.querySelectorAll('.img-product')
	Array.from(images).forEach(image =>{
		let idPotion = 2

		image.style.cursor = 'pointer'
		image.setAttribute('id', 'teste')
		image.addEventListener('click', img =>{
			openLightbox(idPotion)
		})
	})
}

let openLightbox = function(id){
	let lightbox = document.querySelector('.lightbox')
	let closeButton = document.querySelector('.close-lightbox')

	lightbox.style.display = "block";
	closeButton.addEventListener('click', () =>{
		closeLightbox(lightbox)
	})
}

let closeLightbox = function(container){
	container.style.display = "none";
}