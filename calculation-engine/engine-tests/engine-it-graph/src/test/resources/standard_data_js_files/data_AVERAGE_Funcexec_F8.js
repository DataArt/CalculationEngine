var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'F8\n3.5', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '2', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '3', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '4', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '5', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '6', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'},
{id: '7', label: 'FUNCEXEC\n3.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 3.5<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e3f861'}
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