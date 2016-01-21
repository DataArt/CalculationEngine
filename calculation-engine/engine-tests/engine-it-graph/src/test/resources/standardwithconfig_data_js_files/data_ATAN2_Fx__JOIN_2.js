var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3505', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 3505<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3506', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3506<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3507', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3507<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3508', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 3508<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3509', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 3509<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3510', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 3510<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3511', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 3511<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'},
{id: '3512', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Alias: null<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 3512<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33ccead'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3506', to: '3508'},
{from: '3510', to: '3512'},
{from: '3507', to: '3508'},
{from: '3511', to: '3512'},
{from: '3508', to: '3505'},
{from: '3512', to: '3509'}
                            ]);