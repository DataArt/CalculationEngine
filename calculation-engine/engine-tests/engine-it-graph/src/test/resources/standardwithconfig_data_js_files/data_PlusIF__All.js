var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: null; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'},
{id: '1', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'},
{id: '2', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'},
{id: '3', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'},
{id: '4', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 4<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 7b4776e2-170f-6d60-73a6-a12336bb6d2e'},
{id: '5', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'},
{id: '7', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: null; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d32c1c7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '3'},
{from: '2', to: '3'},
{from: '5', to: '4'},
{from: '3', to: '4'},
{from: '4', to: '7'},
{from: '7', to: '0'}
                            ]);