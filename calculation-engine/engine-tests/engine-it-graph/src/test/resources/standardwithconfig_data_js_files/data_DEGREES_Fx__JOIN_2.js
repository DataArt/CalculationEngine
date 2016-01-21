var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3862', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 3862<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'},
{id: '3863', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 3863<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'},
{id: '3864', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 3864<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'},
{id: '3865', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 3865<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'},
{id: '3866', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 3866<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'},
{id: '3867', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 3867<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c0bfe9e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3863', to: '3864'},
{from: '3866', to: '3867'},
{from: '3864', to: '3862'},
{from: '3867', to: '3865'}
                            ]);