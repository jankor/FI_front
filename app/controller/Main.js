Ext.define('FI.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'FI.store.menu.Menu',
		'FI.store.Values',
		'FI.store.M1',
		'FI.store.M5',
		'FI.store.M10',
		'FI.store.M15',
		//'FI.store.charts.Rcs',
		'FI.store.charts.RcsForex'			
    ],

    views: [
        'FI.view.layout.Template',
        'FI.view.layout.Menu',
		'FI.window.ChartWindow',
		'FI.chart.Flowindi',
		'FI.view.RcsForex',
		'FI.view.charts.Rcs',
		'FI.view.PercentageForex',
		
		// STOCK FLOW
		'FI.view.charts.RcsStock',
		'FI.view.RcsStock',
		'FI.view.charts.PercentageStock',
		'FI.view.PercentageStock'
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
	urlUpdate : 'update',
	
    init: function() {
		// PERIODIC REQUEST		
		var me = this;
		var M1Store = me.getStore('FI.store.M1');
		var M5Store = me.getStore('FI.store.M5');
		var M10Store = me.getStore('FI.store.M10');
		var M15Store = me.getStore('FI.store.M15');
		M1Store.load();
		M5Store.load();
		M10Store.load();
		M15Store.load();
		//Ext.util.Observable.capture(me.getStore('FI.store.Values'), function(evname) {console.log(evname, arguments);})
		
		
		var intr = setInterval(function() {
			Ext.Ajax.request({
				url: me.urlUpdate,				
				success: function(response){
					var textRes = response.responseText;
					var json = Ext.JSON.decode( textRes );
					
					json.ticks.time = json.time.M1;
					M1Store.loadFIdata(json.ticks);
					json.ticks.time = json.time.M5;
					M5Store.loadFIdata(json.ticks);
					json.ticks.time = json.time.M10;
					M10Store.loadFIdata(json.ticks);
					json.ticks.time = json.time.M15;
					M15Store.loadFIdata(json.ticks);
					
					var charts = Ext.ComponentQuery.query('highstock');
					charts.forEach( function (item) {
						item.updateSeries();
					});
					//indiWindows[0].down('highstock').store.updateCalc(M1Store);
					//console.log(charts);										
				}
			});
															
		}, 10000);		
		
        this.control({
			'layoutMenu': {
				itemclick: this.menuClick
			},
			
			'button[action=setRcsPeriod]': {
				click: this.rcsClick
			},
			
			'button[action=periodChange]': {
				click: this.periodChange
			}
        });
    },
	
	menuClick: function(tree, model) {
		var me = this;
		var M1Store = me.getStore('FI.store.M1');	
		
		switch (model.getId())
		{
			case "mainMenu-forex-rcs":
				var modalWindow = Ext.create('FI.view.RcsForex');		
				var chart = Ext.create('FI.view.charts.RcsForex', {store: M1Store});				
				
				break;
			case "mainMenu-forex-percentage":				
				var modalWindow = Ext.create('FI.view.PercentageForex');
				
				//console.log(window.body.id);
				var chart = Ext.create('FI.view.charts.PercentageForex', {store: M1Store,});								
				break;
			case "mainMenu-stock-rcs":
				var modalWindow = Ext.create('FI.view.RcsStock');
				var chart = Ext.create('FI.view.charts.RcsStock', {store: M1Store,});								
				break;	
			case "mainMenu-stock-percentage":
				var modalWindow = Ext.create('FI.view.PercentageStock');
				var chart = Ext.create('FI.view.charts.PercentageStock', {store: M1Store,});								
				break;
			break;
		}
		
		
        
		
		
		modalWindow.add(chart);
		modalWindow.show();	
		//var store = window.down('chart').getStore();		
		
		//store.firstCalc (M1Store);
				
        //var window = Ext.create('FI.window.ChartWindow');
		
		
    },
	
	rcsClick: function( button ) {
		var me = this;
		var modalWindow = button.up('window');
		var RcsPeriodText = modalWindow.down('textfield[name=rcsPeriod]');
		var chart = modalWindow.down('highstock');
		
		chart.period = RcsPeriodText.value;
		chart.chart.showLoading('Loading');	
		var extremes = chart.chart.axes[0].getExtremes();
		chart.clearSeries();
		chart.loadSeries();	
		chart.chart.axes[0].setExtremes(extremes.userMin, extremes.userMax);
		chart.chart.hideLoading();
		console.log(chart.chart);
	},
	
	periodChange: function( button ) {
		var me = this;
		var modalWindow = button.up('window');		
		var chart = modalWindow.down('highstock');
		var newStore = me.getStore('FI.store.' + button.text);
		
		console.log(newStore);
		if (newStore) {
			chart.store = newStore;
			chart.clearSeries();
			chart.loadSeries();	
			chart.chart.axes[0].setExtremes();
		}
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
