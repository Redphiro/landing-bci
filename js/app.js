$(document).ready(function(){

	// Utilidad para poner las imagenes de fondo
	$('*[data-image]').each(function(){
		
		var image = $(this).data('image');
		var pos = $(this).data('pos');
		var size = $(this).data('size');
		
		$(this).css('background-image', 'url('+image+')');
		$(this).css('background-position', pos);
		$(this).css('background-size', size);
		
	});
});