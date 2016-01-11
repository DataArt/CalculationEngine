var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 7<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '0', label: 'D5\n1.059306170823243', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 1.059306170823243<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '8', label: '*\n16.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 16.0<br>Type: OPERATOR<br>Id: 8<br>Formula Expression: Formula String: VALUE * VALUE * VALUE; Formula Values: 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '9', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '3', label: 'VALUE\n18.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 18.0<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 18.0; Formula Ptg: 18.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '13', label: 'ATANH\n1.059306170823243', color: '#f0ad4e', title: 'Name: ATANH<br>Alias: null<br>Value: 1.059306170823243<br>Type: FUNCTION<br>Id: 13<br>Formula Expression: Formula String: ATANH(ATAN(VALUE - VALUE * VALUE * VALUE / VALUE)); Formula Values: ATANH(ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '4', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '6', label: '*\n8.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 8.0<br>Type: OPERATOR<br>Id: 6<br>Formula Expression: Formula String: VALUE * VALUE; Formula Values: 4.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '2', label: 'C2\n1.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 2<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '5', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 5<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '11', label: '/\n1.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 11<br>Formula Expression: Formula String: VALUE - VALUE * VALUE * VALUE / VALUE; Formula Values: 18.0 - 4.0 * 2.0 * 2.0 / 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '1', label: 'B4\n0.7853981633974483', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '10', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 10<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'},
{id: '12', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: ATAN(VALUE - VALUE * VALUE * VALUE / VALUE); Formula Values: ATAN(18.0 - 4.0 * 2.0 * 2.0 / 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@15bcf458'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5', to: '6'},
{from: '7', to: '8'},
{from: '3', to: '9'},
{from: '4', to: '6'},
{from: '6', to: '8'},
{from: '13', to: '0'},
{from: '9', to: '11'},
{from: '2', to: '12'},
{from: '8', to: '9'},
{from: '10', to: '11'},
{from: '11', to: '2'},
{from: '12', to: '1'},
{from: '1', to: '13'}
                            ]);