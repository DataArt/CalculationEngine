var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '231', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 231<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@14fc1f0'},
{id: '232', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 232<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@14fc1f0'},
{id: '233', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 233<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@14fc1f0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '232', to: '233'},
{from: '233', to: '231'}
                            ]);