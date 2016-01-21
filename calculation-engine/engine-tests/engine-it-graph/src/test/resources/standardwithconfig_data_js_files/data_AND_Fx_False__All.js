var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '160', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 160<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '161', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 161<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '162', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 162<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '163', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 372.0<br>Type: OPERATOR<br>Id: 163<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '164', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 164<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '165', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 165<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '166', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 166<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '149', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 149<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '150', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 150<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '151', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 151<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '152', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 152<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '153', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 153<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '154', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 154<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '155', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 155<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '156', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 156<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '157', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 157<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '158', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 158<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'},
{id: '159', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 159<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a44431a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '151', to: '152'},
{from: '153', to: '154'},
{from: '155', to: '156'},
{from: '159', to: '160'},
{from: '162', to: '163'},
{from: '164', to: '165'},
{from: '165', to: '166'},
{from: '150', to: '152'},
{from: '152', to: '154'},
{from: '154', to: '156'},
{from: '158', to: '160'},
{from: '161', to: '163'},
{from: '163', to: '165'},
{from: '160', to: '166'},
{from: '166', to: '157'},
{from: '156', to: '149'}
                            ]);