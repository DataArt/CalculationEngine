var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '10', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 10<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '6', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '4', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Alias: null<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: 4<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '8', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 8<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '9', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '1', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '2', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '3', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '5', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM(5.0, 5.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '0', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'},
{id: '7', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM(5.0, 5.0, 5.0) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@155767a7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7', to: '8'},
{from: '9', to: '10'},
{from: '5', to: '7'},
{from: '6', to: '7'},
{from: '3', to: '8'},
{from: '2', to: '3'},
{from: '8', to: '10'},
{from: '1', to: '3'},
{from: '10', to: '0'},
{from: '4', to: '5'}
                            ]);