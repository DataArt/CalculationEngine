var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '1', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '2', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '3', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '4', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: 4<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '5', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '6', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 6<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '3', to: '4'},
{from: '5', to: '6'},
{from: '2', to: '4'},
{from: '4', to: '6'},
{from: '6', to: '0'}
                            ]);