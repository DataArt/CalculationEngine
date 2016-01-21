var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3776', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 3776<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3777', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 3777<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3770', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 3770<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3771', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 3771<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3772', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 3772<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3773', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 3773<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3774', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 3774<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'},
{id: '3775', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 3775<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@79636080'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3775', to: '3777'},
{from: '3776', to: '3777'},
{from: '3773', to: '3777'},
{from: '3774', to: '3777'},
{from: '3771', to: '3777'},
{from: '3772', to: '3777'},
{from: '3777', to: '3770'}
                            ]);