var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '873', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 873<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6331250e'},
{id: '874', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 874<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6331250e'},
{id: '875', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 875<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6331250e'},
{id: '876', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: 876<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6331250e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '875', to: '876'},
{from: '874', to: '876'},
{from: '876', to: '873'}
                            ]);