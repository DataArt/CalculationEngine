var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '112', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 112<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '113', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 113<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '114', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 114<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '115', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 115<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '116', label: 'FUNCEXEC\n5.25', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.25<br>Type: FUNCTION<br>Id: 116<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '109', label: 'F6\n5.25', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 109<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'},
{id: '111', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 111<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5745ca0e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '115', to: '116'},
{from: '114', to: '116'},
{from: '113', to: '116'},
{from: '112', to: '116'},
{from: '111', to: '116'},
{from: '116', to: '109'}
                            ]);