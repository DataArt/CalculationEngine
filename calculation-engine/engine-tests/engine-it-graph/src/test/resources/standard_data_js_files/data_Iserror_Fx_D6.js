var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '544', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 544<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@630d1b2f'},
{id: '542', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 542<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@630d1b2f'},
{id: '543', label: 'C3\n989.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 989.0<br>Type: CELL_WITH_VALUE<br>Id: 543<br>Formula Expression: Formula String: C3; Formula Values: 989.0; Formula Ptg: 989.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@630d1b2f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '543', to: '544'},
{from: '544', to: '542'}
                            ]);