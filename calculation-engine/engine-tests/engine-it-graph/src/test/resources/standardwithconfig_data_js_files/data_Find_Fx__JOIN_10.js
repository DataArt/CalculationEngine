var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1976', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 1976<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@35650279'},
{id: '1977', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 1977<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@35650279'},
{id: '1978', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 1978<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@35650279'},
{id: '1979', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: 1979<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@35650279'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1978', to: '1979'},
{from: '1977', to: '1979'},
{from: '1979', to: '1976'}
                            ]);