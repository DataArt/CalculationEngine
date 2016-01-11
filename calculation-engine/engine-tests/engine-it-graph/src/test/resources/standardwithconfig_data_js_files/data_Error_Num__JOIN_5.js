var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@125ace20'},
{id: '3', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@125ace20'},
{id: '0', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@125ace20'},
{id: '2', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@125ace20'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '3', to: '0'},
{from: '1', to: '3'}
                            ]);