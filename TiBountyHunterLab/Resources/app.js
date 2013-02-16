




(function(){

	//determinar la plataforma y altura y ancho del dispositivo
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
		

	Ti.API.info('Welcome to TiBountyHunter for '+ osname);
	
	//considerar tabletas
	var isTablet = osname == 'ipad' || (osname === 'android' 
			&& (width > 899 || height > 899));
	
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup().open();
	
	
})();
