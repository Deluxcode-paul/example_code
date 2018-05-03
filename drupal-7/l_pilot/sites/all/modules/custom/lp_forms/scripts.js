function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}

function showPreview() {

	(function ($) {
		var code = decodeHtml($('#fcode').html());
		$('#pblock').show();
		$('#pblock').html(code);
	})(jQuery);
}

function _validateFormFields(data) {

	(function ($, data) {
		if (data) {
			$('#lp-forms-embedded-form').find('small').remove();
			$(data).each(function (i, item) {
				$('.form-item-' + item.key).addClass('has-error');
				$('#edit-' + item.key).next('small').remove();
				$('#edit-' + item.key).after('<small style="font-size:12px;color:red;text-align:left;display:block;margin-left:120px;">' + item.value + '</small>');
			});
		}
	})(jQuery, data);
}
