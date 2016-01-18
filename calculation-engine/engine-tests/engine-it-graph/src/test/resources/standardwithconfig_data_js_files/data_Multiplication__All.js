var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@900649e'},
{id: '1', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@900649e'},
{id: '2', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@900649e'},
{id: '3', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 35.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@900649e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '3'},
{from: '2', to: '3'},
{from: '3', to: '0'}
                            ]);