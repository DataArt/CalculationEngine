var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '2', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '3', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '4', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 4<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '6', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: 6<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '7', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE([[12.6], [3.2], [4.5], [9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '8', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '10', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '11', label: 'A3\n3.2', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 11<br>Formula Expression: Formula String: A3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '12', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '13', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(A3, A2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE([[12.6], [3.2], [4.5], [9.0]]) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '14', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 14<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '15', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 15<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE([[12.6], [3.2], [4.5], [9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '16', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 16<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE([[12.6], [3.2], [4.5], [9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '18', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 18<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '19', label: 'A3\n3.2', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 19<br>Formula Expression: Formula String: A3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '20', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 20<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'},
{id: '21', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: 21<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(A3, A2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE([[12.6], [3.2], [4.5], [9.0]]) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1d0fc0bc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '4'},
{from: '6', to: '7'},
{from: '11', to: '12'},
{from: '15', to: '16'},
{from: '19', to: '20'},
{from: '20', to: '21'},
{from: '2', to: '4'},
{from: '10', to: '12'},
{from: '14', to: '16'},
{from: '18', to: '20'},
{from: '1', to: '4'},
{from: '2', to: '6'},
{from: '1', to: '6'},
{from: '16', to: '21'},
{from: '7', to: '15'},
{from: '4', to: '14'},
{from: '21', to: '13'},
{from: '12', to: '8'}
                            ]);