$(document).ready(function() {
	
	var scale = 5;
	var data;
	
	
	$.getJSON('http://yesenin.github.io/z/all.json', function(data) {
		var list = []
		for(var i in data['rivalList']) {
			var item = data['rivalList'][i];
			var homeResults = [];
			var guestResults = [];
			for(var j in item['data']['scoresAB']) {
				var sp = j.split(':')
				
				var draw = win = lose = false;
				if (parseInt(sp[0]) > parseInt(sp[1])) {
					win = true;
				}
				else if (parseInt(sp[0]) < parseInt(sp[1])) {
					lose = true;
				}
				else {
					draw = true;
				}
				
				homeResults.push({'result': j, 'count': parseInt(item['data']['scoresAB'][j]), 'win': win, 'lose': lose, 'draw': draw})
			}
			
			for(var j in item['data']['scoresBA']) {
				var sp = j.split(':');
				
				var draw = win = lose = false;
				if (parseInt(sp[1]) > parseInt(sp[0])) {
					win = true;
				}
				else if (parseInt(sp[1]) < parseInt(sp[0])) {
					lose = true;
				}
				else {
					draw = true;
				}
				
				guestResults.push({'result': j, 'count': parseInt(item['data']['scoresBA'][j]), 'win': win, 'lose': lose, 'draw': draw});
			}
			
			list.push({
				rival: item['rival'],
				scored:item['data']['we'],
				scoredWidth: parseInt(item['data']['we']) * scale + 'px',
				conceded: item['data']['they'],
				concededWidth: parseInt(item['data']['they']) * scale + 'px',
				homeConceded: item['data']['theyGuest'],
				homeScored: item['data']['weHome'],
				theyGuestWidth: parseInt(item['data']['theyGuest']) * scale + 'px',
				weHometWidth: parseInt(item['data']['weHome']) * scale + 'px',
				guestConceded: item['data']['theyHome'],
				guestScored: item['data']['weGuest'],
				theyHomeWidth: parseInt(item['data']['theyHome']) * scale + 'px',
				weGuestWidth: parseInt(item['data']['weGuest']) * scale + 'px',
				homeResults: homeResults,
				guestResults: guestResults
			});
		}
		
		var viewModel = {
			rivalList: ko.observableArray(list)
		};
		ko.applyBindings(viewModel);
	});
	
});
