var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2240', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 2240<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2241', label: 'ABS\n7.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 2241<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2242', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 2242<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2244', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2244<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2246', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 2246<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2247', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 2247<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2249', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2249<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2250', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2250<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2251', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 2251<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2253', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 2253<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2230', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 2230<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2232', label: 'ABS\n5.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 2232<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2233', label: 'E3\n8.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 2233<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2234', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 2234<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2235', label: 'ABS\n8.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 8.0<br>Type: FUNCTION<br>Id: 2235<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2236', label: 'E4\n1.0', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 2236<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2237', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2237<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2238', label: 'ABS\n1.0', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 2238<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'},
{id: '2239', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 2239<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@28be7fec'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2244', to: '2246'},
{from: '2251', to: '2253'},
{from: '2234', to: '2235'},
{from: '2237', to: '2238'},
{from: '2240', to: '2241'},
{from: '2249', to: '2253'},
{from: '2250', to: '2253'},
{from: '2250', to: '2232'},
{from: '2230', to: '2253'},
{from: '2253', to: '2247'},
{from: '2246', to: '2242'},
{from: '2250', to: '2246'},
{from: '2232', to: '2230'},
{from: '2235', to: '2233'},
{from: '2238', to: '2236'},
{from: '2241', to: '2239'}
                            ]);