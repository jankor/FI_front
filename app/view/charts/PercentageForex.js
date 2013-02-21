Ext.define('FI.view.charts.PercentageForex', {    
	extend: 'Chart.ux.HighStock',
						
		storeMapper :
		{
			USD: {		  		           
				x : 'timestamp',
				y : 'USDx'
			},			
			EUR: {          
				x : 'timestamp',
				y : 'EURx'
			},	
			JPY: {          
				x : 'timestamp',
				y : 'JPYx'
			},	
			CHF: {			
				x : 'timestamp',
				y : 'CHFx'
			},	
			AUD: {			
				x : 'timestamp',
				y : 'AUDx'
			},	
			GBP: {          
				x : 'timestamp',
				y : 'GBPx'
			}	
        },
		
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
            marginRight : 50
          },
         yAxis : {
          labels : {
            formatter : function() {
              return (this.value > 0 ? '+' : '') + this.value + '%';
            }

          },
          plotLines : [{
            value : 0,
            width : 2,
            color : 'silver'
          }]
        },
        plotOptions : {
          series : {
            compare : 'percent'
          }
        },
		 
          rangeSelector : {
            enabled: false
          }         
        }
})