Ext.define('FI.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'FI.store.menu.Menu',
		'FI.store.Values',
		'FI.store.M1'
		//'FI.store.charts.Rcs',
		//'FI.store.charts.RcsForex'			
    ],

    views: [
        'FI.view.layout.Template',
        'FI.view.layout.Menu',
		'FI.window.ChartWindow',
		'FI.chart.Flowindi',
		'FI.view.RcsForex'
    ],
	
	models: [
		'FI.model.Values',
		'FI.model.charts.RcsForex'		
	],
	/*
    refs: [
        {
            ref: 'examplePanel',
            selector: '#examplePanel'
        },
        {
            ref: 'exampleList',
            selector: 'exampleList'
        }
    ],
	*/
	urlUpdate : 'update.php',
	
    init: function() {
		// PERIODIC REQUEST		
		var me = this;
		var M1Store = me.getStore('FI.store.M1');
		
		//Ext.util.Observable.capture(me.getStore('FI.store.Values'), function(evname) {console.log(evname, arguments);})
		
		var intr = setInterval(function() {
			Ext.Ajax.request({
				url: me.urlUpdate,				
				success: function(response){
					var textRes = response.responseText;
					var json = Ext.JSON.decode( textRes );
					M1Store.loadFIdata(json.M1);
					
					var indiWindows = Ext.ComponentQuery.query('indicatorWindow');
					indiWindows[0].updateData(M1Store);
					//console.log(indiWindows);										
				}
			});
															
		}, 5000);		
		
        this.control({
			'layoutMenu': {
				itemclick: this.menuClick
			},
			
        });
    },
	
	menuClick: function(tree, model) {
		var me = this;
		
		var M1Store = me.getStore('FI.store.M1');				
        var window = Ext.create('FI.view.RcsForex');		
		console.log(window);
		var store = window.down('chart').getStore();		
		
		store.firstCalc (M1Store);
				
        //var window = Ext.create('FI.window.ChartWindow');
		window.show();
		
    },
	
	showChart: function() {
		var me = this;
		
		var M1Store = me.getStore('FI.store.Values');				
        var window = Ext.create('FI.store.M1');
		console.log('anoStore')
		var store = window.down('grid').getStore();		
		store.load (M1Store);
		
		window.show();
    }
});
