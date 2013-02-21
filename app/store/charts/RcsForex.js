Ext.define('FI.store.charts.RcsForex', {
    extend: 'FI.store.charts.Rcs',	
	model: 'FI.model.charts.RcsForex',
	
	requires: [
        'FI.store.charts.Rcs'        
    ],
	
	period: 14,
	bufferSize: 100,		
	modelMap: [
		{sourceData: 'EURx', pos: 0.00000000, neg: 0.00000000, resultData: 'EURrcs'}, 
		{sourceData: 'USDx', pos: 0.00000000, neg: 0.00000000, resultData: 'USDrcs'},
		{sourceData: 'GBPx', pos: 0.00000000, neg: 0.00000000, resultData: 'GBPrcs'},
		{sourceData: 'AUDx', pos: 0.00000000, neg: 0.00000000, resultData: 'AUDrcs'},
		{sourceData: 'NZDx', pos: 0.00000000, neg: 0.00000000, resultData: 'NZDrcs'},
		{sourceData: 'CADx', pos: 0.00000000, neg: 0.00000000, resultData: 'CADrcs'},
		{sourceData: 'CHFx', pos: 0.00000000, neg: 0.00000000, resultData: 'CHFrcs'},
		{sourceData: 'JPYx', pos: 0.00000000, neg: 0.00000000, resultData: 'JPYrcs'}
	]		
	
});
