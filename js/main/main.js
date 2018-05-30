let onReady = function(){    
    const url = "http://localhost:3000/json/potions.json";
	fetch(url)
		.then(response => response.json()) // retorna uma promise
		.then(result => {
			console.log(result)
		})
		.catch(err => {
			// trata se alguma das promises falhar
			console.error('Erro ao recuperar os dados do JSON', err);
		})

	let btnMobile = document.querySelector('#mobile-btn')
	btnMobile.addEventListener('click', btn =>{
		enableMenu('.menu')
	})
}

if(document.readyState !== 'loading'){
	onReady()

} 

document.addEventListener('DOMContentLoaded', onReady )

let enableMenu = function(targetClick){
	let menu = document.querySelector(targetClick)
	let searchBox = document.querySelector('#search-box')
	let logo = document.querySelector('.logo')
	let bag = document.querySelector('.bag-info')

	menu.classList.toggle('d-sm-none')
	searchBox.classList.toggle('d-sm-none')
	logo.classList.toggle('d-sm-none')
	bag.classList.toggle('d-sm-none')
}