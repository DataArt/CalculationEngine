var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3056', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3056<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3049', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3049<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3050', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 3050<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3051', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 3051<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3052', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3052<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3053', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3053<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3054', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 3054<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'},
{id: '3055', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 3055<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26d8908e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3050', to: '3052'},
{from: '3054', to: '3056'},
{from: '3051', to: '3052'},
{from: '3055', to: '3056'},
{from: '3052', to: '3049'},
{from: '3056', to: '3053'}
                            ]);