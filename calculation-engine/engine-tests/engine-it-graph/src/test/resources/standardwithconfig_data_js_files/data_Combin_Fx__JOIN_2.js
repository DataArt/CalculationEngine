var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3766', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 3766<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3117ac8d'},
{id: '3767', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3767<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3117ac8d'},
{id: '3768', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3768<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3117ac8d'},
{id: '3769', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 3769<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3117ac8d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3767', to: '3769'},
{from: '3768', to: '3769'},
{from: '3769', to: '3766'}
                            ]);