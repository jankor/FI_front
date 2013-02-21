Ext.define('FI.store.charts.Rcs', {
    extend: 'Ext.data.Store',	
		
	requires: [
        'Ext.data.Store'        
    ],		
	
	proxy: {
        type: 'memory'        
    },
	
	firstCalc: function( store ) {
		var me = this;
		
		for (var i = 0; i < me.bufferSize; i++)
		{
			me.clearModel();
			var record = me.calcRcs( me.period, store, me.bufferSize - i);
			me.add( record );
		}						
	},
	
	updateCalc: function ( store ) {
		var me = this;
		
		var currentRecordData = store.getAt( store.getCount() - 1 ).getData();
		var currentRecordIndi = me.getAt( me.getCount() - 1 ).getData();
		me.clearModel();
		var updatedRecordIndi = me.calcRcs( me.period, store, 0);
		
		if (currentRecordData.time.getTime() != currentRecordIndi.time.getTime()) {
			me.add( updatedRecordIndi );
			var removed = me.getAt(0);
			me.remove ( removed );			
		} else {			
			console.log (currentRecordData); console.log (currentRecordIndi); console.log (updatedRecordIndi.getData());
			me.remove( currentRecordIndi );			
			me.add( updatedRecordIndi );			
		}		
	},
	
	clearModel: function () {
		var me = this;
		me.modelMap.forEach( function ( item ) {			
			item.pos = 0.00000000;			
			item.neg = 0.00000000;			
		});
	},
	
	calcRcs: function (	period, store, shift ) {
		var me = this;
						
		var startPosition = store.getCount() - shift - period -1;
		var shiftPosition = store.getCount() - shift -1;
		
		if (startPosition < 0) {
			startPosition = 0;
		}
		
		for (var i = startPosition; i < shiftPosition; i++)
		{ 
		
			var valueRecordOld = store.getAt(i).getData();			
			var valueRecordNew = store.getAt(i+1).getData();
			
			me.modelMap.forEach( function ( item ) {
				var diff = 0.0;
				diff = valueRecordNew[item.sourceData] - valueRecordOld[item.sourceData];
				if (diff > 0) {
					item.pos += diff;
				} else {
					item.neg += -diff;
				}					
			})									
		}
		
		var data = {};
		data.time = valueRecordNew.time;
		data.timestamp = valueRecordNew.timestamp;
		me.modelMap.forEach( function ( item ) {
			var pos, neg;
			if (item.neg < 0.000000001) {
				data[item.resultData] = 0;
			}
			pos = item.pos/period;
			neg = item.neg/period;
			data[item.resultData] = (100.0 -(100.0/(1.0+pos/neg)));			
		});
			
		var newRecord = Ext.create('FI.model.charts.RcsForex', data);
		return newRecord;
	}
	
});
