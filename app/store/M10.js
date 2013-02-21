Ext.define('FI.store.M10', {
    extend: 'FI.store.Values',	
			
	//autoLoad: true,
	model: 'FI.model.Values',
		
    proxy: {
        type: 'ajax',
        url : 'history/M10',		
        reader: {
            type: 'json', 	
			root: 'M10'
        }
    }
				
});
