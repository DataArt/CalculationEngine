var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1685', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 1685<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'},
{id: '1686', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 1686<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'},
{id: '1687', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 1687<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'},
{id: '1688', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 1688<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM([[4.0], [8.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'},
{id: '1689', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 1689<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'},
{id: '1690', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 1690<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM([[4.0], [8.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b63e6ad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1686', to: '1687'},
{from: '1689', to: '1690'},
{from: '1687', to: '1685'},
{from: '1690', to: '1688'}
                            ]);