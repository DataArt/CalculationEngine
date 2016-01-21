var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2656', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 2656<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'},
{id: '2657', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 2657<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'},
{id: '2658', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 2658<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'},
{id: '2659', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 2659<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'},
{id: '2654', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 2654<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'},
{id: '2655', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 2655<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7eee6c13'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2655', to: '2656'},
{from: '2658', to: '2659'},
{from: '2656', to: '2654'},
{from: '2659', to: '2657'}
                            ]);