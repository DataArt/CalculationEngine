var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4976', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 4976<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4977', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4977<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4978', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 4978<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4979', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4979<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4980', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 4980<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4981', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4981<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4982', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 4982<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'},
{id: '4975', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 4975<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1cd853ee'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4977', to: '4978'},
{from: '4979', to: '4980'},
{from: '4981', to: '4982'},
{from: '4976', to: '4978'},
{from: '4978', to: '4980'},
{from: '4980', to: '4982'},
{from: '4982', to: '4975'}
                            ]);