Ext.define('FI.store.Values', {
    extend: 'Ext.data.Store',	
			
	requires: [
        'Ext.data.Store'        
    ],
	
	model: 'FI.model.Values',
		
    proxy: {
        type: 'ajax',
        url : 'history.php',		
        reader: {
            type: 'json', 
			root: 'ticks'
        }
    },
	
	loadFIdata: function( data ) {
		
		var me = this;
		var newRecord = Ext.create('FI.model.Values', data);
		newRecord.calcIndexes();
		var foundRecord = me.findRecord('time', newRecord.get('time'));
		
		if (foundRecord == null) {				
			me.add( newRecord );
			var removed = me.getAt(0);
			me.remove ( removed );
		} else {
			me.remove( foundRecord );			
			me.add( newRecord );
		}					
						
					// TODO search store for same time and if null, add if not update
					//me.add( json );
					
		
	},			
	
	listeners: 
	{
        'load': 
            function( store )
			{ 				
				store.each(function ( model ) 
				{
					model.calcIndexes() 					
				});
			}	
	}
				
});
