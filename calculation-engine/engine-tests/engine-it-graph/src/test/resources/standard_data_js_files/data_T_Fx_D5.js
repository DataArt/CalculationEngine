var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '425', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 425<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7dd712e8'},
{id: '426', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 426<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7dd712e8'},
{id: '427', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: why not?<br>Type: FUNCTION<br>Id: 427<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7dd712e8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '426', to: '427'},
{from: '427', to: '425'}
                            ]);