var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3077', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_REFERENCE<br>Id: 3077<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5fe3b058'},
{id: '3078', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 3078<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5fe3b058'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3078', to: '3077'}
                            ]);