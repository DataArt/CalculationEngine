var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS([[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@51aaa9d4'},
{id: '1', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Alias: null<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: 1<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@51aaa9d4'},
{id: '2', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS([[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@51aaa9d4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);