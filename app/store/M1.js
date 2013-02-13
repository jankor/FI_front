Ext.define('FI.store.M1', {
    extend: 'FI.store.Values',	
			
	autoLoad: true,
	model: 'FI.model.Values',
		
    proxy: {
        type: 'ajax',
        url : 'history.php',		
        reader: {
            type: 'json', 
			root: 'ticks'
        }
    }
				
});
