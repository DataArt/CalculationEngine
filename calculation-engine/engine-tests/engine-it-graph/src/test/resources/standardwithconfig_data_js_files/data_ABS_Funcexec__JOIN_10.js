var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1127', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 1127<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1128', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1128<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1129', label: 'ABS\n5.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 1129<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1130', label: 'E3\n8.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 1130<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1131', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1131<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1132', label: 'ABS\n8.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 8.0<br>Type: FUNCTION<br>Id: 1132<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1133', label: 'E4\n1.0', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 1133<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1134', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1134<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1135', label: 'ABS\n1.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 1135<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1136', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 1136<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1137', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1137<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1138', label: 'ABS\n7.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 1138<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1139', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 1139<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1141', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 1141<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1142', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1142<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1143', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 1143<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1144', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 1144<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1146', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 1146<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1147', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1147<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1148', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1148<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1149', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 1149<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'},
{id: '1150', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1150<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c6634d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1128', to: '1129'},
{from: '1131', to: '1132'},
{from: '1134', to: '1135'},
{from: '1137', to: '1138'},
{from: '1142', to: '1143'},
{from: '1149', to: '1150'},
{from: '1141', to: '1143'},
{from: '1148', to: '1150'},
{from: '1147', to: '1150'},
{from: '1146', to: '1150'},
{from: '1129', to: '1149'},
{from: '1150', to: '1144'},
{from: '1143', to: '1139'},
{from: '1129', to: '1127'},
{from: '1132', to: '1130'},
{from: '1135', to: '1133'},
{from: '1138', to: '1136'}
                            ]);