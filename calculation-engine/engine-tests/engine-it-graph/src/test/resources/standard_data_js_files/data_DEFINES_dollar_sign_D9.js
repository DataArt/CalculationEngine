var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D9\n$1802', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: $1802<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e4bb20'},
{id: '2', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e4bb20'},
{id: '3', label: 'A4\n$1002', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: $1002<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A4; Formula Values: $1002; Formula Ptg: $1002; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e4bb20'},
{id: '4', label: 'B4\n$1502', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: $1502<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B4; Formula Values: $1502; Formula Ptg: $1502; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e4bb20'},
{id: '5', label: 'FUNCEXEC\n$1802', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1802<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e4bb20'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4', to: '5'},
{from: '3', to: '5'},
{from: '2', to: '5'},
{from: '5', to: '0'}
                            ]);