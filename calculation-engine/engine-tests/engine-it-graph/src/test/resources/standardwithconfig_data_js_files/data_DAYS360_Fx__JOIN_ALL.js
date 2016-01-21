var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2701', label: 'B5\n24.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 24.0<br>Type: CELL_WITH_FORMULA<br>Id: 2701<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2702', label: 'A1\n42005.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 42005.0<br>Type: CELL_WITH_VALUE<br>Id: 2702<br>Formula Expression: Formula String: A1; Formula Values: 42005.0; Formula Ptg: 42005.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2703', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 2703<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2704', label: 'DAYS360\n24.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 24.0<br>Type: FUNCTION<br>Id: 2704<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2705', label: 'B6\n154.0', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 154.0<br>Type: CELL_WITH_FORMULA<br>Id: 2705<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2708', label: 'DAYS360\n154.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 154.0<br>Type: FUNCTION<br>Id: 2708<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2709', label: 'B7\n160.0', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: 160.0<br>Type: CELL_WITH_FORMULA<br>Id: 2709<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2711', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 2711<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2712', label: 'DAYS360\n160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 160.0<br>Type: FUNCTION<br>Id: 2712<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2713', label: 'B8\n-160.0', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: -160.0<br>Type: CELL_WITH_FORMULA<br>Id: 2713<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2715', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 2715<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'},
{id: '2716', label: 'DAYS360\n-160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: -160.0<br>Type: FUNCTION<br>Id: 2716<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@166ce247'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2702', to: '2704'},
{from: '2703', to: '2704'},
{from: '2711', to: '2712'},
{from: '2715', to: '2716'},
{from: '2703', to: '2708'},
{from: '2711', to: '2716'},
{from: '2715', to: '2708'},
{from: '2704', to: '2701'},
{from: '2708', to: '2705'},
{from: '2712', to: '2709'},
{from: '2716', to: '2713'},
{from: '2715', to: '2712'}
                            ]);