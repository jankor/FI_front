Ext.application({
    requires: [
		'Ext.container.Viewport',
		'FI.view.layout.Template'	
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