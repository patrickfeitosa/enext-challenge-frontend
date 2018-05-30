'use strict';

var onReady = function onReady() {
	var url = "http://localhost:3000/json/potions.json";
	fetch(url).then(function (response) {
		return response.json();
	}) // retorna uma promise
	.then(function (result) {
		console.log(result);
	}).catch(function (err) {
		// trata se alguma das promises falhar
		console.error('Erro ao recuperar os dados do JSON', err);
	});

	var btnMobile = document.querySelector('#mobile-btn');
	btnMobile.addEventListener('click', function (btn) {
		enableMenu('.menu');
	});
};

if (document.readyState !== 'loading') {
	onReady();
}

document.addEventListener('DOMContentLoaded', onReady);

var enableMenu = function enableMenu(targetClick) {
	var menu = document.querySelector(targetClick);
	var searchBox = document.querySelector('#search-box');
	var logo = document.querySelector('.logo');
	var bag = document.querySelector('.bag-info');

	menu.classList.toggle('d-sm-none');
	searchBox.classList.toggle('d-sm-none');
	logo.classList.toggle('d-sm-none');
	bag.classList.toggle('d-sm-none');
};