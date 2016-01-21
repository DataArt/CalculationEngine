var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2768', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 4.0<br>Type: OPERATOR<br>Id: 2768<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ef0e576'},
{id: '2765', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 2765<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ef0e576'},
{id: '2766', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 2766<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ef0e576'},
{id: '2767', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 2767<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ef0e576'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2766', to: '2768'},
{from: '2767', to: '2768'},
{from: '2768', to: '2765'}
                            ]);