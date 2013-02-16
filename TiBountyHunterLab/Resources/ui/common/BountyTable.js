




var BountyTableView = function(_captured){
	
	var db = require('lib/db');
	
	var tv = Ti.UI.createTableView({
		backgroundColor: 'transparent'
		
	});
	
	function populateData(){
		var results = db.list(_captured);
		tv.setData(results);
	}
	
	Ti.App.addEventListener('databaseUpdated', populateData);
	
	//ejecutar el query
	populateData();
	
	return tv;
	
	
};


module.exports = BountyTableView;
