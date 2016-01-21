var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1040', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 1040<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1041', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 1041<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1042', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 1042<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1043', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1043<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1044', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 1044<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1034', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 1034<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1035', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1035<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1036', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 1036<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1037', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 1037<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1038', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Alias: null<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: 1038<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'},
{id: '1039', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 1039<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM([[5.0, 5.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e3cdec2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1036', to: '1037'},
{from: '1038', to: '1039'},
{from: '1040', to: '1041'},
{from: '1041', to: '1042'},
{from: '1043', to: '1044'},
{from: '1035', to: '1037'},
{from: '1039', to: '1041'},
{from: '1042', to: '1044'},
{from: '1037', to: '1042'},
{from: '1044', to: '1034'}
                            ]);