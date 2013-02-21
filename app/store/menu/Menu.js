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
                    { leaf: true, text: 'Percentage Currency Strenght', id: 'mainMenu-forex-percentage'}
                ]
            },
            {
                text: 'Stock Flow',
                expanded: true,
                children: [
                    { leaf: true, text: 'Relative Stock Flow', id: 'mainMenu-stock-rcs' },
                    { leaf: true, text: 'Percentage Stock Flow', id: 'mainMenu-stock-percentage' }
                    
                ]
            }            
        ]
    }
});
