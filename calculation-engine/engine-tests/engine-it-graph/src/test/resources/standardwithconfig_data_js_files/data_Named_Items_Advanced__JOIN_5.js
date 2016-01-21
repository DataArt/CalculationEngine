var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5504', label: 'C1\n', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 5504<br>Formula Expression: Formula String: C1; Formula Values: ; Formula Ptg: ; Ptgs: C1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5512', label: 'F8\n', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 5512<br>Formula Expression: Formula String: F8; Formula Values: ; Formula Ptg: ; Ptgs: F8 Index in Ptgs: 14 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5513', label: ',\n[, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]', color: '#f0ad4e', title: 'Name: ,<br>Alias: RangeA<br>Value: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]<br>Type: OPERATOR<br>Id: 5513<br>Formula Expression: Formula String: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Values: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Ptg: ; Ptgs:  Index in Ptgs: 15 <br>Source Object Id: null'},
{id: '5514', label: 'MEDIAN\n15.8', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 5514<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5479', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5479<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5481', label: 'C3\n15.8', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 5481<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: null; Ptgs: null Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5482', label: 'B2\n5.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5482<br>Formula Expression: Formula String: B2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5484', label: 'A1\n10.8', color: '#31b0d5', title: 'Name: A1<br>Alias: Tax<br>Value: 10.8<br>Type: CELL_WITH_VALUE<br>Id: 5484<br>Formula Expression: Formula String: A1; Formula Values: 10.8; Formula Ptg: 10.8; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '5485', label: '+\n15.8', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 15.8<br>Type: OPERATOR<br>Id: 5485<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5486', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5486<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5487', label: 'D3\n1232.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 1232.0<br>Type: CELL_WITH_FORMULA<br>Id: 5487<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5488', label: 'A2\n1200.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1200.0<br>Type: CELL_WITH_VALUE<br>Id: 5488<br>Formula Expression: Formula String: A2; Formula Values: 1200.0; Formula Ptg: 1200.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5489', label: 'A3\n30.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 5489<br>Formula Expression: Formula String: A3; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5490', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 5490<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5491', label: 'SUM\n1232.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1232.0<br>Type: FUNCTION<br>Id: 5491<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5492', label: 'D4\n35.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 5492<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5494', label: 'A4\n50.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_VALUE<br>Id: 5494<br>Formula Expression: Formula String: A4; Formula Values: 50.0; Formula Ptg: 50.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5495', label: 'A5\n20.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 5495<br>Formula Expression: Formula String: A5; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5496', label: 'AVERAGE\n35.0', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: My_Sum<br>Value: 35.0<br>Type: FUNCTION<br>Id: 5496<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'},
{id: '5497', label: 'D5\n15.8', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 5497<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@511ba9c9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5484', to: '5485'},
{from: '5490', to: '5491'},
{from: '5495', to: '5496'},
{from: '5512', to: '5513'},
{from: '5513', to: '5514'},
{from: '5489', to: '5491'},
{from: '5494', to: '5496'},
{from: '5479', to: '5513'},
{from: '5482', to: '5513'},
{from: '5481', to: '5513'},
{from: '5481', to: '5486'},
{from: '5482', to: '5485'},
{from: '5488', to: '5491'},
{from: '5504', to: '5513'},
{from: '5514', to: '5497'},
{from: '5486', to: '5479'},
{from: '5488', to: '5513'},
{from: '5487', to: '5513'},
{from: '5484', to: '5513'},
{from: '5485', to: '5481'},
{from: '5491', to: '5487'},
{from: '5496', to: '5492'}
                            ]);