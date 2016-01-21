var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3424', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 3424<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3426', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 3426<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3427', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 3427<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3430', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 3430<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3432', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 3432<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3433', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 3433<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3435', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 3435<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3438', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 3438<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3439', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 790.0<br>Type: FUNCTION<br>Id: 3439<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3418', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 3418<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3420', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 3420<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3421', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 490.0<br>Type: OPERATOR<br>Id: 3421<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'},
{id: '3423', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 790.0<br>Type: OPERATOR<br>Id: 3423<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@622ba721'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3421', to: '3423'},
{from: '3430', to: '3432'},
{from: '3420', to: '3421'},
{from: '3438', to: '3439'},
{from: '3435', to: '3439'},
{from: '3426', to: '3432'},
{from: '3427', to: '3432'},
{from: '3420', to: '3432'},
{from: '3427', to: '3439'},
{from: '3418', to: '3432'},
{from: '3438', to: '3423'},
{from: '3420', to: '3439'},
{from: '3432', to: '3424'},
{from: '3439', to: '3433'},
{from: '3427', to: '3421'},
{from: '3438', to: '3432'},
{from: '3423', to: '3418'}
                            ]);