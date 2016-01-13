var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3bbf9027'},
{id: '2', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3bbf9027'},
{id: '3', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3bbf9027'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '3', to: '0'}
                            ]);