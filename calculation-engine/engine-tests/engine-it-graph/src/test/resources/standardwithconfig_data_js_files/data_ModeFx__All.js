var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '643', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 643<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE([[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7cbee484'},
{id: '644', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: 644<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7cbee484'},
{id: '645', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 645<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE([[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7cbee484'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '644', to: '645'},
{from: '645', to: '643'}
                            ]);