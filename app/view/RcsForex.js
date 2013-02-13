Ext.define('FI.view.RcsForex', {
    extend: 'FI.window.ChartWindow',		       
	//alias: 'widget.RcsForexChart',		
	requires: [
        'FI.store.charts.RcsForex',
		'FI.view.FlowChart'	
    ],				
	
	updateData: function ( store ) {
			var me = this;
			
			var chart = me.down('chart');
			chart.store.updateCalc(store);		
	},
		
			tbar: [
				{ xtype: 'textfield', name: 'period', value: '14', width: 40},
				{ xtype: 'button', text: 'Set' },
				{ xtype: 'tbseparator' },
					{
						xtype: 'splitbutton',
						text : 'Pairs: ',
						menu: new Ext.menu.Menu({
						items: [
							// these will render as dropdown menu items when the arrow is clicked:
							{text: 'Item 1', handler: function(){ alert("Item 1 clicked"); }},
							{text: 'Item 2', handler: function(){ alert("Item 2 clicked"); }}
						]
					})
				},
				{ xtype: 'tbfill'},
				{ xtype: 'button', text: 'M1' },
				{ xtype: 'tbseparator' },
				{ xtype: 'button', text: 'M5' },
				{ xtype: 'tbseparator' },
				{ xtype: 'button', text: 'M10' },
				{ xtype: 'tbseparator' },
				{ xtype: 'button', text: 'M15' },
				{ xtype: 'tbseparator' },
				{ xtype: 'button', text: 'M30' },
				{ xtype: 'tbseparator' },
				{ xtype: 'button', text: 'M60' }
				
	],	
	
	items: 
		{
        xtype: 'flowChart',		
		
		store: Ext.create('FI.store.charts.RcsForex'),		
		
		series:[
			{
				type: 'line',
				showMarkers: false,
				highlight: true,
				xField: 'time',
				yField: 'USDrcs',
				tips: {
				  trackMouse: true,
				  width: 140,
				  height: 68,
				  renderer: function(storeItem, item) {
					this.setTitle('This is some serious tool tip');
				  }
				}
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'EURrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'GBPrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'AUDrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'NZDrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'CADrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'CHFrcs'
			},{
				type: 'line',
				showMarkers: false,
				xField: 'time',
				yField: 'JPYrcs'
			}
		]
    }	          
		
});
