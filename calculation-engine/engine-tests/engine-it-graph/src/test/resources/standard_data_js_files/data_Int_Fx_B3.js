var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '517', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 517<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30331109'},
{id: '518', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 518<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30331109'},
{id: '519', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 19.0<br>Type: FUNCTION<br>Id: 519<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@30331109'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '518', to: '519'},
{from: '519', to: '517'}
                            ]);