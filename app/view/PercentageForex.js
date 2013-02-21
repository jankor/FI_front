Ext.define('FI.view.PercentageForex', {
    extend: 'FI.window.ChartWindow',		       
	//alias: 'widget.RcsForexChart',		
	requires: [
        'FI.store.M1',
		'FI.view.FlowChart'	
    ],				
		          
	tbar: [		
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
});
