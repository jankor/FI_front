Ext.define('FI.model.Values', {
    extend: 'Ext.data.Model',	
			
	requires: [
        'Ext.data.Model'        
    ],
	
	fields: [
		 {name: 'time', type: 'date'},
		 {name: 'timestamp', type: 'int'},
         {name: 'EURUSD', type: 'float'},
         {name: 'GBPUSD', type: 'float'},
		 {name: 'USDJPY', type: 'float'},
		 {name: 'USDCAD', type: 'float'},
		 {name: 'NZDUSD', type: 'float'},
		 {name: 'AUDUSD', type: 'float'},
		 {name: 'USDCHF', type: 'float'},
		 {name: 'SPX500', type: 'float'},
		 {name: 'UK100', type: 'float'},
		 {name: 'GER30', type: 'float'},
		 {name: 'JPN225', type: 'float'},
		 {name: 'AUS200', type: 'float'},
		 
		 {name: 'USDx', type: 'float'},
		 {name: 'EURx', type: 'float'},		 
		 {name: 'GBPx', type: 'float'},
		 {name: 'JPYx', type: 'float'},
		 {name: 'NZDx', type: 'float'},
		 {name: 'AUDx', type: 'float'},
		 {name: 'CADx', type: 'float'},
		 {name: 'CHFx', type: 'float'},		 		 
		 {name: 'USDsx', type: 'float'},
		 {name: 'EURsx', type: 'float'},
		 {name: 'GBPsx', type: 'float'},
		 {name: 'JPYsx', type: 'float'},
		 {name: 'AUDsx', type: 'float'},
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
		/*	
		var USDx = 1.0;
        USDx += this.get('EURUSD');
        USDx += this.get('GBPUSD');
        USDx += 1 / this.get('USDCHF');
        USDx += 1 / this.get('USDJPY');
        USDx += 1 / this.get('USDCAD');
        USDx += this.get('AUDUSD');
        USDx += this.get('NZDUSD');		        		
        this.set('USDx', USDx);
		
		this.set('EURx', this.get('EURUSD'));
		this.set('GBPx', this.get('GBPUSD'));
		this.set('CHFx', 1 / this.get('USDCHF'));
		this.set('JPYx', 1 / this.get('USDJPY'));
		this.set('CADx', 1 / this.get('USDCAD'));
		this.set('AUDx', this.get('AUDUSD'));
		this.set('NZDx', this.get('NZDUSD'));
		*/
		this.set('USDsx', this.get('SPX500'));
		this.set('EURsx', this.get('GER30') * this.get('EURUSD'));
		this.set('GBPsx', this.get('UK100') * this.get('GBPUSD'));
		this.set('JPYsx', this.get('JPN225') * (1 / this.get('USDJPY')));
		this.set('AUDsx', this.get('AUS200') * this.get('AUDUSD'));
		
		this.set('timestamp', this.get('time').getTime());
    }	
});
