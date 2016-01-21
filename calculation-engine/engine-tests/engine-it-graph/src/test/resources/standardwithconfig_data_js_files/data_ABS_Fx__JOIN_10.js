var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1120', label: 'SUM\n188015.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 188015.0<br>Type: FUNCTION<br>Id: 1120<br>Formula Expression: Formula String: SUM(C1:C6); Formula Values: SUM([[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1121', label: 'D7\n736.61', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: 736.61<br>Type: CELL_WITH_FORMULA<br>Id: 1121<br>Formula Expression: Formula String: SUM(D1:D6); Formula Values: SUM([[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1122', label: 'D1:D6\n[[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]', color: '#31b0d5', title: 'Name: D1:D6<br>Alias: null<br>Value: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]<br>Type: RANGE<br>Id: 1122<br>Formula Expression: Formula String: D1:D6; Formula Values: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]; Formula Ptg: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]; Ptgs: D1:D6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1123', label: 'SUM\n736.61', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 736.61<br>Type: FUNCTION<br>Id: 1123<br>Formula Expression: Formula String: SUM(D1:D6); Formula Values: SUM([[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1124', label: 'E8\n77.7', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_FORMULA<br>Id: 1124<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1125', label: 'D3\n77.7', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 1125<br>Formula Expression: Formula String: D3; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1126', label: 'ABS\n77.7', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 77.7<br>Type: FUNCTION<br>Id: 1126<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1103', label: 'A7\n170784.0', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: 170784.0<br>Type: CELL_WITH_FORMULA<br>Id: 1103<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5 + A6; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0 + 30398.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1104', label: 'A1\n61340.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 61340.0<br>Type: CELL_WITH_VALUE<br>Id: 1104<br>Formula Expression: Formula String: A1; Formula Values: 61340.0; Formula Ptg: 61340.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1105', label: 'A2\n6816.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 6816.0<br>Type: CELL_WITH_VALUE<br>Id: 1105<br>Formula Expression: Formula String: A2; Formula Values: 6816.0; Formula Ptg: 6816.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1106', label: '+\n68156.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 68156.0<br>Type: OPERATOR<br>Id: 1106<br>Formula Expression: Formula String: A1 + A2; Formula Values: 61340.0 + 6816.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1107', label: 'A3\n2742.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 2742.0<br>Type: CELL_WITH_VALUE<br>Id: 1107<br>Formula Expression: Formula String: A3; Formula Values: 2742.0; Formula Ptg: 2742.0; Ptgs: A3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1108', label: '+\n70898.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 70898.0<br>Type: OPERATOR<br>Id: 1108<br>Formula Expression: Formula String: A1 + A2 + A3; Formula Values: 61340.0 + 6816.0 + 2742.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1109', label: 'A4\n65414.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 65414.0<br>Type: CELL_WITH_VALUE<br>Id: 1109<br>Formula Expression: Formula String: A4; Formula Values: 65414.0; Formula Ptg: 65414.0; Ptgs: A4 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1110', label: '+\n136312.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 136312.0<br>Type: OPERATOR<br>Id: 1110<br>Formula Expression: Formula String: A1 + A2 + A3 + A4; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1111', label: 'A5\n4074.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 4074.0<br>Type: CELL_WITH_VALUE<br>Id: 1111<br>Formula Expression: Formula String: A5; Formula Values: 4074.0; Formula Ptg: 4074.0; Ptgs: A5 Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1112', label: '+\n140386.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 140386.0<br>Type: OPERATOR<br>Id: 1112<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1113', label: 'A6\n30398.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 30398.0<br>Type: CELL_WITH_VALUE<br>Id: 1113<br>Formula Expression: Formula String: A6; Formula Values: 30398.0; Formula Ptg: 30398.0; Ptgs: A6 Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1114', label: '+\n170784.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 170784.0<br>Type: OPERATOR<br>Id: 1114<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5 + A6; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0 + 30398.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1115', label: 'B7\n173177.0', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: 173177.0<br>Type: CELL_WITH_FORMULA<br>Id: 1115<br>Formula Expression: Formula String: SUM(B1:B6); Formula Values: SUM([[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1116', label: 'B1:B6\n...', color: '#31b0d5', title: 'Name: B1:B6<br>Alias: null<br>Value: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]<br>Type: RANGE<br>Id: 1116<br>Formula Expression: Formula String: B1:B6; Formula Values: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]; Formula Ptg: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]; Ptgs: B1:B6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1117', label: 'SUM\n173177.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 173177.0<br>Type: FUNCTION<br>Id: 1117<br>Formula Expression: Formula String: SUM(B1:B6); Formula Values: SUM([[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1118', label: 'C7\n188015.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 188015.0<br>Type: CELL_WITH_FORMULA<br>Id: 1118<br>Formula Expression: Formula String: SUM(C1:C6); Formula Values: SUM([[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'},
{id: '1119', label: 'C1:C6\n...', color: '#31b0d5', title: 'Name: C1:C6<br>Alias: null<br>Value: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]<br>Type: RANGE<br>Id: 1119<br>Formula Expression: Formula String: C1:C6; Formula Values: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]; Formula Ptg: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]; Ptgs: C1:C6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@348d18a3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1116', to: '1117'},
{from: '1122', to: '1123'},
{from: '1104', to: '1106'},
{from: '1106', to: '1108'},
{from: '1108', to: '1110'},
{from: '1110', to: '1112'},
{from: '1112', to: '1114'},
{from: '1125', to: '1122'},
{from: '1117', to: '1115'},
{from: '1123', to: '1121'},
{from: '1105', to: '1106'},
{from: '1107', to: '1108'},
{from: '1109', to: '1110'},
{from: '1111', to: '1112'},
{from: '1113', to: '1114'},
{from: '1119', to: '1120'},
{from: '1125', to: '1126'},
{from: '1114', to: '1103'},
{from: '1120', to: '1118'},
{from: '1126', to: '1124'}
                            ]);