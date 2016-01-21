var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5222', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 5222<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'},
{id: '5223', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 5223<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'},
{id: '5224', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 5224<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'},
{id: '5225', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 5225<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'},
{id: '5226', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 5226<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'},
{id: '5227', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 5227<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a5e0faf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5223', to: '5224'},
{from: '5226', to: '5227'},
{from: '5224', to: '5222'},
{from: '5227', to: '5225'}
                            ]);