var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4547', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4547<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4548', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 4548<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4549', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 4549<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4550', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 4550<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4551', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4551<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4552', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 4552<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4553', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4553<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4554', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 4554<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4555', label: 'E8\n', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 4555<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4556', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4556<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4557', label: 'G2\n', color: '#31b0d5', title: 'Name: G2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4557<br>Formula Expression: Formula String: G2; Formula Values: ; Formula Ptg: ; Ptgs: G2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4558', label: 'H2\n', color: '#31b0d5', title: 'Name: H2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4558<br>Formula Expression: Formula String: H2; Formula Values: ; Formula Ptg: ; Ptgs: H2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4559', label: 'I7\n', color: '#31b0d5', title: 'Name: I7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 4559<br>Formula Expression: Formula String: I7; Formula Values: ; Formula Ptg: ; Ptgs: I7 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'},
{id: '4560', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 4560<br>Formula Expression: Formula String: CONCATENATE(I7, H2, G2, F1); Formula Values: CONCATENATE(, , , ); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4d529dbf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4549', to: '4550'},
{from: '4551', to: '4552'},
{from: '4553', to: '4554'},
{from: '4559', to: '4560'},
{from: '4548', to: '4550'},
{from: '4550', to: '4552'},
{from: '4552', to: '4554'},
{from: '4558', to: '4560'},
{from: '4557', to: '4560'},
{from: '4556', to: '4560'},
{from: '4554', to: '4547'},
{from: '4560', to: '4555'}
                            ]);