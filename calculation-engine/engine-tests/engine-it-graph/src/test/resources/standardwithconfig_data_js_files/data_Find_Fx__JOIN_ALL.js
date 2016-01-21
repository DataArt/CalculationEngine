var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3079', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 3079<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad40184'},
{id: '3080', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 3080<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad40184'},
{id: '3081', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 3081<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad40184'},
{id: '3082', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: 3082<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad40184'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3080', to: '3082'},
{from: '3081', to: '3082'},
{from: '3082', to: '3079'}
                            ]);