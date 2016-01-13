var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '1', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '2', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '3', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '4', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '5', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '6', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'},
{id: '7', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2adddc06'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '1', to: '3'},
{from: '3', to: '0'},
{from: '6', to: '7'},
{from: '5', to: '7'},
{from: '7', to: '4'}
                            ]);