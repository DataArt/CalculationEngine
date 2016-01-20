var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'F7\n5.5', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '2', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '3', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '4', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '5', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '6', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'},
{id: '7', label: 'FUNCEXEC\n5.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.5<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47caedad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6', to: '7'},
{from: '5', to: '7'},
{from: '4', to: '7'},
{from: '3', to: '7'},
{from: '2', to: '7'},
{from: '7', to: '0'}
                            ]);