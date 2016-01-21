var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '266', label: 'B8\n-160.0', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: -160.0<br>Type: CELL_WITH_FORMULA<br>Id: 266<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32193bea'},
{id: '267', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 267<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32193bea'},
{id: '268', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 268<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32193bea'},
{id: '269', label: 'DAYS360\n-160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: -160.0<br>Type: FUNCTION<br>Id: 269<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32193bea'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '268', to: '269'},
{from: '267', to: '269'},
{from: '269', to: '266'}
                            ]);