Ext.define('FI.window.ChartWindow', {
    extend: 'Ext.window.Window',
	alias: 'widget.indicatorWindow',
	requires: [
        'Ext.chart.Chart'
    ],
    
	height: 300,
    width: 650,
    layout: 'fit'
    		
});
