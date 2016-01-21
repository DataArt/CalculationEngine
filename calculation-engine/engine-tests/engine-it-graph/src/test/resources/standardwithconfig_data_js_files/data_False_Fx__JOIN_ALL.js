var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3075', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_REFERENCE<br>Id: 3075<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@13390a96'},
{id: '3076', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 3076<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@13390a96'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3076', to: '3075'}
                            ]);