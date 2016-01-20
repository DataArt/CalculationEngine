var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '1', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '2', label: 'ABS\n5.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '3', label: 'E3\n8.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '4', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '5', label: 'ABS\n8.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 8.0<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '6', label: 'E4\n1.0', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '7', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 7<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '8', label: 'ABS\n1.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 8<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '9', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 9<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '10', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '11', label: 'ABS\n7.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 11<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '12', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '14', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 14<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '15', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 15<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '16', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 16<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '17', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 17<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '19', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 19<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '20', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 20<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '21', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 21<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '22', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 22<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '23', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 23<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '4', to: '5'},
{from: '7', to: '8'},
{from: '10', to: '11'},
{from: '15', to: '16'},
{from: '22', to: '23'},
{from: '14', to: '16'},
{from: '21', to: '23'},
{from: '20', to: '23'},
{from: '19', to: '23'},
{from: '2', to: '22'},
{from: '23', to: '17'},
{from: '16', to: '12'},
{from: '2', to: '0'},
{from: '5', to: '3'},
{from: '8', to: '6'},
{from: '11', to: '9'}
                            ]);