var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '24', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 24<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79079097'},
{id: '26', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 26<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79079097'},
{id: '27', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 27<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79079097'},
{id: '28', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 28<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79079097'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '27', to: '28'},
{from: '26', to: '28'},
{from: '28', to: '24'}
                            ]);