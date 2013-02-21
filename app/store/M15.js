Ext.define('FI.store.M15', {
    extend: 'FI.store.Values',	
			
	//autoLoad: true,
	model: 'FI.model.Values',
		
    proxy: {
        type: 'ajax',
        url : 'history/M15',		
        reader: {
            type: 'json', 	
			root: 'M15'
        }
    }
				
});
