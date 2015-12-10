var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6364bb64-732f-41ab-8892-9c25c962ef30', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 6364bb64-732f-41ab-8892-9c25c962ef30<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'},
{id: '49363191-ad04-46af-b2ec-a78f76ca2c37', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 49363191-ad04-46af-b2ec-a78f76ca2c37<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'},
{id: '3c0d9835-ee0a-4bf8-87f0-36fb50ca29f6', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 3c0d9835-ee0a-4bf8-87f0-36fb50ca29f6<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'},
{id: '60fb2423-0438-4fdd-96b8-1775f3a03f34', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 60fb2423-0438-4fdd-96b8-1775f3a03f34<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: 4.0, 8.0, 8.0 SUM ; Ptgs: B3:B5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'},
{id: 'b757c1d2-ea42-4438-8d43-d06bf7769f45', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: b757c1d2-ea42-4438-8d43-d06bf7769f45<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'},
{id: '03fa9c14-03f6-427a-add0-6f9027d186cd', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 03fa9c14-03f6-427a-add0-6f9027d186cd<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4ac3c60d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '03fa9c14-03f6-427a-add0-6f9027d186cd', to: '3c0d9835-ee0a-4bf8-87f0-36fb50ca29f6'},
{from: '6364bb64-732f-41ab-8892-9c25c962ef30', to: '49363191-ad04-46af-b2ec-a78f76ca2c37'},
{from: '3c0d9835-ee0a-4bf8-87f0-36fb50ca29f6', to: 'b757c1d2-ea42-4438-8d43-d06bf7769f45'},
{from: '49363191-ad04-46af-b2ec-a78f76ca2c37', to: '60fb2423-0438-4fdd-96b8-1775f3a03f34'}
                            ]);