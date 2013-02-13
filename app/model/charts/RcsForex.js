Ext.define('FI.model.charts.RcsForex', {
    extend: 'Ext.data.Model',	
			
	requires: [
        'Ext.data.Model'        
    ],
	
	fields: [
		 {name: 'time', type: 'date'},
         {name: 'EURrcs', type: 'float'},
         {name: 'USDrcs', type: 'float'},		 	 
		 {name: 'GBPrcs', type: 'float'},
		 {name: 'AUDrcs', type: 'float'},
		 {name: 'NZDrcs', type: 'float'},
		 {name: 'CADrcs', type: 'float'},
		 {name: 'CHFrcs', type: 'float'},
		 {name: 'JPYrcs', type: 'float'}
	]
});
