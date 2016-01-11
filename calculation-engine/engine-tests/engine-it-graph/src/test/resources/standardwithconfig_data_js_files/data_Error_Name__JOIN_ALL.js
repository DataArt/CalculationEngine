var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B2\n#NAME?', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@279c4e3b'},
{id: '1', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@279c4e3b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '0'}
                            ]);