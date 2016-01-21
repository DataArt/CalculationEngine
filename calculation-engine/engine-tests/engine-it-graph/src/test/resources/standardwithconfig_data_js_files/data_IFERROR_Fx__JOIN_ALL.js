var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2827', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 2827<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2828', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 2828<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2829', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2829<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2830', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 2830<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2831', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 2831<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: ac58431f-409f-0064-7a9a-eae7270231b8'},
{id: '2832', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 2832<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2834', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: 2834<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2835', label: 'B5\n-2.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: -2.0<br>Type: CELL_WITH_FORMULA<br>Id: 2835<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2838', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 2838<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2839', label: '-\n-2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -2.0<br>Type: OPERATOR<br>Id: 2839<br>Formula Expression: Formula String: A3 - VALUE; Formula Values: 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2840', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 2840<br>Formula Expression: Formula String: B3; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'},
{id: '2841', label: 'IFERROR\n-2.0', color: '#f0ad4e', title: 'Name: IFERROR<br>Alias: null<br>Value: -2.0<br>Type: FUNCTION<br>Id: 2841<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1c90029b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2832', to: '2831'},
{from: '2828', to: '2830'},
{from: '2839', to: '2841'},
{from: '2829', to: '2830'},
{from: '2830', to: '2831'},
{from: '2838', to: '2839'},
{from: '2840', to: '2841'},
{from: '2831', to: '2834'},
{from: '2841', to: '2835'},
{from: '2834', to: '2827'},
{from: '2828', to: '2839'}
                            ]);