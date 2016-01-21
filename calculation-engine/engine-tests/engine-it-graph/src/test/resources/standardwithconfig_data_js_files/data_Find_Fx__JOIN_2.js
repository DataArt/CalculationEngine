var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4182', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 4182<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@45482f82'},
{id: '4183', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 4183<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@45482f82'},
{id: '4184', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 4184<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@45482f82'},
{id: '4185', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: 4185<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@45482f82'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4184', to: '4185'},
{from: '4183', to: '4185'},
{from: '4185', to: '4182'}
                            ]);