var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D10\nTRUE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'},
{id: '1', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'},
{id: '2', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'},
{id: '3', label: 'B7\n', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3<br>Formula Expression: Formula String: B7; Formula Values: ; Formula Ptg: ; Ptgs: B7 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'},
{id: '4', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 4<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'},
{id: '5', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a262d6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '4'},
{from: '3', to: '4'},
{from: '4', to: '1'},
{from: '1', to: '5'},
{from: '5', to: '0'}
                            ]);