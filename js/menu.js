$(window).scroll(function(){
  var menu = $('header .navigation');
  var scrolltop = $(window).scrollTop();
  if(scrolltop >= 310) {
  	menu.css('display', 'block');
  } else {
  	menu.css('display', 'none');
  }
});

var botao = $('header .navigation button');

botao.click(function(){
	$('header .navigation ul').slideToggle(500).css('display', 'block');
});