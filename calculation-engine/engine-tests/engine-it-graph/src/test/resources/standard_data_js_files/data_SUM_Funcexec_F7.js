var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '401', label: 'F7\n20.0', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 401<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'},
{id: '403', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 403<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'},
{id: '404', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 404<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'},
{id: '405', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 405<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'},
{id: '406', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 406<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'},
{id: '407', label: 'FUNCEXEC\n20.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 407<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30c31dd7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '406', to: '407'},
{from: '405', to: '407'},
{from: '404', to: '407'},
{from: '403', to: '407'},
{from: '407', to: '401'}
                            ]);