var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '81', label: 'B4\n45.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 45.0<br>Type: CELL_WITH_FORMULA<br>Id: 81<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '82', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 82<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '83', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 83<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '84', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 84<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '85', label: '*\n141.3716694115407', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 141.3716694115407<br>Type: OPERATOR<br>Id: 85<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(1.0) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '86', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 86<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'},
{id: '87', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 45.0<br>Type: OPERATOR<br>Id: 87<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@e350b40'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '82', to: '83'},
{from: '84', to: '85'},
{from: '86', to: '87'},
{from: '83', to: '85'},
{from: '85', to: '87'},
{from: '87', to: '81'}
                            ]);