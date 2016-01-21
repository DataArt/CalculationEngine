var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '674', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 674<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '675', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 675<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '676', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 676<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '677', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 677<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '678', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Alias: null<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: 678<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '679', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 679<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM([[5.0, 5.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '680', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 680<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '681', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 681<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '682', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 682<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '683', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 683<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'},
{id: '684', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 684<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@63411512'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '676', to: '677'},
{from: '678', to: '679'},
{from: '680', to: '681'},
{from: '681', to: '682'},
{from: '683', to: '684'},
{from: '675', to: '677'},
{from: '679', to: '681'},
{from: '682', to: '684'},
{from: '677', to: '682'},
{from: '684', to: '674'}
                            ]);