var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4152', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4152<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4153', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 4153<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4154', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 4154<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4155', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 4155<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4156', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4156<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4157', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 4157<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4158', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 4158<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'},
{id: '4159', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 4159<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58c16efd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4154', to: '4155'},
{from: '4158', to: '4159'},
{from: '4153', to: '4155'},
{from: '4157', to: '4159'},
{from: '4155', to: '4152'},
{from: '4159', to: '4156'}
                            ]);