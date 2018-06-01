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