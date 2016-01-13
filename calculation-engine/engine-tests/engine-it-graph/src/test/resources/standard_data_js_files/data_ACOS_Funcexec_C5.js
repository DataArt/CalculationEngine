var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c583ecf'},
{id: '2', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c583ecf'},
{id: '3', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c583ecf'},
{id: '4', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 4<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c583ecf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '4'},
{from: '2', to: '4'},
{from: '4', to: '0'}
                            ]);