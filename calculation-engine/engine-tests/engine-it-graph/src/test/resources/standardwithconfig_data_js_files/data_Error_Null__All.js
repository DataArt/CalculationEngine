var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '582', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 582<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'},
{id: '583', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 583<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'},
{id: '584', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 584<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[5.0], [8.0], [1.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'},
{id: '585', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 585<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM([[4.0], [8.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'},
{id: '586', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 586<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'},
{id: '587', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 587<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM([[4.0], [8.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4678a2eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '583', to: '584'},
{from: '586', to: '587'},
{from: '584', to: '582'},
{from: '587', to: '585'}
                            ]);