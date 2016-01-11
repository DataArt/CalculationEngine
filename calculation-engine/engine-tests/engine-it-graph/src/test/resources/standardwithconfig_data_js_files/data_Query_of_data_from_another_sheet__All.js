var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '19', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 19<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '11', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 505.0<br>Type: OPERATOR<br>Id: 11<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '1', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '8', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 8<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '21', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 21<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '5', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 55.0<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '10', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '18', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 18<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '4', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '16', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '17', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 17<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '2', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '14', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 14<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '0', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '3', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '6', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '9', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 500.0<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '20', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 20<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '15', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 15<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '23', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: 23<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '12', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '7', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 7<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '22', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 22<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'},
{id: '13', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 13<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@36ac8a63'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '10', to: '11'},
{from: '15', to: '17'},
{from: '14', to: '15'},
{from: '22', to: '23'},
{from: '4', to: '5'},
{from: '16', to: '17'},
{from: '19', to: '21'},
{from: '21', to: '23'},
{from: '2', to: '3'},
{from: '1', to: '3'},
{from: '8', to: '9'},
{from: '13', to: '15'},
{from: '17', to: '12'},
{from: '7', to: '9'},
{from: '23', to: '18'},
{from: '9', to: '11'},
{from: '20', to: '21'},
{from: '5', to: '0'},
{from: '3', to: '5'},
{from: '11', to: '6'}
                            ]);