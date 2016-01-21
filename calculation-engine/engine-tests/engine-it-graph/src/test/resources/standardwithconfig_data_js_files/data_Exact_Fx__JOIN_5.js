var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5255', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5255<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5256', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 5256<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5257', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 5257<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5258', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5258<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5259', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5259<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5260', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 5260<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5261', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 5261<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'},
{id: '5262', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5262<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4700db93'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5257', to: '5258'},
{from: '5261', to: '5262'},
{from: '5256', to: '5258'},
{from: '5260', to: '5262'},
{from: '5258', to: '5255'},
{from: '5262', to: '5259'}
                            ]);