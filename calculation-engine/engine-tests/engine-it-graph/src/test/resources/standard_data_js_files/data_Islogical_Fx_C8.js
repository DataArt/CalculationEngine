var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2e8568c2-a435-4f7f-97c6-a75bbdc0adb5', label: 'A4\nsome text for test', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: some text for test<br>Type: CELL_WITH_VALUE<br>Id: 2e8568c2-a435-4f7f-97c6-a75bbdc0adb5<br>Formula Expression: Formula String: A4; Formula Values: some text for test; Formula Ptg: some text for test; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: 'ce901f9b-03f0-4de4-8341-78dc0a3bf875', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: ce901f9b-03f0-4de4-8341-78dc0a3bf875<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: some text for test ISLOGICAL ; Ptgs: A4 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '57391883-1c56-4a84-8178-ccef7e49078a', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 57391883-1c56-4a84-8178-ccef7e49078a<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2e8568c2-a435-4f7f-97c6-a75bbdc0adb5', to: '57391883-1c56-4a84-8178-ccef7e49078a'},
{from: '57391883-1c56-4a84-8178-ccef7e49078a', to: 'ce901f9b-03f0-4de4-8341-78dc0a3bf875'}
                            ]);