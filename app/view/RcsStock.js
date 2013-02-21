Ext.define('FI.view.RcsStock', {
    extend: 'FI.window.ChartWindow',		       	
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
});
