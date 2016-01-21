var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4869', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 4869<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@98a0842'},
{id: '4870', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 4870<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@98a0842'},
{id: '4871', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4871<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@98a0842'},
{id: '4872', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 4872<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@98a0842'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4871', to: '4872'},
{from: '4870', to: '4872'},
{from: '4872', to: '4869'}
                            ]);