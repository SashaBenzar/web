$(function(){
	//Завдання 5.3
	// $('.top-nav li').each(function(){
	// 	$(this).mouseenter(function(){
	// 		$(this).addClass("svitlo");
	// 	});
	// 	$(this).mouseleave(function(){
	// 		$(this).removeClass("svitlo");
	// 	});
	// });
	//Завдання 5.4
	// $('.features-grids img').click(function(){
	// 	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	// });
	//Завдання 5.5
	// $('.features-grids img').click(function(){
	// 	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	// 	$(this).remove();
	// });
	//Завдання 5.6
	// $('.features-grids img').click(function(){
	// 	if($(this).attr('nomer')=="1")
	// 	{
	// 		$('.koshik-wrapper-items[nomer=1]').prepend($(this).clone());
	// 	}
	// 	else if($(this).attr('nomer')=="2")
	// 	{
	// 		$('.koshik-wrapper-items[nomer=2]').prepend($(this).clone());
	// 	}
	// 	else if($(this).attr('nomer')=="3")
	// 	{
	// 		$('.koshik-wrapper-items[nomer=3]').prepend($(this).clone());
	// 	}
	// 	else if($(this).attr('nomer')=="4")
	// 	{
	// 		$('.koshik-wrapper-items[nomer=4]').prepend($(this).clone());
	// 	}
	// 	$('.koshik-wrapper').addClass('full-koshik');
	// 	$(this).remove();
	// });
	//Завдання 5.7
	// var a=0;
	// var UAH=0;
	// $('.features-grids img').click(function(){
	// 	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	// 	a+=1;
	// 	UAH+=parseInt($(this).attr('price'));
	// 	$('.info').text("Всього " + a + " мотоциклів на суму " + UAH + " UAH");
	// });
	// $('.koshik-wrapper').on('click', 'img', function(){
	// 	$(this).remove();
	// 	a-=1;
	// 	UAH-=parseInt($(this).attr('price'));
	// 	$('.info').text("Всього " + a + " мотоциклів на суму " + UAH + " UAH");
	// });
});
