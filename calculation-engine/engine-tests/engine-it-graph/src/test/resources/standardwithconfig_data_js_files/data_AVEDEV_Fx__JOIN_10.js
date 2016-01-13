var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '1', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Alias: null<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 1<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '2', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '3', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '4', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Alias: null<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 4<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '5', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '6', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: AVEDEV(C8, B8); Formula Values: AVEDEV(219.88888888888889, 1.0204081632653061); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '7', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 7<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '8', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'},
{id: '9', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: 9<br>Formula Expression: Formula String: AVEDEV(C8, B8); Formula Values: AVEDEV(219.88888888888889, 1.0204081632653061); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d61eb55'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'},
{from: '4', to: '5'},
{from: '5', to: '3'},
{from: '8', to: '9'},
{from: '7', to: '9'},
{from: '9', to: '6'},
{from: '2', to: '7'},
{from: '5', to: '8'}
                            ]);