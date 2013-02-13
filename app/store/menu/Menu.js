Ext.define('FI.store.menu.Menu', {
    extend: 'Ext.data.TreeStore',	
	
	requires: [
        'Ext.data.TreeStore'        
    ],
	
    root: {
        expanded: true,
        children: [
            {
                text: 'Currency Flow',
                expanded: true,
                children: [
                    { leaf: true, text: 'Relative Currency Strenght', id: 'mainMenu-forex-rcs' },
                    { leaf: true, text: 'Absolute Currency Strenght' }
                ]
            },
            {
                text: 'Stock Flow',
                expanded: true,
                children: [
                    { leaf: true, text: 'Relative Stock Flow' },
                    { leaf: true, text: 'Absolute Stock Flow' }
                    
                ]
            }            
        ]
    }
});
