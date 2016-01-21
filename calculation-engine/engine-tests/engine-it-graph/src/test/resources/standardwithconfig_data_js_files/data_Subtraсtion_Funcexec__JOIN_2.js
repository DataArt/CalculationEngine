var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4000', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -290.0<br>Type: OPERATOR<br>Id: 4000<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4001', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 4001<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4003', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 4003<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4004', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 4004<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4005', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 4005<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4007', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 4007<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4009', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 4009<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4010', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 4010<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4012', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 4012<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4015', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 4015<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '4016', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: -290.0<br>Type: FUNCTION<br>Id: 4016<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '3995', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 3995<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'},
{id: '3998', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 3998<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f64f99f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3998', to: '4000'},
{from: '4007', to: '4009'},
{from: '4015', to: '4016'},
{from: '4005', to: '4009'},
{from: '4012', to: '4016'},
{from: '4003', to: '4009'},
{from: '4004', to: '4009'},
{from: '4004', to: '4016'},
{from: '4005', to: '4016'},
{from: '3995', to: '4009'},
{from: '4015', to: '4000'},
{from: '4009', to: '4001'},
{from: '4016', to: '4010'},
{from: '4004', to: '3998'},
{from: '4015', to: '4009'},
{from: '4005', to: '3998'},
{from: '4000', to: '3995'}
                            ]);