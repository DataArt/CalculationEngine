var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '816', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 816<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '818', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 818<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '819', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 819<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '820', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 820<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '821', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 821<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '823', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 823<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '824', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 824<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'},
{id: '825', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 825<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@325f7fa9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '819', to: '820'},
{from: '824', to: '825'},
{from: '818', to: '820'},
{from: '823', to: '825'},
{from: '820', to: '823'},
{from: '820', to: '816'},
{from: '825', to: '821'}
                            ]);