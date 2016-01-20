var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B10\n5.0', color: '#31b0d5', title: 'Name: B10<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: CHOOSE(D2, D3, D4, D6, D7, D8, E7, C7, C6, C4, C3, VALUE); Formula Values: CHOOSE(5.0, 2.0, 5.0, 23.0, 0.974, 0.4, , 23.0, 5.0, 0.0, 1.0, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '1', label: 'VALUE\n9.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 9.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '2', label: 'C3\n1.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '3', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '4', label: 'C6\n5.0', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C6; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C6 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '5', label: 'C7\n23.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: C7; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: C7 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '6', label: 'E7\n', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 6<br>Formula Expression: Formula String: E7; Formula Values: ; Formula Ptg: ; Ptgs: E7 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '7', label: 'D8\n0.4', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 7<br>Formula Expression: Formula String: D8; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D8 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '8', label: 'D7\n0.974', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: 0.974<br>Type: CELL_WITH_VALUE<br>Id: 8<br>Formula Expression: Formula String: D7; Formula Values: 0.974; Formula Ptg: 0.974; Ptgs: D7 Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '9', label: 'D6\n23.0', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: D6; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: D6 Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '10', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '11', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 11<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '12', label: 'D2\n5.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 12<br>Formula Expression: Formula String: D2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D2 Index in Ptgs: 11 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'},
{id: '13', label: 'CHOOSE\n5.0', color: '#f0ad4e', title: 'Name: CHOOSE<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 13<br>Formula Expression: Formula String: CHOOSE(D2, D3, D4, D6, D7, D8, E7, C7, C6, C4, C3, VALUE); Formula Values: CHOOSE(5.0, 2.0, 5.0, 23.0, 0.974, 0.4, , 23.0, 5.0, 0.0, 1.0, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 12 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36060e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '12', to: '13'},
{from: '11', to: '13'},
{from: '10', to: '13'},
{from: '9', to: '13'},
{from: '8', to: '13'},
{from: '7', to: '13'},
{from: '6', to: '13'},
{from: '5', to: '13'},
{from: '4', to: '13'},
{from: '3', to: '13'},
{from: '2', to: '13'},
{from: '1', to: '13'},
{from: '13', to: '0'}
                            ]);