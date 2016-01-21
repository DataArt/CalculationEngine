var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '272', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 272<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28e8dde3'},
{id: '273', label: 'A2\n$1000', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: $1000<br>Type: CELL_WITH_VALUE<br>Id: 273<br>Formula Expression: Formula String: A2; Formula Values: $1000; Formula Ptg: $1000; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28e8dde3'},
{id: '274', label: 'B2\n$1500', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: $1500<br>Type: CELL_WITH_VALUE<br>Id: 274<br>Formula Expression: Formula String: B2; Formula Values: $1500; Formula Ptg: $1500; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28e8dde3'},
{id: '275', label: 'FUNCEXEC\n$1800', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1800<br>Type: FUNCTION<br>Id: 275<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28e8dde3'},
{id: '270', label: 'D7\n$1800', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: $1800<br>Type: CELL_WITH_FORMULA<br>Id: 270<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28e8dde3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '274', to: '275'},
{from: '273', to: '275'},
{from: '272', to: '275'},
{from: '275', to: '270'}
                            ]);