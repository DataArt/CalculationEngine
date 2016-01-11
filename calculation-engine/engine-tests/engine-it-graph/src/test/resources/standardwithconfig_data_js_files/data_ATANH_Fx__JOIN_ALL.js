var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9', label: '*\n16.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 16.0<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: VALUE * VALUE * VALUE; Formula Values: 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '17', label: 'C2\n1.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 17<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '5', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 5<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '19', label: 'B5\n1.059306170823243', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 19<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '21', label: 'ATANH\n1.059306170823243', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.059306170823243<br>Type: FUNCTION<br>Id: 21<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '4', label: 'VALUE\n18.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 18.0<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: 18.0; Formula Ptg: 18.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '0', label: 'B2\n1.0000000120108175', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0000000120108175<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(0.761594161); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '7', label: '*\n8.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 8.0<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: VALUE * VALUE; Formula Values: 4.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '8', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 8<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '11', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '14', label: 'VALUE\n-0.1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -0.1<br>Type: CONSTANT_VALUE<br>Id: 14<br>Formula Expression: Formula String: VALUE; Formula Values: -0.1; Formula Ptg: -0.1; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '1', label: 'VALUE\n0.761594161', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.761594161<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 0.761594161; Formula Ptg: 0.761594161; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '6', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 6<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '16', label: 'B4\n0.7853981633974483', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 16<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '22', label: 'D5\n1.059306170823243', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 22<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '13', label: 'B3\n-0.10033534773107562', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: -0.10033534773107562<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(-0.1); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '10', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 10<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '15', label: 'ATANH\n-0.10033534773107562', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: -0.10033534773107562<br>Type: FUNCTION<br>Id: 15<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(-0.1); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '2', label: 'ATANH\n1.0000000120108175', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.0000000120108175<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ATANH(VALUE); Formula Values: ATANH(0.761594161); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '18', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 18<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'},
{id: '12', label: '/\n1.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 12<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9e33a6a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4', to: '10'},
{from: '12', to: '17'},
{from: '2', to: '0'},
{from: '16', to: '21'},
{from: '18', to: '16'},
{from: '6', to: '7'},
{from: '7', to: '9'},
{from: '21', to: '19'},
{from: '15', to: '13'},
{from: '21', to: '22'},
{from: '11', to: '12'},
{from: '14', to: '15'},
{from: '5', to: '7'},
{from: '17', to: '18'},
{from: '9', to: '10'},
{from: '8', to: '9'},
{from: '10', to: '12'},
{from: '1', to: '2'}
                            ]);