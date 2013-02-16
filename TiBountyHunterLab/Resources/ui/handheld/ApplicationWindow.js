function ApplicationWindow(/*Boolean*/ _captured) {
	
	
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'transparent',
		backgroundImage: 'images/grain.png',
		title: (_captured) ? L('captured') : L('fugitives'),
		barColor: '#6d0a0c',
		activity : {
			onCreateOptionsMenu: function(e){
				var menu = e.menu;
				var m1 = menu.add({
					title : L('add')
				});
				
				m1.addEventListener('click', function(e){
					//abrir en el tab group la ventana de agregar
				});
			}	
		}
	});
	
	
	
	return self;
	
};


module.exports = ApplicationWindow;