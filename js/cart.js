let cart = {}; //корзина

$.getJSON('goods.json', function(data){

	let goods = data; //все товары в масиве
	//console.log(goods);
	checkCart();
	//console.log(cart);
	showCart(); //вывожу товары на страницу

	function showCart(){
		let out = '';
		for (let key in cart){
			//out+= key + '---'+cart[key]+'<br>'; //выводим индексы и количество товаров
			out += '<button class="delete" data-art="'+key+'">x</button>';
			out += '<img src="'+goods[key].image+'" width="48">';
			out += goods[key].name;
			out += '<button class="minus" data-art="'+key+'">-</button>';
			out += cart[key];
			out += '<button class="plus" data-art="'+key+'">+</button>';
			out += cart[key]*goods[key].cost;
			out += '<br>';
		}
		$('#my-cart').html(out);
		$('.plus').on('click', plusGoods);
		$('.minus').on('click', minusGoods);
		$('.delete').on('click', deleteGoods);
	}
	function plusGoods(){
		let articul = $(this).attr('data-art');
		cart[articul]++;
		saveCartToLS(); //сохраняем корзину в LocalStorage
		showCart();
		}

	function minusGoods(){
		let articul = $(this).attr('data-art');
		if (cart[articul]>1) {
			cart[articul]--; 
		}
		else { 
			delete cart[articul];
		}
		saveCartToLS(); //сохраняем корзину в LocalStorage
		showCart();
		}

	function deleteGoods(){
		let articul = $(this).attr('data-art');
		delete cart[articul];
		saveCartToLS(); //сохраняем корзину в LocalStorage
		showCart();
		}		
});

function checkCart() {
	//проверяем наличие корзины в localStorage;
	//console.log ( localStorage.getItem('dddd') );
	if ( localStorage.getItem('cart') != null ) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}

function saveCartToLS(){
	localStorage.setItem('cart', JSON.stringify(cart) );
}
