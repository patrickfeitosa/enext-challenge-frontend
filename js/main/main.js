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
		});
}

if(document.readyState !== 'loading'){
    onReady()
} 

document.addEventListener('DOMContentLoaded', onReady )
