var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '646', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 646<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'},
{id: '647', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 647<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'},
{id: '648', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 648<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'},
{id: '649', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 35.0<br>Type: OPERATOR<br>Id: 649<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '648', to: '649'},
{from: '647', to: '649'},
{from: '649', to: '646'}
                            ]);