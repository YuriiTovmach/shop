let cart = {}; //моя корзина
$('document').ready(function(){
	loadGoos();
	checkCart();
	showMiniCart();

});

function loadGoos(){
	//загружаю товары на страницу
	$.getJSON('goods.json', function(data){
		
		let out = '';
		for ( let key in data) {
			out+='<div class="single-goods">';
			out+='<h3>'+data[key] ['name']+'</h3>';
			out+='<img src="'+data[key].image+'">';
			out+='<p>Цена: '+data[key] ['cost']+'</p>';
			out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
			out+='</div>';
		}
	$('#goods').html(out);
	$('button.add-to-cart').on('click', addToCart);
	});
}

function addToCart(){
		//добавляем товар в корзину
		let articul = $(this).attr('data-art');
		if (cart[articul]!=undefined) {
			cart[articul]++;
		}
		else {
			cart[articul] = 1;
		}
		                               //масив с которым рабатоем который преобразовуем в строку для локал сторидж
		localStorage.setItem('cart', JSON.stringify(cart) );
	//console.log(cart);
	showMiniCart();

}

function checkCart() {
	//проверяем наличие корзины в localStorage;
	//console.log ( localStorage.getItem('dddd') );
	if ( localStorage.getItem('cart') != null ) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}

function showMiniCart() {
	//показываю содержимое корзины

	let out = '';
	for (let w in cart){
		out += w + ' --- '+cart[w]+'<br>';
	}
	$('#mini-cart').html(out);
}