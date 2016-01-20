var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'F6\n21.0', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'},
{id: '2', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'},
{id: '3', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'},
{id: '4', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'},
{id: '5', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'},
{id: '6', label: 'FUNCEXEC\n21.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 6<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d1f74b8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5', to: '6'},
{from: '4', to: '6'},
{from: '3', to: '6'},
{from: '2', to: '6'},
{from: '6', to: '0'}
                            ]);