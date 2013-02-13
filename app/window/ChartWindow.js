Ext.define('FI.window.ChartWindow', {
    extend: 'Ext.window.Window',
	alias: 'widget.indicatorWindow',
	requires: [
        'Ext.chart.Chart'
    ],
    
	height: 500,
    width: 750,
    layout: 'fit',
       
});
