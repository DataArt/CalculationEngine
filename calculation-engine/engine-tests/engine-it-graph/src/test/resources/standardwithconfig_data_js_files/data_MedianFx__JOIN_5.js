var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5052', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 5052<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN([[6.0, 4.0, 7.0, 65.0, 7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@56f4f385'},
{id: '5053', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Alias: null<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 5053<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@56f4f385'},
{id: '5054', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 5054<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN([[6.0, 4.0, 7.0, 65.0, 7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@56f4f385'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5053', to: '5054'},
{from: '5054', to: '5052'}
                            ]);