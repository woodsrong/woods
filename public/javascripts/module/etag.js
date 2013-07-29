/**
 * @module
 * @author woodsrong
 * @date 13-6-29
 */
var seed = Math.random();
var url = '/etag/getinfo' + '?v=' + seed;
 
$.ajax({
	url: url,
	success: function(data, status, xhr){
		console.log('xhr', xhr);
		console.log('page ready');
		$('#btn').click(function(){
			$.ajax({
				url: url,
				success: function(res, status, xhr){
					console.log('xhr', xhr);
					if(res && res.msg){
                        var etag, oldETag;
                        try{
                            etag = xhr.getResponseHeader('ETag');
                            oldETag = xhr.getResponseHeader('OETag');
                        } catch(ex){
                            etag = 'not exits';
                            oldETag = 'not exits';
                        }
                        
                        var msg = [
                            'support!',
                            'nowETag:' + etag, 
                            'oldETag:' + oldETag, 
                            'msg:'+res.msg
                        ].join('; ');
                        
                        
						$('#output').append('<p>'+msg+'</p>').css('color', 'green');
					}
					else {
						$('#output').html('not support!').css('color', 'red');
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
	});
});