var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4773', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 4773<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4774', label: 'VALUE\n25.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 25.0<br>Type: CONSTANT_VALUE<br>Id: 4774<br>Formula Expression: Formula String: VALUE; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4775', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 4775<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4776', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 4776<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4777', label: '-\n5.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 4777<br>Formula Expression: Formula String: VALUE - VALUE; Formula Values: 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4778', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 4778<br>Formula Expression: Formula String: VALUE / VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4779', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 4779<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4780', label: '-\n1.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 4780<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4781', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 4781<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4782', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 4782<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4783', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 4783<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4784', label: 'B2\n1.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 4784<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4785', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 4785<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4786', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4786<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4787', label: 'CEILING\n1.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 4787<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4788', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 4788<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4789', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 4789<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4790', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4790<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'},
{id: '4791', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4791<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6f2b608e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4776', to: '4777'},
{from: '4777', to: '4778'},
{from: '4779', to: '4780'},
{from: '4782', to: '4783'},
{from: '4786', to: '4787'},
{from: '4790', to: '4791'},
{from: '4775', to: '4777'},
{from: '4778', to: '4780'},
{from: '4785', to: '4787'},
{from: '4789', to: '4791'},
{from: '4780', to: '4782'},
{from: '4783', to: '4785'},
{from: '4774', to: '4778'},
{from: '4780', to: '4773'},
{from: '4787', to: '4784'},
{from: '4791', to: '4788'},
{from: '4783', to: '4781'}
                            ]);