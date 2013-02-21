Ext.define('FI.view.Grid', {
    extend: 'Ext.grid.Panel',       	
	store: 'FI.store.M1',
	style: 'background:#fff',	
	columns: [
		{header: 'date', dataIndex: 'time', xtype: 'datecolumn', format:'c'},		
		{header: 'USDx', dataIndex: 'USDx', flex: 1},
		{header: 'EURx', dataIndex: 'EURx', flex: 1}		
	]
});
