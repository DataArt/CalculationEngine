var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '563', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 563<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '564', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 564<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '565', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 565<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '566', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 566<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '567', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 567<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '568', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 568<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '569', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 569<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'},
{id: '570', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 570<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@774698ab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '565', to: '566'},
{from: '567', to: '568'},
{from: '569', to: '570'},
{from: '564', to: '566'},
{from: '566', to: '568'},
{from: '568', to: '570'},
{from: '570', to: '563'}
                            ]);