var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1656', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 1656<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'},
{id: '1657', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 1657<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'},
{id: '1658', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 1658<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'},
{id: '1659', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 1659<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'},
{id: '1660', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 1660<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'},
{id: '1661', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 1661<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4bd5849e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1657', to: '1658'},
{from: '1660', to: '1661'},
{from: '1658', to: '1656'},
{from: '1661', to: '1659'}
                            ]);