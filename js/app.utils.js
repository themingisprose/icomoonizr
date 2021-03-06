/**
 * Icomoonizr
 *
 * @package			WordPress
 * @subpackage		Icomoonizr: Javascript
 * @author			RogerTM
 * @license			license.txt
 * @link			https://themingisprose.com/icon-pack
 * @since 			Icomoonizr 1.0
 */

jQuery(document).ready(function($) {
	// Icon Filter
	var icon = $('.icon-list .icon-wrapper');
	$('#icon-filter').keyup(function() {

	    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

	    icon.show().filter(function() {
	        var text = $(this).attr('data-icon').replace(/\s+/g, ' ').toLowerCase();
	        return !~text.indexOf(val);
	    }).hide();
	});

	// Icon details
	icon.click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var	data 	= $(this).attr('data-icon')
			name	= 'icomoon-'+data;

		$('#icon-details .demo-preview').html('<i class="icomoon '+name+'"></i>');
		$('#icon-details .demo-class').html('<span>Class:</span>'+name);
		$('#icon-details .demo-markup').html('<span>Markup:</span>&lt;i class="'+name+'"&gt;&lt;/i&gt;');
		$('#icon-details .demo-svg').html('<span>SVG:</span>&lt;img src="svg/'+data+'.svg"&gt;');
		$('#icon-details').fadeIn(200).removeClass('d-none');
	});

	// Close Details
	$('#close-details').click(function(e){
		e.preventDefault();
		$('.icon-wrapper.active').removeClass('active');
		$('#icon-details').fadeOut(200);
	});
	$('#icon-filter').keypress(function(){
		$('.icon-wrapper.active').removeClass('active');
		$('#icon-details').fadeOut(200);
	});
});
