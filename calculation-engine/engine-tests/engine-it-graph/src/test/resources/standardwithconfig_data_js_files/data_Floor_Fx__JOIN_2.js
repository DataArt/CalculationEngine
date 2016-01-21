var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4192', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 4192<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4193', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 4193<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4186', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 4186<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4187', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 4187<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4188', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4188<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4189', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4189<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4190', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 4190<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'},
{id: '4191', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 4191<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@38b7004d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4188', to: '4189'},
{from: '4192', to: '4193'},
{from: '4187', to: '4189'},
{from: '4191', to: '4193'},
{from: '4189', to: '4186'},
{from: '4193', to: '4190'}
                            ]);