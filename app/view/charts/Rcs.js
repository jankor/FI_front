Ext.define('FI.view.charts.Rcs', {
    extend: 'Chart.ux.HighStock',			
	//sourceStore: {},
	//store: 'FI.store.charts.RcsForex',
	
	period: 14,
	
	loadSeries: function () {
		var me = this;	
		var shift = 0;
		
		for (var i = 0; i < me.store.getCount(); i++) {			
			if (i > me.period) {
				me.clearModel();				
				var recordData = me.calcRcs( me.period, me.store, i).getData();
				me.chart.series.forEach( function (item) {
					if(me.storeMapper.hasOwnProperty(item.name)){				
						item.addPoint( [recordData[me.storeMapper[item.name].x], recordData[me.storeMapper[item.name].y]], false, false );
						
					}
				})
			}							
		};
			
		me.chart.redraw();
	},
	
	updateSeries: function () {
		var me = this;
		
		me.clearModel();
		var recordData = me.calcRcs( me.period, me.store, me.store.getCount()-1).getData();	
		me.chart.series.forEach( function (item) {
			if(me.storeMapper.hasOwnProperty(item.name)){
				var index = item.points.length - 1;
				if (item.points[index].x == recordData.timestamp) {
					item.points[index].update( [recordData[me.storeMapper[item.name].x], recordData[me.storeMapper[item.name].y]], false );
				} else {
					item.addPoint( [recordData[me.storeMapper[item.name].x], recordData[me.storeMapper[item.name].y]], false, false );
				}			
			}
		})	

		me.chart.redraw();
		
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
	//console.log(shift + " : "  + store.getCount());					
		var startPosition = shift - period -1;
		var shiftPosition = shift -1;
		
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
