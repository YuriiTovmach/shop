$('document').ready(function(){
	loadGoos();
});

function loadGoos(){
	//загружаю товары на страницу
	$.getJSON('goods.json', function(data){
		
		var out = '';
		for ( var key in data) {
			out+='<div class="single-goods">';
			out+='<h3>'+data[key] ['name']+'</h3>';
			out+='<img src="'+data[key].image+'">';
			out+='<p>Цена: '+data[key] ['cost']+" грн"+'</p>';
			out+='<button>Купить</button>';
			out+='</div>';
		//console.log(data);
		}

		$('#goods').html(out);

	});
}