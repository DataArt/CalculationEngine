var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '160', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 160<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '161', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 161<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '162', label: 'CEILING\n1.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 162<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '150', label: 'B2\n1.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 150<br>Formula Expression: Formula String: CEILING(VALUE, ATAN(VALUE / VALUE - VALUE - VALUE)); Formula Values: CEILING(1.0, ATAN(25.0 / 10.0 - 5.0 - 4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '151', label: 'C1\n0.7853981633974483', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 151<br>Formula Expression: Formula String: ATAN(VALUE / VALUE - VALUE - VALUE); Formula Values: ATAN(25.0 / 10.0 - 5.0 - 4.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '152', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 152<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '153', label: 'VALUE\n25.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 25.0<br>Type: CONSTANT_VALUE<br>Id: 153<br>Formula Expression: Formula String: VALUE; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '154', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 154<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '155', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 155<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '156', label: '-\n5.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 156<br>Formula Expression: Formula String: VALUE - VALUE; Formula Values: 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '157', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 157<br>Formula Expression: Formula String: VALUE / VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '158', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 158<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'},
{id: '159', label: '-\n1.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.0<br>Type: OPERATOR<br>Id: 159<br>Formula Expression: Formula String: VALUE / VALUE - VALUE - VALUE; Formula Values: 25.0 / 10.0 - 5.0 - 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ef782af'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '155', to: '156'},
{from: '156', to: '157'},
{from: '158', to: '159'},
{from: '161', to: '162'},
{from: '154', to: '156'},
{from: '157', to: '159'},
{from: '153', to: '157'},
{from: '162', to: '150'},
{from: '160', to: '151'},
{from: '152', to: '160'},
{from: '159', to: '152'},
{from: '151', to: '162'}
                            ]);