var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '313', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 313<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75e91545'},
{id: '314', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 314<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75e91545'},
{id: '315', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 315<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75e91545'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '314', to: '315'},
{from: '315', to: '313'}
                            ]);