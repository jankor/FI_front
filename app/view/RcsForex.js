Ext.define('FI.view.RcsForex', {
    extend: 'FI.window.ChartWindow',		       
	//alias: 'widget.RcsForexChart',		
	requires: [
        'FI.store.charts.RcsForex',
		'FI.view.FlowChart'	
    ],				
			
	tbar: [
		{ xtype: 'textfield', name: 'rcsPeriod', value: '14', width: 35},
		{ xtype: 'button', text: 'Set', action: 'setRcsPeriod'},			
		{ xtype: 'tbfill'},
		{ xtype: 'button', text: 'M1', action: 'periodChange'},
		{ xtype: 'tbseparator' },
		{ xtype: 'button', text: 'M5', action: 'periodChange' },
		{ xtype: 'tbseparator' },
		{ xtype: 'button', text: 'M10', action: 'periodChange' },
		{ xtype: 'tbseparator' },
		{ xtype: 'button', text: 'M15', action: 'periodChange' },
		{ xtype: 'tbseparator' },
		{ xtype: 'button', text: 'M30', action: 'periodChange' },
		{ xtype: 'tbseparator' },
		{ xtype: 'button', text: 'M60', action: 'periodChange' }
		
	],	
	/*
	items: 
		{
        xtype: 'highstock',		
		
		store: 'FI.store.charts.RcsForex',		
		
		series : [{
          name : 'USDrcs',
          tooltip : {
            yDecimals : 2
          },
          xField : 'timestamp',
          yField : 'USDrcs'
        },{
          name : 'EURrcs',
          tooltip : {
            yDecimals : 2
          },
          xField : 'timestamp',
          yField : 'EURrcs'
        }],
		
		chartConfig : {
          chart : {
            marginLeft : 50,
            marginRight : 50
          },
         
          rangeSelector : {
            enabled: false
          },
          title : {
            text : 'AAPL Stock Price'
          }
        }
		
		
    }	          
	*/	
});
