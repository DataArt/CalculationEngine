var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2759', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 2759<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'},
{id: '2760', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 2760<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'},
{id: '2761', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 2761<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'},
{id: '2762', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 2762<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'},
{id: '2763', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 2763<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'},
{id: '2764', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 2764<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@295b07e0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2760', to: '2761'},
{from: '2763', to: '2764'},
{from: '2761', to: '2759'},
{from: '2764', to: '2762'}
                            ]);