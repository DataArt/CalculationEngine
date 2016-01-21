var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1092', label: 'C1\n', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1092<br>Formula Expression: Formula String: C1; Formula Values: ; Formula Ptg: ; Ptgs: C1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1100', label: 'F8\n', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1100<br>Formula Expression: Formula String: F8; Formula Values: ; Formula Ptg: ; Ptgs: F8 Index in Ptgs: 14 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1101', label: ',\n[, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]', color: '#f0ad4e', title: 'Name: ,<br>Alias: RangeA<br>Value: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]<br>Type: OPERATOR<br>Id: 1101<br>Formula Expression: Formula String: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Values: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Ptg: ; Ptgs:  Index in Ptgs: 15 <br>Source Object Id: null'},
{id: '1102', label: 'MEDIAN\n15.8', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 1102<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1067', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1067<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1069', label: 'C3\n15.8', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 1069<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: null; Ptgs: null Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1070', label: 'B2\n5.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1070<br>Formula Expression: Formula String: B2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1072', label: 'A1\n10.8', color: '#31b0d5', title: 'Name: A1<br>Alias: Tax<br>Value: 10.8<br>Type: CELL_WITH_VALUE<br>Id: 1072<br>Formula Expression: Formula String: A1; Formula Values: 10.8; Formula Ptg: 10.8; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '1073', label: '+\n15.8', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 15.8<br>Type: OPERATOR<br>Id: 1073<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1074', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 1074<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1075', label: 'D3\n1232.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 1232.0<br>Type: CELL_WITH_FORMULA<br>Id: 1075<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1076', label: 'A2\n1200.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1200.0<br>Type: CELL_WITH_VALUE<br>Id: 1076<br>Formula Expression: Formula String: A2; Formula Values: 1200.0; Formula Ptg: 1200.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1077', label: 'A3\n30.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 1077<br>Formula Expression: Formula String: A3; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1078', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 1078<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1079', label: 'SUM\n1232.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1232.0<br>Type: FUNCTION<br>Id: 1079<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1080', label: 'D4\n35.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 1080<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1082', label: 'A4\n50.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_VALUE<br>Id: 1082<br>Formula Expression: Formula String: A4; Formula Values: 50.0; Formula Ptg: 50.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1083', label: 'A5\n20.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 1083<br>Formula Expression: Formula String: A5; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1084', label: 'AVERAGE\n35.0', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: My_Sum<br>Value: 35.0<br>Type: FUNCTION<br>Id: 1084<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'},
{id: '1085', label: 'D5\n15.8', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 1085<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@776802b0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1070', to: '1101'},
{from: '1069', to: '1101'},
{from: '1072', to: '1073'},
{from: '1078', to: '1079'},
{from: '1083', to: '1084'},
{from: '1100', to: '1101'},
{from: '1101', to: '1102'},
{from: '1077', to: '1079'},
{from: '1082', to: '1084'},
{from: '1067', to: '1101'},
{from: '1070', to: '1073'},
{from: '1076', to: '1079'},
{from: '1069', to: '1074'},
{from: '1092', to: '1101'},
{from: '1102', to: '1085'},
{from: '1074', to: '1067'},
{from: '1076', to: '1101'},
{from: '1075', to: '1101'},
{from: '1073', to: '1069'},
{from: '1079', to: '1075'},
{from: '1084', to: '1080'},
{from: '1072', to: '1101'}
                            ]);