var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2436', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Alias: null<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 2436<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2437', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: 2437<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2439', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Alias: null<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 2439<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2440', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 2440<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2441', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: 2441<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]), AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2442', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 2442<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2443', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 2443<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'},
{id: '2444', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: 2444<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]), AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6bb4cc0e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2442', to: '2444'},
{from: '2436', to: '2437'},
{from: '2439', to: '2440'},
{from: '2443', to: '2444'},
{from: '2440', to: '2443'},
{from: '2437', to: '2442'},
{from: '2444', to: '2441'}
                            ]);