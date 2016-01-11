var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5eb0a686'},
{id: '1', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5eb0a686'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '0'}
                            ]);