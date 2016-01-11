var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '10', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '15', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 15<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '4', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '1', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '2', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '9', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 9<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '12', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 12<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '0', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '13', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 13<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '6', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '7', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '17', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 17<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '5', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '8', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '11', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 11<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '16', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 16<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '3', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'},
{id: '14', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 372.0<br>Type: OPERATOR<br>Id: 14<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d154ccd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '3'},
{from: '16', to: '17'},
{from: '2', to: '3'},
{from: '3', to: '5'},
{from: '13', to: '14'},
{from: '9', to: '11'},
{from: '4', to: '5'},
{from: '11', to: '17'},
{from: '5', to: '7'},
{from: '6', to: '7'},
{from: '10', to: '11'},
{from: '17', to: '8'},
{from: '14', to: '16'},
{from: '15', to: '16'},
{from: '7', to: '0'},
{from: '12', to: '14'}
                            ]);