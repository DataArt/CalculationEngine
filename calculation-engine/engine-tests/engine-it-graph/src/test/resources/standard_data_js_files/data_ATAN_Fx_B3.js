var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '80', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 80<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '74', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: 74<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '75', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 75<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '76', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: 76<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '77', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 77<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '78', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: 78<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'},
{id: '79', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 79<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59505b48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '75', to: '76'},
{from: '77', to: '78'},
{from: '79', to: '80'},
{from: '76', to: '78'},
{from: '78', to: '80'},
{from: '80', to: '74'}
                            ]);