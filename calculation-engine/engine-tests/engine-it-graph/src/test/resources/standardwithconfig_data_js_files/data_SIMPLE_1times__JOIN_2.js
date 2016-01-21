var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4352', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4352<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4353', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 4353<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4343', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 4343<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4344', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4344<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4345', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 4345<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4346', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 4346<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4347', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Alias: null<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: 4347<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4348', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 4348<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM([[5.0, 5.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4349', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 4349<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4350', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 4350<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'},
{id: '4351', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 4351<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@34a99d8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4345', to: '4346'},
{from: '4347', to: '4348'},
{from: '4349', to: '4350'},
{from: '4350', to: '4351'},
{from: '4352', to: '4353'},
{from: '4344', to: '4346'},
{from: '4348', to: '4350'},
{from: '4351', to: '4353'},
{from: '4346', to: '4351'},
{from: '4353', to: '4343'}
                            ]);