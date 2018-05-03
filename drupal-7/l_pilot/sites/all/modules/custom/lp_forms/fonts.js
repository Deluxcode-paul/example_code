function _setFont(obj) {
	(function ($) {

		$('#edit-field-form-font-und-0-value').val($(obj).val());

	}
	(jQuery));
}

jQuery(document).ready(function ($) {

	$.get('/fonts-list', {}, function (data) {
		$('#font_area').html(data);
		var sfont = $('#edit-field-form-font-und-0-value').val();
		$('#select_font').val(sfont);
	}, 'html');

	$('#edit-field-form-font').hide();

});
