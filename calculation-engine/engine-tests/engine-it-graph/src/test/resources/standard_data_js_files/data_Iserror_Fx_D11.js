var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D11\nFALSE', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM([[2.0], [6.0], [5.0], [7.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ad3d266'},
{id: '1', label: 'E2\n20.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[2.0], [6.0], [5.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ad3d266'},
{id: '2', label: 'A2:A5\n[[2.0], [6.0], [5.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[2.0], [6.0], [5.0], [7.0]]<br>Type: RANGE<br>Id: 2<br>Formula Expression: Formula String: A2:A5; Formula Values: [[2.0], [6.0], [5.0], [7.0]]; Formula Ptg: [[2.0], [6.0], [5.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ad3d266'},
{id: '3', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[2.0], [6.0], [5.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ad3d266'},
{id: '4', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 4<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM([[2.0], [6.0], [5.0], [7.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ad3d266'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '3', to: '1'},
{from: '1', to: '4'},
{from: '4', to: '0'}
                            ]);