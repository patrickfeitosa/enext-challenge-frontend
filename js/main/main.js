let onReady = function(){    
    const url = "http://localhost:3000/json/potions.json";
	fetch(url)
		.then(response => response.json()) // retorna uma promise
		.then(result => {

			//Transformando o result em um Array
			let potions = Object.keys(result.potions).map(key => result.potions[key])

			const target = document.querySelector('#content')
			target.innerHTML = loadContentOnDOM(potions)

			/*Realizando o loop por cada objeto do Array
			potions.forEach(potion =>{
				potion.ingredients.forEach(ingridient =>{
					console.log(ingridient)
				})
			})*/
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

/**
 * 
 * @param {array} object recebe o objeto com os dados para colocar na DOM 
 * @returns {HTMLElement}
 */
let loadContentOnDOM = function (object){
	let htmlContent = ''
	let i = 0
	object.forEach(obj =>{

		htmlContent += i % 3 === 0 ? 
		'<div class="grid-lg-3 grid-md-3 grid-sm-6 product-info">' : '<div class="grid-lg-3 grid-md-3 grid-sm-6 offset-1 product-info">'
			
		htmlContent+=
			'<div class="row">'+
				'<div class="grid-lg-12 grid-md-12 grid-sm-12 no-gutter">'+
					'<img src="img/products/' + obj.image + '" alt="'+ obj.name +'" class="img-product">'+
				'</div>'+
				'<div class="grid-lg-12 grid-md-12 grid-sm-12 price-info no-gutter">'+
					obj.name +' - <span class="price"> $' + obj.price +'</span>'+
				'</div>'+
			'</div>'+
		'</div>'

		i++
	})

	return htmlContent
}


/**
 * 
 * @param {HTMLElement} element Target que se realiza a troca de classe 
 * @param {string} className Classe que sera realizado a troca de acordo com a condição se tem ou não a classe
 */
let toggleClass = function(element, className){
	element.classList.toggle(className)
}


/**
 * 
 * @param {HTMLElement} targetClick Especifica qual botão é responsável pelo Menu mobile
 */
let enableMenu = function(targetClick){
	let menu = document.querySelector(targetClick)
	menu.classList.toggle('d-sm-none')

	let targets = document.querySelectorAll('.toggle-target')
	Array.from(targets).forEach(target => {
		toggleClass(target, 'd-sm-none')
	})
}


/** Responsável por habilitar o Lightbox na DOM */
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

/**
 * 
 * @param {number} id especifica qual objeto deve ser carregado no lightbox
 */
let openLightbox = function(id){
	let lightbox = document.querySelector('.lightbox')
	let closeButton = document.querySelector('.close-lightbox')

	lightbox.style.display = "block";
	closeButton.addEventListener('click', () =>{
		closeLightbox(lightbox)
	})
}


/**
 * 
 * @param {HTMLElement} container fecha o lightbox
 */
let closeLightbox = function(container){
	container.style.display = "none";
}