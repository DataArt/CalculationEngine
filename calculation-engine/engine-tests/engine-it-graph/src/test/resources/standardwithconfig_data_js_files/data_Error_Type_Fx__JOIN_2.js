var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4119', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 4119<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'},
{id: '4120', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 4120<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'},
{id: '4121', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 4121<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'},
{id: '4122', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 4122<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'},
{id: '4123', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 4123<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'},
{id: '4124', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4124<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3cd6d147'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4120', to: '4121'},
{from: '4123', to: '4124'},
{from: '4121', to: '4119'},
{from: '4124', to: '4122'}
                            ]);