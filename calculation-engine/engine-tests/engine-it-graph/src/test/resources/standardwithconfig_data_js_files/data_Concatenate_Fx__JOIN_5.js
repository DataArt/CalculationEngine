var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4880', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 4880<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4873', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 4873<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4874', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 4874<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4875', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 4875<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4876', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 4876<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4877', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 4877<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4878', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 4878<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'},
{id: '4879', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 4879<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c0b10ae'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4879', to: '4880'},
{from: '4878', to: '4880'},
{from: '4875', to: '4880'},
{from: '4874', to: '4880'},
{from: '4877', to: '4880'},
{from: '4876', to: '4880'},
{from: '4880', to: '4873'}
                            ]);