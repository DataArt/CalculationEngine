var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3520', label: '*\n8.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 8.0<br>Type: OPERATOR<br>Id: 3520<br>Formula Expression: Formula String: VALUE * VALUE; Formula Values: 4.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3521', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 3521<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3522', label: '*\n16.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 16.0<br>Type: OPERATOR<br>Id: 3522<br>Formula Expression: Formula String: VALUE * VALUE * VALUE; Formula Values: 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3523', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 3523<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3524', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 3524<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3525', label: '/\n1.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 3525<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3526', label: 'B3\n-0.10033534773107562', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: -0.10033534773107562<br>Type: CELL_WITH_FORMULA<br>Id: 3526<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(-0.1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3527', label: 'VALUE\n-0.1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -0.1<br>Type: CONSTANT_VALUE<br>Id: 3527<br>Formula Expression: Formula String: VALUE; Formula Values: -0.1; Formula Ptg: -0.1; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3528', label: 'ATANH\n-0.10033534773107562', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: -0.10033534773107562<br>Type: FUNCTION<br>Id: 3528<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(-0.1); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3529', label: 'B4\n0.7853981633974483', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 3529<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3531', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 3531<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3532', label: 'B5\n1.059306170823243', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 3532<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3534', label: 'ATANH\n1.059306170823243', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.059306170823243<br>Type: FUNCTION<br>Id: 3534<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3535', label: 'D5\n1.059306170823243', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 3535<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3537', label: 'ATANH\n1.059306170823243', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.059306170823243<br>Type: FUNCTION<br>Id: 3537<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3513', label: 'B2\n1.0000000120108175', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0000000120108175<br>Type: CELL_WITH_FORMULA<br>Id: 3513<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(0.761594161); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3514', label: 'VALUE\n0.761594161', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.761594161<br>Type: CONSTANT_VALUE<br>Id: 3514<br>Formula Expression: Formula String: VALUE; Formula Values: 0.761594161; Formula Ptg: 0.761594161; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3515', label: 'ATANH\n1.0000000120108175', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.0000000120108175<br>Type: FUNCTION<br>Id: 3515<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(0.761594161); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3516', label: 'C2\n1.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 3516<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3517', label: 'VALUE\n18.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 18.0<br>Type: CONSTANT_VALUE<br>Id: 3517<br>Formula Expression: Formula String: VALUE; Formula Values: 18.0; Formula Ptg: 18.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3518', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 3518<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'},
{id: '3519', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 3519<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@744fb110'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3518', to: '3520'},
{from: '3520', to: '3522'},
{from: '3514', to: '3515'},
{from: '3522', to: '3523'},
{from: '3524', to: '3525'},
{from: '3516', to: '3531'},
{from: '3525', to: '3516'},
{from: '3515', to: '3513'},
{from: '3531', to: '3529'},
{from: '3537', to: '3535'},
{from: '3523', to: '3525'},
{from: '3519', to: '3520'},
{from: '3521', to: '3522'},
{from: '3527', to: '3528'},
{from: '3517', to: '3523'},
{from: '3529', to: '3534'},
{from: '3529', to: '3537'},
{from: '3528', to: '3526'},
{from: '3534', to: '3532'}
                            ]);