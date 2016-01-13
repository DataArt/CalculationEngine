var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B2\n1.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '1', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '2', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 2<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '3', label: 'VALUE\n25.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 25.0<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '4', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '5', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 5<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '6', label: '-\n5.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 6<br>Formula Expression: Formula String: VALUE - VALUE; Formula Values: 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '7', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: VALUE / VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '8', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 8<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '9', label: '-\n1.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '10', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 10<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '11', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'},
{id: '12', label: 'CEILING\n1.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e31276e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4', to: '6'},
{from: '5', to: '6'},
{from: '3', to: '7'},
{from: '6', to: '7'},
{from: '7', to: '9'},
{from: '8', to: '9'},
{from: '9', to: '2'},
{from: '2', to: '10'},
{from: '10', to: '1'},
{from: '11', to: '12'},
{from: '1', to: '12'},
{from: '12', to: '0'}
                            ]);