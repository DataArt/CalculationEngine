var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2402', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 2402<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2403', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 2403<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2404', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 2404<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2405', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 2405<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2406', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 2406<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2407', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 2407<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2408', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 2408<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'},
{id: '2409', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Alias: null<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 2409<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26a4f9ed'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2403', to: '2405'},
{from: '2407', to: '2409'},
{from: '2404', to: '2405'},
{from: '2408', to: '2409'},
{from: '2405', to: '2402'},
{from: '2409', to: '2406'}
                            ]);