Ext.define("Chart.ux.HighStock", {
  extend : 'Ext.Component',
  alias : ['widget.highstock'],


  /**
   * @cfg {Object} defaultSerieType
   * Sets styles for this chart. This contains default styling, so modifying this property will <b>override</b>
   * the built in styles of the chart. Use {@link #extraStyle} to add customizations to the default styling.
   */
  defaultSerieType : null,

  /**
   * @cfg {Boolean} resizable
   * True to allow resizing, false to disable resizing (defaults to true).
   */
  resizable : false,

  /**
   * @cfg {Integer} updateDelay
   * (defaults to 0)
   */
  updateDelay : 0,

  /**
   * @cfg {Object} loadMask An {@link Ext.LoadMask} config or true to mask the chart while
   * loading. Defaults to false.
   */
  loadMask : false,

  // Create getter and setter function
  config : {
    title : '',
    subTitle : ''
  },

  initComponent : function() {  
console.log('init');
    this.callParent(arguments);
  },
  
  /**
   *
   */
  removeSerie : function(id, redraw) {
    redraw = redraw || true;
    if(this.chart) {
      this.chart.series[id].remove(redraw);
      this.chartConfig.series.splice(id, 1);
    }
    this.series.splice(id, 1);
  },
  /**
   * Remove all series
   */
  removeAllSeries : function() {
    var sc = this.series.length;
    for(var i = 0; i < sc; i++) {
      this.removeSerie(0);
    }
  },
  /**
   * Set the title of the chart
   * @param {String} title Text to set the subtitle
   */
  setTitle : function(title) {
    if(this.chartConfig.title)
      this.chartConfig.title.text = title;
    else
      this.chartConfig.title = {
        text : title
      };
    if(this.chart && this.chart.container)
      this.draw();
  },
  /**
   * Set the subtitle of the chart
   * @param {String} title Text to set the subtitle
   */
  setSubTitle : function(title) {
    if(this.chartConfig.subtitle)
      this.chartConfig.subtitle.text = title;
    else
      this.chartConfig.subtitle = {
        text : title
      };
    if(this.chart && this.chart.container)
      this.draw();
  },
  initEvents : function() {
    if(this.loadMask) {
      this.loadMask = new Ext.LoadMask(this.el, Ext.apply({
        stores : this.stores
      }, this.loadMask));
    }
  },
  afterRender : function() {
console.log('after');	
    Chart.ux.HighStock.superclass.afterRender.call(this);

    this.bindComponent(true);

    // Use Ext.apply insteadof Ext.applyIf
    Ext.apply(this.chartConfig.chart, {
      renderTo : this.el.dom
    });

    Ext.applyIf(this.chartConfig, {
      xAxis : [{}]
    });

    if(this.xField && this.store) {
      this.updatexAxisData();
    }

	this.draw();	
  },
  onMove : function() {

  },
  
  clearSeries: function() {
	var me = this;	
	
	me.chart.series.forEach( function (item) {
		if(me.storeMapper.hasOwnProperty(item.name)){
			item.setData([]);			
		}
	});

	me.chart.redraw();	
  },
  
  loadSeries: function () {
	var me = this;	
		
	me.store.each ( function (record) {
		var recordData = record.getData();
		me.chart.series.forEach( function (item) {
			if(me.storeMapper.hasOwnProperty(item.name)){
				//recordData[me.storeMapper[item.name].x],
				//	
				item.addPoint( [recordData[me.storeMapper[item.name].x], recordData[me.storeMapper[item.name].y]], false, false );
			
			}
		})	
			
	});
		
	me.chart.redraw();
  },
  
  updateSeries: function () {
	var me = this;


	var recordData = me.store.getAt( me.store.getCount() - 1 ).getData();	
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
  // Should be only called when there is data
  draw : function() {
console.log('draw');  
	var me = this;
			  
    /**
     * Redraw the chart
     */
    if(me.chart && me.rendered) {
      if(this.resizable) {
        for(var i = 0; i < this.series.length; i++) {
          this.series[i].visible = this.chart.series[i].visible;
        }

        // Destroy
		//this.chart.redraw();		
        //this.chart.destroy();
		//Ext.destroy(this.chart);
        //delete this.chart;

        // Create a new chart
        //var seriesConfig = this.chartConfig.series;
        //this.chart = Ext.create('Highcharts.StockChart', this.chartConfig);
        // StockChart() will remove chartConfig.series which causes
        // all sort of troule. Restore it
        //this.chartConfig.series = seriesConfig;
      }

      /**
       * Create the chart
       */
    } else if(this.rendered) {
      // Create the chart
      var config = Ext.clone(this.chartConfig.series);
console.log('create');
      this.chart = Ext.create('Highcharts.StockChart', this.chartConfig);
console.log(this.chart);	  
      // StockChart() will remove chartConfig.series which causes
      // all sort of troule. Restore it
      this.chartConfig.series = config;
    }
	me.loadSeries();
	/*
    for( i = 0; i < this.series.length; i++) {
      if(!this.series[i].visible) {
        this.chart.series[i].hide();
      }
    }
	*/
    // Refresh the data
    //this.refresh();
  },
  //@deprecated
  onContainerResize : function() {
	console.log('resize2');
    this.draw();
  },
  //private
  updatexAxisData : function() {
    var data = [], items = this.store.data.items;

    if(this.xField && this.store) {
      for(var i = 0; i < items.length; i++) {
        data.push(items[i].data[this.xField]);
      }
      if(this.chart)
        this.chart.xAxis[0].setCategories(data, true);
      else
        this.chartConfig.xAxis[0].categories = data;
    }
  },
  bindComponent : function(bind) {
    /**
     * Make the chart update the positions
     * positions are based on the window object and not on the
     * owner object.
     */
    var getWindow = function(parent) {
      if(parent.ownerCt)
        return getWindow(parent.ownerCt);
      else
        return parent;
    };
    var w = getWindow(this);

    if(bind) {
      w.on('move', this.onMove, this);
      w.on('resize', this.onResize, this);

      if(this.ownerCt)
        this.ownerCt.on('render', this.update, this);
    } else {
      if(this.ownerCt)
        this.ownerCt.un('render', this.update, this);
      w.un('move', this.onMove, this);
    }
  },
  
 
  /**
   * Complete refresh of the chart
   */
  refresh : function() {
    this.draw();
 
  },
 
  //private
  onResize : function( panel, width, height ) {
	var me = this;
	var chartHeight = panel.down('highstock').getHeight();	
	if(me.chart && me.rendered) {
		me.chart.setSize(width-5, chartHeight);
	} else 
	{
		me.update();
	}
	
    //Chart.ux.HighStock.superclass.onResize.call(this);
    //this.update();
  },
  // private
  onRemove : function(ds, record, index, isUpdate) {
    for(var i = 0; i < this.series.length; i++) {
      var s = this.series[i];
      if(s.type == 'pie' && s.useTotals) {
        s.removeData(record, index);
        this.chart.series[i].setData(s.getTotals());
      } else {
        this.chart.series[i].data[index].remove(true);
      }
    }
    Ext.each(this.chart.series, function(serie) {
      serie.data[index].remove(true);
    });
    if(this.xField) {
      this.updatexAxisData();
    }
  },
  // private
  onLoad : function(store) {
    //console.log("call onLoad, loading " + store.isLoading());
    this.draw();
  },
  
  loadStores : function() {
    Ext.each(this.stores, function(store) {
      store.load();
    });
  },
  destroy : function() {
    delete this.series;
    if(this.chart) {
      this.chart.destroy();
      delete this.chart;
    }
    
    Chart.ux.HighStock.superclass.destroy.call(this);
  }
});
