var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3632', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 3632<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE([[12.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f4f2cc0'},
{id: '3633', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 3633<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f4f2cc0'},
{id: '3634', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 5.2<br>Type: FUNCTION<br>Id: 3634<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE([[12.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f4f2cc0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3633', to: '3634'},
{from: '3634', to: '3632'}
                            ]);