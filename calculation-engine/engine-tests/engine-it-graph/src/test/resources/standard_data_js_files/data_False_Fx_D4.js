var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '480', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 480<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e8fadb0'},
{id: '479', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_REFERENCE<br>Id: 479<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e8fadb0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '480', to: '479'}
                            ]);