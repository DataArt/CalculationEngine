var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2144', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 2144<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2145', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 2145<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2146', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2146<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2147', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 2147<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2137', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 2137<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM([[5.0, 5.0, 5.0]]) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2138', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2138<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2139', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 2139<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2140', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 2140<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2141', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Alias: null<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: 2141<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2142', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 2142<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM([[5.0, 5.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'},
{id: '2143', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 2143<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fbe70d8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2138', to: '2140'},
{from: '2142', to: '2144'},
{from: '2145', to: '2147'},
{from: '2139', to: '2140'},
{from: '2141', to: '2142'},
{from: '2143', to: '2144'},
{from: '2144', to: '2145'},
{from: '2146', to: '2147'},
{from: '2147', to: '2137'},
{from: '2140', to: '2145'}
                            ]);