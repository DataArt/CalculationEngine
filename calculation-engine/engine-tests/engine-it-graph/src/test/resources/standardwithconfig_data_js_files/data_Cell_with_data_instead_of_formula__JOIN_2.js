var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3689', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_REFERENCE<br>Id: 3689<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4301fa39'},
{id: '3690', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 3690<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4301fa39'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3690', to: '3689'}
                            ]);