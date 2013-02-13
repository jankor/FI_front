Ext.define('FI.view.layout.Menu', {
    extend: 'Ext.tree.Panel',
    xtype: 'layoutMenu',    
	
    requires: [
        'FI.store.menu.Menu',
		'Ext.tree.Panel'
    ],
	
    store: 'FI.store.menu.Menu',
	
    title: 'Flowindi',
    rootVisible: false,
	
	cls: 'examples-list',
    
    lines: false,
    useArrows: true
    
    
});
