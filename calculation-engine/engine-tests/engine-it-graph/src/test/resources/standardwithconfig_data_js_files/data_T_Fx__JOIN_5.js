var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5200', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: expected<br>Type: IF<br>Id: 5200<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 1408d324-8a3f-4d61-341c-9efe466ac7b0'},
{id: '5201', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 5201<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5203', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 5203<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5204', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 5204<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5205', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: why not?<br>Type: FUNCTION<br>Id: 5205<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5206', label: 'D6\n', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 5206<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5207', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 5207<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5208', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 5208<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5196', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 5196<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5197', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 5197<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5198', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 5198<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'},
{id: '5199', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 5199<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@722e1bff'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5198', to: '5199'},
{from: '5199', to: '5200'},
{from: '5204', to: '5205'},
{from: '5207', to: '5208'},
{from: '5197', to: '5199'},
{from: '5201', to: '5200'},
{from: '5205', to: '5203'},
{from: '5208', to: '5206'},
{from: '5200', to: '5196'}
                            ]);