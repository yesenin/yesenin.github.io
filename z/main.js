$(document).ready(function() {
	var viewModel = {
		rivalList: ko.observableArray()
	};
	var scale = 5;
	var data;
	
	
	$.getJSON('http://yesenin.github.io/z/all.json', function(data) {
		for(var i in data['rivalList']) {
			var item = data['rivalList'][i];
			var foo = []
			var j;
			for(j in item['data']['scoresAB']) {
				var temp = {'result': j, 'count': parseInt(item['data']['scoresAB'][j])};
				foo.push(temp)
			}
			
			for(j in item['data']['scoresBA']) {
				var sp = j.split(':')
				var r = sp[1] + ':' + sp[0];
				var exist = false;
				var count = parseInt(item['data']['scoresBA'][j]);
				for (var k in foo) {
					if (foo[k]['result'] == r) {
						foo[k]['count'] += count;
						exist = true;
					}
				}
				if (!exist) {
					var temp = {'result': r, 'count': count};
					foo.push(temp);
				}
			}
			
			viewModel.rivalList.push({
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
				results: ko.observableArray(foo)
			});
		}
	});

	ko.applyBindings(viewModel);
});
