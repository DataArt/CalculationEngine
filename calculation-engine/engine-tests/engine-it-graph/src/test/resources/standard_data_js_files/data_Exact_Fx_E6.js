var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64e1dd11'},
{id: '1', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64e1dd11'},
{id: '2', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64e1dd11'},
{id: '3', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64e1dd11'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '1', to: '3'},
{from: '3', to: '0'}
                            ]);