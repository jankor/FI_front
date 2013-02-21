Ext.define('FI.view.charts.RcsForex', {
    extend: 'FI.view.charts.Rcs',			
	//sourceStore: {},
	//store: 'FI.store.charts.RcsForex',
	
	modelMap: [
		{sourceData: 'EURx', pos: 0.00000000, neg: 0.00000000, resultData: 'EURrcs'}, 
		{sourceData: 'USDx', pos: 0.00000000, neg: 0.00000000, resultData: 'USDrcs'},
		{sourceData: 'GBPx', pos: 0.00000000, neg: 0.00000000, resultData: 'GBPrcs'},
		{sourceData: 'AUDx', pos: 0.00000000, neg: 0.00000000, resultData: 'AUDrcs'},
		{sourceData: 'NZDx', pos: 0.00000000, neg: 0.00000000, resultData: 'NZDrcs'},
		{sourceData: 'CADx', pos: 0.00000000, neg: 0.00000000, resultData: 'CADrcs'},
		{sourceData: 'CHFx', pos: 0.00000000, neg: 0.00000000, resultData: 'CHFrcs'},
		{sourceData: 'JPYx', pos: 0.00000000, neg: 0.00000000, resultData: 'JPYrcs'}
	],			
	
	storeMapper :
		{
			USD: {		  		           
				x : 'timestamp',
				y : 'USDrcs'
			},			
			EUR: {          
				x : 'timestamp',
				y : 'EURrcs'
			},	
			JPY: {          
				x : 'timestamp',
				y : 'JPYrcs'
			},	
			CHF: {			
				x : 'timestamp',
				y : 'CHFrcs'
			},	
			AUD: {			
				x : 'timestamp',
				y : 'AUDrcs'
			},	
			GBP: {          
				x : 'timestamp',
				y : 'GBPrcs'
			}	
        },
		
	height : 300,
    width : 300,
	chartConfig : {
		series : [{
			  name : 'USD',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
			},{
			  name : 'EUR',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
			},{
			  name : 'JPY',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
			},{
			  name : 'CHF',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
			},{
			  name : 'AUD',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
			},{
			  name : 'GBP',
			  data : [],
			  tooltip: {
					valueDecimals: 2
				}
		}],	
		
	  chart : {
		marginLeft : 10,
		marginRight : 40
	  },
	 
	  rangeSelector : {
		enabled: false
	  }	  
	}			
		
});
