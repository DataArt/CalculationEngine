var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '417', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 417<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'},
{id: '418', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 418<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'},
{id: '419', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 419<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'},
{id: '420', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 420<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'},
{id: '421', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 421<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'},
{id: '415', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 415<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5167268'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '420', to: '421'},
{from: '419', to: '421'},
{from: '418', to: '421'},
{from: '417', to: '421'},
{from: '421', to: '415'}
                            ]);