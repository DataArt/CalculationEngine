var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '1', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '2', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '3', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '4', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '5', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '6', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 6<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'},
{id: '7', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2bfc268b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '3'},
{from: '2', to: '3'},
{from: '3', to: '5'},
{from: '4', to: '5'},
{from: '6', to: '7'},
{from: '5', to: '7'},
{from: '7', to: '0'}
                            ]);