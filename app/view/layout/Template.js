Ext.define('FI.view.layout.Template', {
    extend: 'Ext.container.Viewport',
	
	
    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'FI.view.layout.Menu'
    ],
    
    layout: 'border',
    
    items: [
        {
            region: 'north',
            //xtype : 'pageHeader'
        },
        
        {
            region: 'center',
            
            layout: {
                type : 'hbox',
                align: 'stretch'
            },
            
            items: [
                {
                    width: 250,
                    bodyPadding: 5,					
                    xtype: 'layoutMenu'
                },
                
                {
                    cls: 'x-example-panel',
                    flex: 1,
                    title: '&nbsp;',
                    id   : 'examplePanel',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    overflowY: 'auto',
                    bodyPadding: 0
                }
            ]
        }
    ]
});
