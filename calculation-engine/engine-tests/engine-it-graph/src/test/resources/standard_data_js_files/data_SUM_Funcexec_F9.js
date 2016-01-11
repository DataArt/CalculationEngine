var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 5<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'},
{id: '2', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'},
{id: '0', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'},
{id: '3', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'},
{id: '4', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'},
{id: '6', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 6<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@19382338'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5', to: '6'},
{from: '6', to: '0'},
{from: '2', to: '6'},
{from: '3', to: '6'},
{from: '4', to: '6'}
                            ]);