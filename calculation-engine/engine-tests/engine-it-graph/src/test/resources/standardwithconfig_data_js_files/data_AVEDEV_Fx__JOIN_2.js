var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3538', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 3538<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3539', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Alias: null<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 3539<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3540', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: 3540<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3541', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 3541<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3542', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Alias: null<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 3542<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3543', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 3543<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3544', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: 3544<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]), AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'},
{id: '3547', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: 3547<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]), AVEDEV([[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d65e744'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3539', to: '3540'},
{from: '3542', to: '3543'},
{from: '3541', to: '3547'},
{from: '3538', to: '3547'},
{from: '3540', to: '3538'},
{from: '3543', to: '3541'},
{from: '3547', to: '3544'}
                            ]);