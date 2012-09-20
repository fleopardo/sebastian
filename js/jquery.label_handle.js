(function($){
	
	$.fn.labelHandle = function (params) {
		/*var params = $.extend({
			param : 'value',
		}, params);*/
		element = new Array();
		label = new Array();
		this.each(function(i, item){
			element[i] = $(this);
			label[i] = $('label[for="' + element[i].attr('id') + '"]')
			label[i].hide();
			if (element[i].val() == '') {
				element[i].val(label[i].text());
			}
			if (element[i].is(':password')) {
				$('<input type="text" />').insertAfter(element[i]);
				element[i].hide();
			}
			element[i].focus(function(){
				if (element[i].val() == label[i].text()) {
					element[i].val('');
				}
			}).blur(function(){
				if (element[i].val() == '') {
					element[i].val(label[i].text());
				}
			});
		});
	}
	
})(jQuery);
