var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '912', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 912<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'},
{id: '913', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 19.0<br>Type: FUNCTION<br>Id: 913<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'},
{id: '908', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 908<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'},
{id: '909', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 909<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'},
{id: '910', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 910<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'},
{id: '911', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 911<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@53093491'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '909', to: '910'},
{from: '912', to: '913'},
{from: '910', to: '908'},
{from: '913', to: '911'}
                            ]);