var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '33', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 33<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'},
{id: '35', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 35<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'},
{id: '36', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 36<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'},
{id: '37', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 37<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'},
{id: '38', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 38<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'},
{id: '39', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 790.0<br>Type: FUNCTION<br>Id: 39<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@757277dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '38', to: '39'},
{from: '37', to: '39'},
{from: '36', to: '39'},
{from: '35', to: '39'},
{from: '39', to: '33'}
                            ]);