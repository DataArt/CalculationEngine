var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '487', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 487<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75f2099'},
{id: '488', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 488<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75f2099'},
{id: '489', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 489<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75f2099'},
{id: '490', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 490<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75f2099'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '489', to: '490'},
{from: '488', to: '490'},
{from: '490', to: '487'}
                            ]);