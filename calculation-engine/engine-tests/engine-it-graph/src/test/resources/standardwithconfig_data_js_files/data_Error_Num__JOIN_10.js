var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1691', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 1691<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@67531e3a'},
{id: '1692', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 1692<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@67531e3a'},
{id: '1693', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 1693<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@67531e3a'},
{id: '1694', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 1694<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@67531e3a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1693', to: '1694'},
{from: '1692', to: '1694'},
{from: '1694', to: '1691'}
                            ]);