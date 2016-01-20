var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '1', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '2', label: 'D2\n', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2<br>Formula Expression: Formula String: D2; Formula Values: ; Formula Ptg: ; Ptgs: D2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '3', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '4', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '5', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '6', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 6<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '7', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 7<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '8', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 8<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '9', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 9<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '10', label: 'C7\nFALSE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 10<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '11', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 11<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '12', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '13', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '14', label: 'A4\nsome text for test', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: some text for test<br>Type: CELL_WITH_VALUE<br>Id: 14<br>Formula Expression: Formula String: A4; Formula Values: some text for test; Formula Ptg: some text for test; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '15', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 15<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '16', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 16<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '17', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 17<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '18', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 18<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '19', label: 'C9\nFALSE', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 19<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '20', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 20<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '21', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 21<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '22', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 22<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '23', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 23<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'},
{id: '24', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 24<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29852487'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '5', to: '6'},
{from: '8', to: '9'},
{from: '11', to: '12'},
{from: '14', to: '15'},
{from: '17', to: '18'},
{from: '20', to: '21'},
{from: '23', to: '24'},
{from: '1', to: '3'},
{from: '9', to: '23'},
{from: '3', to: '20'},
{from: '3', to: '0'},
{from: '6', to: '4'},
{from: '9', to: '7'},
{from: '12', to: '10'},
{from: '15', to: '13'},
{from: '18', to: '16'},
{from: '21', to: '19'},
{from: '24', to: '22'}
                            ]);