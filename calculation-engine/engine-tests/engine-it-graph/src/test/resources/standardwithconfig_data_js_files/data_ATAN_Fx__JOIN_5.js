var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '1', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '2', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '3', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '4', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '5', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '6', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 6<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '7', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: 7<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '8', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 8<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '9', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '10', label: 'B4\n45.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 45.0<br>Type: CELL_WITH_FORMULA<br>Id: 10<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '11', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '12', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '13', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 13<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '14', label: '*\n141.3716694115407', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 141.3716694115407<br>Type: OPERATOR<br>Id: 14<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(1.0) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '15', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 15<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'},
{id: '16', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 45.0<br>Type: OPERATOR<br>Id: 16<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@308e465b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '4', to: '5'},
{from: '6', to: '7'},
{from: '8', to: '9'},
{from: '11', to: '12'},
{from: '13', to: '14'},
{from: '15', to: '16'},
{from: '5', to: '7'},
{from: '7', to: '9'},
{from: '12', to: '14'},
{from: '14', to: '16'},
{from: '9', to: '3'},
{from: '16', to: '10'},
{from: '2', to: '0'}
                            ]);