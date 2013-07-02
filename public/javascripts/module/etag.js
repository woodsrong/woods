/**
 * @module
 * @author woodsrong
 * @date 13-6-29
 */

$.ajax({
	url: '/etag/getinfo',
	success: function(data, status, xhr){
		console.log('xhr', xhr);
		console.log('page ready');
		$('#btn').click(function(){
			$.ajax({
				url: '/etag/getinfo',
				success: function(res, status, xhr){
					console.log('xhr', xhr);
					if(res && res.msg && res.msg == 'support'){
						$('#output').html('support!').css('color', 'red');
					}
					else {
						$('#output').html('support!').css('color', 'red');
					}
				},
				error: function(){
					console.log(arguments);
				}
			});

		});
	},
	error: function(){
		console.log(arguments);
	}
});

$('#btnClear').click(function(){
	$.ajax({
		url: '/etag/clear',
		dataType: 'text'
	})
});