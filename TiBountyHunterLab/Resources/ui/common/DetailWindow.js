


var DetailWindow = function(_bounty, containingTab){
	
	var db = require('lib/db');
	
	var win = Ti.UI.createWindow({
		title: _bounty.title,
		barColor :  '#6d0a0c',
		backgroundColor: 'transparent',
		backgroundImage: '/images/grain.png',
		layout: 'vertical' 
	});
	
	win.add(Ti.UI.createLabel({
		text: (_bounty.captured) ? L('busted') : L('still_at_large'),
		top:10,
		textAlign: 'center',
		font: {
			fontWeight: 'bold',
			fontSize: 18
		},
		color: '#fff',
		height: Ti.UI.SIZE
		
	}));
	
	return win;
	
};


module.exports = DetailWindow;
