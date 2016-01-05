var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c959f818-553b-479b-8a64-dbc52f39e429', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: c959f818-553b-479b-8a64-dbc52f39e429<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@478190fc'},
{id: '33eec1ca-0cd5-4fd4-9324-9a7fbbd34fe9', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 33eec1ca-0cd5-4fd4-9324-9a7fbbd34fe9<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@478190fc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33eec1ca-0cd5-4fd4-9324-9a7fbbd34fe9', to: 'c959f818-553b-479b-8a64-dbc52f39e429'}
                            ]);