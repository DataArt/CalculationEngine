var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D8\n$1801', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: $1801<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1af687fe'},
{id: '2', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1af687fe'},
{id: '3', label: 'A3\n$1001', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: $1001<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A3; Formula Values: $1001; Formula Ptg: $1001; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1af687fe'},
{id: '4', label: 'B3\n$1501', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: $1501<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B3; Formula Values: $1501; Formula Ptg: $1501; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1af687fe'},
{id: '5', label: 'FUNCEXEC\n$1801', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1801<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1af687fe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4', to: '5'},
{from: '3', to: '5'},
{from: '2', to: '5'},
{from: '5', to: '0'}
                            ]);