var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2341', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2341<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2342', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 2342<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2343', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 2343<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2344', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 2344<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2345', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2345<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2346', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 2346<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2347', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2347<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2348', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2348<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2349', label: 'E8\n', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 2349<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2350', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2350<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2351', label: 'G2\n', color: '#31b0d5', title: 'Name: G2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2351<br>Formula Expression: Formula String: G2; Formula Values: ; Formula Ptg: ; Ptgs: G2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2352', label: 'H2\n', color: '#31b0d5', title: 'Name: H2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2352<br>Formula Expression: Formula String: H2; Formula Values: ; Formula Ptg: ; Ptgs: H2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2353', label: 'I7\n', color: '#31b0d5', title: 'Name: I7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2353<br>Formula Expression: Formula String: I7; Formula Values: ; Formula Ptg: ; Ptgs: I7 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'},
{id: '2354', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 2354<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79cb8ffa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2342', to: '2344'},
{from: '2344', to: '2346'},
{from: '2346', to: '2348'},
{from: '2352', to: '2354'},
{from: '2343', to: '2344'},
{from: '2345', to: '2346'},
{from: '2347', to: '2348'},
{from: '2353', to: '2354'},
{from: '2350', to: '2354'},
{from: '2351', to: '2354'},
{from: '2348', to: '2341'},
{from: '2354', to: '2349'}
                            ]);