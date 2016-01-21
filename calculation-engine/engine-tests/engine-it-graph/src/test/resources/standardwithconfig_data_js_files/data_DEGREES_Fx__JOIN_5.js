var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4965', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 4965<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'},
{id: '4966', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 4966<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'},
{id: '4967', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 4967<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'},
{id: '4968', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 4968<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'},
{id: '4969', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 4969<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'},
{id: '4970', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 4970<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@273e622f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4966', to: '4967'},
{from: '4969', to: '4970'},
{from: '4967', to: '4965'},
{from: '4970', to: '4968'}
                            ]);