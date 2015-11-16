$(document).ready(function() {
	var viewModel = {
		rivalList: ko.observableArray()
	};
	var scale = 5;
	var data;
	$.getJSON('http://yesenin.github.io/z/all.json', function(data) {
		for(var i in data['rivalList']) {
			var item = data['rivalList'][i];
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
				homeResult: [],
				guestResult: []
			});
		}
	});

	ko.applyBindings(viewModel);
});
