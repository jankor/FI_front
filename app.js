Ext.application({
    requires: [
		'Ext.container.Viewport',
		'FI.view.layout.Template',
		//'highstock.ux.HighStock',
		//'highstock.ux.SampleConfigs'
	],
	
	controllers: [
        'FI.controller.Main'
    ],
	
    name: 'FI',

    appFolder: 'app',

    launch: function() {
        Ext.create('FI.view.layout.Template');
    }
});