var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '96', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 96<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '97', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 97<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '98', label: '*\n8.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 8.0<br>Type: OPERATOR<br>Id: 98<br>Formula Expression: Formula String: VALUE * VALUE; Formula Values: 4.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '99', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 99<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '100', label: '*\n16.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 16.0<br>Type: OPERATOR<br>Id: 100<br>Formula Expression: Formula String: VALUE * VALUE * VALUE; Formula Values: 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '101', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 101<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '102', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 102<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '103', label: '/\n1.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 103<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '104', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 104<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '105', label: 'ATANH\n1.059306170823243', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.059306170823243<br>Type: FUNCTION<br>Id: 105<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '92', label: 'D5\n1.059306170823243', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 92<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '93', label: 'B4\n0.7853981633974483', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 93<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '94', label: 'C2\n1.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 94<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'},
{id: '95', label: 'VALUE\n18.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 18.0<br>Type: CONSTANT_VALUE<br>Id: 95<br>Formula Expression: Formula String: VALUE; Formula Values: 18.0; Formula Ptg: 18.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@606e4010'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '97', to: '98'},
{from: '99', to: '100'},
{from: '100', to: '101'},
{from: '102', to: '103'},
{from: '96', to: '98'},
{from: '98', to: '100'},
{from: '101', to: '103'},
{from: '95', to: '101'},
{from: '94', to: '104'},
{from: '93', to: '105'},
{from: '105', to: '92'},
{from: '104', to: '93'},
{from: '103', to: '94'}
                            ]);