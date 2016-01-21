var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4736', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 4736<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24381e4a'},
{id: '4737', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 5.2<br>Type: FUNCTION<br>Id: 4737<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE([[12.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24381e4a'},
{id: '4735', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 4735<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE([[12.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24381e4a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4736', to: '4737'},
{from: '4737', to: '4735'}
                            ]);