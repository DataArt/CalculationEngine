var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cc41abc'},
{id: '1', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 1<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cc41abc'},
{id: '2', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cc41abc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);