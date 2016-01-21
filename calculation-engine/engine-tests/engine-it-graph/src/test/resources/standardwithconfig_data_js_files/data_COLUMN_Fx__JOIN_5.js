var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4864', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 4864<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'},
{id: '4865', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 4865<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'},
{id: '4860', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 4860<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'},
{id: '4861', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 4861<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'},
{id: '4862', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 4862<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'},
{id: '4863', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 4863<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c56e044'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4861', to: '4862'},
{from: '4864', to: '4865'},
{from: '4862', to: '4860'},
{from: '4865', to: '4863'}
                            ]);