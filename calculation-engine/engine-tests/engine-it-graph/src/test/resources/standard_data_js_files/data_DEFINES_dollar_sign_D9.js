var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '282', label: 'D9\n$1802', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: $1802<br>Type: CELL_WITH_FORMULA<br>Id: 282<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@42f8285e'},
{id: '284', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 284<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@42f8285e'},
{id: '285', label: 'A4\n$1002', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: $1002<br>Type: CELL_WITH_VALUE<br>Id: 285<br>Formula Expression: Formula String: A4; Formula Values: $1002; Formula Ptg: $1002; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@42f8285e'},
{id: '286', label: 'B4\n$1502', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: $1502<br>Type: CELL_WITH_VALUE<br>Id: 286<br>Formula Expression: Formula String: B4; Formula Values: $1502; Formula Ptg: $1502; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@42f8285e'},
{id: '287', label: 'FUNCEXEC\n$1802', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1802<br>Type: FUNCTION<br>Id: 287<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@42f8285e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '286', to: '287'},
{from: '285', to: '287'},
{from: '284', to: '287'},
{from: '287', to: '282'}
                            ]);