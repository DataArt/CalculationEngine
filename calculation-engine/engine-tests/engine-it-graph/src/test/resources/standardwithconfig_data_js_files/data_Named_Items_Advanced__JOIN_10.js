var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2176', label: '+\n15.8', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 15.8<br>Type: OPERATOR<br>Id: 2176<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2177', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2177<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2178', label: 'D3\n1232.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 1232.0<br>Type: CELL_WITH_FORMULA<br>Id: 2178<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2179', label: 'A2\n1200.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1200.0<br>Type: CELL_WITH_VALUE<br>Id: 2179<br>Formula Expression: Formula String: A2; Formula Values: 1200.0; Formula Ptg: 1200.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2180', label: 'A3\n30.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 2180<br>Formula Expression: Formula String: A3; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2181', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 2181<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2182', label: 'SUM\n1232.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1232.0<br>Type: FUNCTION<br>Id: 2182<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2183', label: 'D4\n35.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 2183<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2185', label: 'A4\n50.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_VALUE<br>Id: 2185<br>Formula Expression: Formula String: A4; Formula Values: 50.0; Formula Ptg: 50.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2186', label: 'A5\n20.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 2186<br>Formula Expression: Formula String: A5; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2187', label: 'AVERAGE\n35.0', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: My_Sum<br>Value: 35.0<br>Type: FUNCTION<br>Id: 2187<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2188', label: 'D5\n15.8', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 2188<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2195', label: 'C1\n', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2195<br>Formula Expression: Formula String: C1; Formula Values: ; Formula Ptg: ; Ptgs: C1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2203', label: 'F8\n', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2203<br>Formula Expression: Formula String: F8; Formula Values: ; Formula Ptg: ; Ptgs: F8 Index in Ptgs: 14 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2204', label: ',\n[, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]', color: '#f0ad4e', title: 'Name: ,<br>Alias: RangeA<br>Value: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]<br>Type: OPERATOR<br>Id: 2204<br>Formula Expression: Formula String: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Values: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Ptg: ; Ptgs:  Index in Ptgs: 15 <br>Source Object Id: null'},
{id: '2205', label: 'MEDIAN\n15.8', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 2205<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2170', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2170<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2172', label: 'C3\n15.8', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 2172<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: null; Ptgs: null Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2173', label: 'B2\n5.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2173<br>Formula Expression: Formula String: B2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3312f4f4'},
{id: '2175', label: 'A1\n10.8', color: '#31b0d5', title: 'Name: A1<br>Alias: Tax<br>Value: 10.8<br>Type: CELL_WITH_VALUE<br>Id: 2175<br>Formula Expression: Formula String: A1; Formula Values: 10.8; Formula Ptg: 10.8; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: null'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2172', to: '2204'},
{from: '2173', to: '2204'},
{from: '2180', to: '2182'},
{from: '2185', to: '2187'},
{from: '2170', to: '2204'},
{from: '2175', to: '2176'},
{from: '2181', to: '2182'},
{from: '2186', to: '2187'},
{from: '2203', to: '2204'},
{from: '2204', to: '2205'},
{from: '2173', to: '2176'},
{from: '2179', to: '2182'},
{from: '2172', to: '2177'},
{from: '2195', to: '2204'},
{from: '2205', to: '2188'},
{from: '2178', to: '2204'},
{from: '2177', to: '2170'},
{from: '2179', to: '2204'},
{from: '2176', to: '2172'},
{from: '2182', to: '2178'},
{from: '2187', to: '2183'},
{from: '2175', to: '2204'}
                            ]);