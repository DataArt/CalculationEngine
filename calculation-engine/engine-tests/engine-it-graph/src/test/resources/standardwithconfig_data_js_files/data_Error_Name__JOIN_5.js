var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '59b6418e-ad49-4091-8d21-998ca163e4b5', label: 'B2\n0.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_FORMULA<br>Id: 59b6418e-ad49-4091-8d21-998ca163e4b5<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'},
{id: '1d5a3127-fb1e-4f11-8c5c-7ae3e96f129b', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: 1d5a3127-fb1e-4f11-8c5c-7ae3e96f129b<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@222545dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1d5a3127-fb1e-4f11-8c5c-7ae3e96f129b', to: '59b6418e-ad49-4091-8d21-998ca163e4b5'}
                            ]);