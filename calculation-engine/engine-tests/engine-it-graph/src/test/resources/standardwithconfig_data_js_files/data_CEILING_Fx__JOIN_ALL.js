var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2568', label: 'VALUE\n25.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 25.0<br>Type: CONSTANT_VALUE<br>Id: 2568<br>Formula Expression: Formula String: VALUE; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2569', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 2569<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2570', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 2570<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2571', label: '-\n5.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 2571<br>Formula Expression: Formula String: VALUE - VALUE; Formula Values: 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2572', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 2572<br>Formula Expression: Formula String: VALUE / VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2573', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 2573<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2574', label: '-\n1.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 2574<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2576', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 2576<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2577', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 2577<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2578', label: 'B2\n1.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 2578<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2579', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 2579<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2580', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 2580<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2581', label: 'CEILING\n1.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 2581<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2582', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 2582<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2583', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 2583<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2584', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 2584<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'},
{id: '2585', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 2585<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@577bfadb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2569', to: '2571'},
{from: '2572', to: '2574'},
{from: '2579', to: '2581'},
{from: '2583', to: '2585'},
{from: '2574', to: '2576'},
{from: '2577', to: '2579'},
{from: '2570', to: '2571'},
{from: '2571', to: '2572'},
{from: '2573', to: '2574'},
{from: '2576', to: '2577'},
{from: '2580', to: '2581'},
{from: '2584', to: '2585'},
{from: '2568', to: '2572'},
{from: '2581', to: '2578'},
{from: '2585', to: '2582'}
                            ]);