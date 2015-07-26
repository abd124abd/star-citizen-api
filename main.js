$(document).ready( function() {
	$.getJSON('http://sc-api.com/?api_source=live&start_date=&end_date=&system=organizations&action=all_organizations&source=rsi&target_id=&start_page=1&end_page=1&items_per_page=100&sort_method=size&sort_direction=descending&expedite=1&location=redirect&format=pretty_json', function(obj) {
		var titles = {};
		$.each(obj.data, function() {
			$('ul').append(	
							"<li>Title: "+this['title']+" SID: "+this['sid']+"</li>"+
							"<li><img src="+this['logo']+"/></li>"+
							"<li>Archetype: "+this['archetype']+"</li>"+
							"<li>Language: "+this['lang']+"</li>"+
							"<li>Member Count: "+this['member_count']+"</li>"+
							"<li>Recruiting: "+this['recruiting']+"</li>"+
							"<br>"
			);
			console.log(this['title']);
		});
	});
});
