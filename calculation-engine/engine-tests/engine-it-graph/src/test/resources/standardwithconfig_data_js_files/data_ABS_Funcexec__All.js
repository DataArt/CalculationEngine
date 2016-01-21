var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '32', label: 'ABS\n1.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 32<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '33', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 33<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '34', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 34<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '35', label: 'ABS\n7.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 35<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '36', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 36<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '38', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 38<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '39', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 39<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '40', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 40<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '41', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 41<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '43', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 43<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '44', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 44<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '45', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 45<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '46', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 46<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '47', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 47<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '24', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 24<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '25', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 25<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '26', label: 'ABS\n5.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 26<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '27', label: 'E3\n8.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 27<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '28', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 28<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '29', label: 'ABS\n8.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 8.0<br>Type: FUNCTION<br>Id: 29<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '30', label: 'E4\n1.0', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 30<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '31', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 31<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '25', to: '26'},
{from: '28', to: '29'},
{from: '31', to: '32'},
{from: '34', to: '35'},
{from: '39', to: '40'},
{from: '46', to: '47'},
{from: '38', to: '40'},
{from: '45', to: '47'},
{from: '44', to: '47'},
{from: '43', to: '47'},
{from: '26', to: '46'},
{from: '47', to: '41'},
{from: '40', to: '36'},
{from: '26', to: '24'},
{from: '29', to: '27'},
{from: '32', to: '30'},
{from: '35', to: '33'}
                            ]);