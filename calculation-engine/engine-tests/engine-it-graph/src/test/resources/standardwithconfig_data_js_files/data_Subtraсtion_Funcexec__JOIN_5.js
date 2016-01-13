var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '1', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '2', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '3', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '4', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '5', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -290.0<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '6', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: DEFINE(D2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(-290.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '8', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 8<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '9', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '10', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '11', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 11<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '12', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 12<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '13', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '14', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 14<br>Formula Expression: Formula String: DEFINE(D2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(-290.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '15', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 15<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '17', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 17<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '18', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 18<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '19', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 19<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '20', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 20<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'},
{id: '21', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: -290.0<br>Type: FUNCTION<br>Id: 21<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50e336d9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '3'},
{from: '2', to: '3'},
{from: '3', to: '5'},
{from: '4', to: '5'},
{from: '5', to: '0'},
{from: '13', to: '14'},
{from: '12', to: '14'},
{from: '11', to: '14'},
{from: '10', to: '14'},
{from: '9', to: '14'},
{from: '8', to: '14'},
{from: '14', to: '6'},
{from: '20', to: '21'},
{from: '19', to: '21'},
{from: '18', to: '21'},
{from: '17', to: '21'},
{from: '21', to: '15'},
{from: '5', to: '13'}
                            ]);