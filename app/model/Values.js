Ext.define('FI.model.Values', {
    extend: 'Ext.data.Model',	
			
	requires: [
        'Ext.data.Model'        
    ],
	
	fields: [
		 {name: 'time', type: 'date'},
         {name: 'EURUSD', type: 'float'},
         {name: 'GBPUSD', type: 'float'},
		 {name: 'USDJPY', type: 'float'},
		 {name: 'USDCAD', type: 'float'},
		 {name: 'NZDUSD', type: 'float'},
		 {name: 'AUDUSD', type: 'float'},
		 {name: 'USDCHF', type: 'float'},
		 {name: 'USDx', type: 'float'},
		 {name: 'EURx', type: 'float'},		 
		 {name: 'GBPx', type: 'float'},
		 {name: 'JPYx', type: 'float'},
		 {name: 'NZDx', type: 'float'},
		 {name: 'AUDx', type: 'float'},
		 {name: 'CADx', type: 'float'},
		 {name: 'CHFx', type: 'float'}		 		 
	],

	calcIndexes: function() {        
		
		var USDx = 1.0;
        USDx += this.get('EURUSD');
        USDx += this.get('GBPUSD');
        USDx += 1 / this.get('USDCHF');
        USDx += 1 / this.get('USDJPY');
        USDx += 1 / this.get('USDCAD');
        USDx += this.get('AUDUSD');
        USDx += this.get('NZDUSD');		        
		USDx = 1 / USDx;
        this.set('USDx', USDx);
		
		this.set('EURx', this.get('EURUSD') * USDx);
		this.set('GBPx', this.get('GBPUSD') * USDx);
		this.set('CHFx', USDx / this.get('USDCHF'));
		this.set('JPYx', USDx / this.get('USDJPY'));
		this.set('CADx', USDx / this.get('USDCAD'));
		this.set('AUDx', this.get('AUDUSD') * USDx);
		this.set('NZDx', this.get('NZDUSD') * USDx);
                        
    }	
});
