var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2672', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 2672<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2673', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 2673<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2674', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 2674<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2667', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 2667<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2668', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 2668<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2669', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 2669<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2670', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 2670<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'},
{id: '2671', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 2671<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26ffd2c0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2672', to: '2674'},
{from: '2673', to: '2674'},
{from: '2670', to: '2674'},
{from: '2671', to: '2674'},
{from: '2668', to: '2674'},
{from: '2669', to: '2674'},
{from: '2674', to: '2667'}
                            ]);