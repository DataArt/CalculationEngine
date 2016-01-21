var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1552', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 1552<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'},
{id: '1553', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 1553<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'},
{id: '1554', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 1554<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'},
{id: '1555', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 1555<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'},
{id: '1556', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 1556<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'},
{id: '1551', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 1551<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57f9b467'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1552', to: '1553'},
{from: '1555', to: '1556'},
{from: '1553', to: '1551'},
{from: '1556', to: '1554'}
                            ]);