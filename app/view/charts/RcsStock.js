Ext.define('FI.view.charts.RcsStock', {
    extend: 'FI.view.charts.Rcs',			
	//sourceStore: {},
	//store: 'FI.store.charts.RcsForex',
	
	modelMap: [
		{sourceData: 'EURsx', pos: 0.00000000, neg: 0.00000000, resultData: 'EURrcs'}, 
		{sourceData: 'USDsx', pos: 0.00000000, neg: 0.00000000, resultData: 'USDrcs'},
		{sourceData: 'GBPsx', pos: 0.00000000, neg: 0.00000000, resultData: 'GBPrcs'},
		{sourceData: 'AUDsx', pos: 0.00000000, neg: 0.00000000, resultData: 'AUDrcs'},		
		{sourceData: 'JPYsx', pos: 0.00000000, neg: 0.00000000, resultData: 'JPYrcs'}
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
