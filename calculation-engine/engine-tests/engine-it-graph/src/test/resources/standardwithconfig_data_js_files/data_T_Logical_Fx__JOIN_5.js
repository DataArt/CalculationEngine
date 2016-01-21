var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5209', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 5209<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79a12552'},
{id: '5210', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 5210<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79a12552'},
{id: '5211', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: expected<br>Type: FUNCTION<br>Id: 5211<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79a12552'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5210', to: '5211'},
{from: '5211', to: '5209'}
                            ]);