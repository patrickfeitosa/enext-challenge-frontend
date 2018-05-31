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
<<<<<<< HEAD
	btnMobile.addEventListener('click', () =>{
=======
	btnMobile.addEventListener('click', btn =>{
>>>>>>> 5e97851e7bd6602a24669571cfc93632ac935291
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
<<<<<<< HEAD
	let shippingInfo = document.querySelector('#shipping-id')
=======
>>>>>>> 5e97851e7bd6602a24669571cfc93632ac935291

	menu.classList.toggle('d-sm-none')
	searchBox.classList.toggle('d-sm-none')
	logo.classList.toggle('d-sm-none')
	bag.classList.toggle('d-sm-none')
<<<<<<< HEAD
	shippingInfo.classList.toggle('d-sm-none')
=======
>>>>>>> 5e97851e7bd6602a24669571cfc93632ac935291
}