var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5248', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Alias: null<br>Value: 48.0<br>Type: FUNCTION<br>Id: 5248<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ([[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@74ea1cd0'},
{id: '5246', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Alias: null<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 5246<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ([[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@74ea1cd0'},
{id: '5247', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Alias: null<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 5247<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@74ea1cd0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5247', to: '5248'},
{from: '5248', to: '5246'}
                            ]);