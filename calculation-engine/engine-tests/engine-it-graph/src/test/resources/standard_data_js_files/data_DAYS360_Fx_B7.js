var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3', label: 'DAYS360\n160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 160.0<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66596a88'},
{id: '2', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66596a88'},
{id: '1', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66596a88'},
{id: '0', label: 'B7\n160.0', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: 160.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66596a88'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '0'},
{from: '1', to: '3'},
{from: '2', to: '3'}
                            ]);