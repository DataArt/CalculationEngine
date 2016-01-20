var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E12\n41686.049999999996', color: '#31b0d5', title: 'Name: E12<br>Alias: null<br>Value: 41686.049999999996<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'},
{id: '1', label: 'E5\n107.3', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 107.3<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: E5; Formula Values: 107.3; Formula Ptg: 107.3; Ptgs: E5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'},
{id: '2', label: 'E4\n77.7', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: E4; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: E4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'},
{id: '3', label: 'VALUE\n0.2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.2<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 0.2; Formula Ptg: 0.2; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'},
{id: '4', label: '/\n388.5', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 388.5<br>Type: OPERATOR<br>Id: 4<br>Formula Expression: Formula String: E4 / VALUE; Formula Values: 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'},
{id: '5', label: '*\n41686.049999999996', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 41686.049999999996<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f3187b0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '4'},
{from: '4', to: '5'},
{from: '2', to: '4'},
{from: '1', to: '5'},
{from: '5', to: '0'}
                            ]);