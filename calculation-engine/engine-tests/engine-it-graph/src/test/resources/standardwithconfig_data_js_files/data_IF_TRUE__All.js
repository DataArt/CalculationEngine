var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '614', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 614<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5241cf67'},
{id: '615', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 615<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5241cf67'},
{id: '616', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 616<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5241cf67'},
{id: '617', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: TRUE<br>Type: OPERATOR<br>Id: 617<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5241cf67'},
{id: '618', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 65.0<br>Type: IF<br>Id: 618<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 0ad26c65-3507-9277-92e3-2581fafb5c5d'},
{id: '619', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 619<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5241cf67'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '619', to: '618'},
{from: '616', to: '617'},
{from: '617', to: '618'},
{from: '615', to: '617'},
{from: '618', to: '614'}
                            ]);