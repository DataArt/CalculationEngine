var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '483', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 483<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9d82f9'},
{id: '484', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 484<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9d82f9'},
{id: '485', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 485<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9d82f9'},
{id: '486', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: 486<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9d82f9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '485', to: '486'},
{from: '484', to: '486'},
{from: '486', to: '483'}
                            ]);