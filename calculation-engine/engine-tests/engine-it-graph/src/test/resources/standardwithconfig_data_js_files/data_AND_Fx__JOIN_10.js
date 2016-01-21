var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1248', label: 'G2\n', color: '#31b0d5', title: 'Name: G2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1248<br>Formula Expression: Formula String: G2; Formula Values: ; Formula Ptg: ; Ptgs: G2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1249', label: 'H2\n', color: '#31b0d5', title: 'Name: H2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1249<br>Formula Expression: Formula String: H2; Formula Values: ; Formula Ptg: ; Ptgs: H2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1250', label: 'I7\n', color: '#31b0d5', title: 'Name: I7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1250<br>Formula Expression: Formula String: I7; Formula Values: ; Formula Ptg: ; Ptgs: I7 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1251', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 1251<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1238', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 1238<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1239', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 1239<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1240', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 1240<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1241', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 1241<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1242', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1242<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1243', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 1243<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1244', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1244<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1245', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 1245<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1246', label: 'E8\n', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 1246<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'},
{id: '1247', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1247<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f985a86'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1240', to: '1241'},
{from: '1242', to: '1243'},
{from: '1244', to: '1245'},
{from: '1250', to: '1251'},
{from: '1239', to: '1241'},
{from: '1241', to: '1243'},
{from: '1243', to: '1245'},
{from: '1249', to: '1251'},
{from: '1248', to: '1251'},
{from: '1247', to: '1251'},
{from: '1245', to: '1238'},
{from: '1251', to: '1246'}
                            ]);