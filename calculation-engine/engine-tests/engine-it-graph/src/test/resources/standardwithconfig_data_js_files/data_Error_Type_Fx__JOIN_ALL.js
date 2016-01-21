var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3016', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 3016<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'},
{id: '3017', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 3017<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'},
{id: '3018', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 3018<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'},
{id: '3019', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 3019<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'},
{id: '3020', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 3020<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'},
{id: '3021', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 3021<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@436a563f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3017', to: '3018'},
{from: '3020', to: '3021'},
{from: '3018', to: '3016'},
{from: '3021', to: '3019'}
                            ]);