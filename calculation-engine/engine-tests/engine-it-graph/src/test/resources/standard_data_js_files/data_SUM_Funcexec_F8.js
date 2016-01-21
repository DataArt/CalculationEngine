var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '408', label: 'F8\n9.0', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 408<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'},
{id: '410', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 410<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'},
{id: '411', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 411<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'},
{id: '412', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 412<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'},
{id: '413', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 413<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'},
{id: '414', label: 'FUNCEXEC\n9.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 414<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edb61b1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '413', to: '414'},
{from: '412', to: '414'},
{from: '411', to: '414'},
{from: '410', to: '414'},
{from: '414', to: '408'}
                            ]);