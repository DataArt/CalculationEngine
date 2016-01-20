var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '2', label: 'C3\n15.8', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 2<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: null; Ptgs: null Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '3', label: 'B2\n5.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: B2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '5', label: 'A1\n10.8', color: '#31b0d5', title: 'Name: A1<br>Alias: Tax<br>Value: 10.8<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: A1; Formula Values: 10.8; Formula Ptg: 10.8; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '6', label: '+\n15.8', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 15.8<br>Type: OPERATOR<br>Id: 6<br>Formula Expression: Formula String: B2 + A1; Formula Values: 5.0 + 10.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '7', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: ISEVEN(B2 + A1); Formula Values: ISEVEN(5.0 + 10.8); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '8', label: 'D3\n1232.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 1232.0<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '9', label: 'A2\n1200.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1200.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: A2; Formula Values: 1200.0; Formula Ptg: 1200.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '10', label: 'A3\n30.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: A3; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '11', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '12', label: 'SUM\n1232.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1232.0<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: SUM(VALUE, A3, A2); Formula Values: SUM(2.0, 30.0, 1200.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '13', label: 'D4\n35.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '15', label: 'A4\n50.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_VALUE<br>Id: 15<br>Formula Expression: Formula String: A4; Formula Values: 50.0; Formula Ptg: 50.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '16', label: 'A5\n20.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: A5; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '17', label: 'AVERAGE\n35.0', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: My_Sum<br>Value: 35.0<br>Type: FUNCTION<br>Id: 17<br>Formula Expression: Formula String: AVERAGE(A5, A4); Formula Values: AVERAGE(20.0, 50.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '18', label: 'D5\n15.8', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 18<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '25', label: 'C1\n', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 25<br>Formula Expression: Formula String: C1; Formula Values: ; Formula Ptg: ; Ptgs: C1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '33', label: 'F8\n', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 33<br>Formula Expression: Formula String: F8; Formula Values: ; Formula Ptg: ; Ptgs: F8 Index in Ptgs: 14 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'},
{id: '34', label: ',\n[, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]', color: '#f0ad4e', title: 'Name: ,<br>Alias: RangeA<br>Value: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]<br>Type: FUNCTION<br>Id: 34<br>Formula Expression: Formula String: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Values: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Formula Ptg: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]; Ptgs: [, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8] Index in Ptgs: 15 <br>Source Object Id: null'},
{id: '35', label: 'MEDIAN\n15.8', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 35<br>Formula Expression: Formula String: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Values: MEDIAN([, 1232.0, FALSE, 15.8, , 5.0, 1200.0, 10.8]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b237c2c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '34'},
{from: '2', to: '34'},
{from: '5', to: '6'},
{from: '11', to: '12'},
{from: '16', to: '17'},
{from: '33', to: '34'},
{from: '34', to: '35'},
{from: '10', to: '12'},
{from: '15', to: '17'},
{from: '0', to: '34'},
{from: '3', to: '6'},
{from: '9', to: '12'},
{from: '2', to: '7'},
{from: '25', to: '34'},
{from: '35', to: '18'},
{from: '7', to: '0'},
{from: '9', to: '34'},
{from: '8', to: '34'},
{from: '6', to: '2'},
{from: '12', to: '8'},
{from: '17', to: '13'},
{from: '5', to: '34'}
                            ]);