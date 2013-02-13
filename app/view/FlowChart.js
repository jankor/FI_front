Ext.define('FI.view.FlowChart', {
    extend: 'Ext.chart.Chart',		       
	alias: 'widget.flowChart',		
	requires: [
        'Ext.chart.Chart'        
    ],						
	theme: "Base", 
	style: 'background:#fff',	
	axes: [
		{			
			type: 'Numeric',
			position: 'left',
			grid: true,
			decimals: 2,
			maximum: 100,
			minimum: 0,
			fields: ['USDrcs', 'EURrcs', 'GBPrcs', 'AUDrcs', 'NZDrcs', 'CADrcs', 'CHFrcs', 'JPYrcs'],
			adjustMaximumByMajorUnit: true,
			adjustMinimumByMajorUnit: true
		},
		{		
			type: 'Time',
			position: 'bottom',
			fields: ['time'],
			dateFormat: 'G:i',
			step: [Ext.Date.MINUTE, 1],
			adjustMaximumByMajorUnit: true,
			adjustMinimumByMajorUnit: true
		}
	]	             		
});
