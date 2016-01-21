var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '563', label: 'D10\nTRUE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 563<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'},
{id: '564', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 564<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'},
{id: '565', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 565<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'},
{id: '566', label: 'B7\n', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 566<br>Formula Expression: Formula String: B7; Formula Values: ; Formula Ptg: ; Ptgs: B7 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'},
{id: '567', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 567<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'},
{id: '568', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 568<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e1218b4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '566', to: '567'},
{from: '565', to: '567'},
{from: '564', to: '568'},
{from: '568', to: '563'},
{from: '567', to: '564'}
                            ]);