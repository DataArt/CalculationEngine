var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '1', label: 'VALUE\n25.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 25.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '2', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '3', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '4', label: '-\n5.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 4<br>Formula Expression: Formula String: VALUE - VALUE; Formula Values: 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '5', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: VALUE / VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '6', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 6<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '7', label: '-\n1.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '8', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: ATAN(B1); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '10', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 10<br>Formula Expression: Formula String: ATAN(B1); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '11', label: 'B2\n1.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 11<br>Formula Expression: Formula String: CEILING(VALUE, C1); Formula Values: CEILING(1.0, 0.7853981633974483); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '13', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 13<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '14', label: 'CEILING\n1.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 14<br>Formula Expression: Formula String: CEILING(VALUE, C1); Formula Values: CEILING(1.0, 0.7853981633974483); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '15', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 15<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '16', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 16<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '17', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 17<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'},
{id: '18', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 18<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a96d56c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '4'},
{from: '3', to: '4'},
{from: '1', to: '5'},
{from: '4', to: '5'},
{from: '5', to: '7'},
{from: '6', to: '7'},
{from: '7', to: '0'},
{from: '10', to: '8'},
{from: '13', to: '14'},
{from: '14', to: '11'},
{from: '17', to: '18'},
{from: '16', to: '18'},
{from: '18', to: '15'},
{from: '8', to: '14'},
{from: '0', to: '10'}
                            ]);