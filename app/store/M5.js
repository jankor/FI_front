Ext.define('FI.store.M5', {
    extend: 'FI.store.Values',	
			
	//autoLoad: true,
	model: 'FI.model.Values',
		
    proxy: {
        type: 'ajax',
        url : 'history/M5',		
        reader: {
            type: 'json', 	
			root: 'M5'
        }
    }
				
});
