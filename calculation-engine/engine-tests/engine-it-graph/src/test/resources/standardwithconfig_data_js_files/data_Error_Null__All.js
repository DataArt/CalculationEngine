var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8082795f-ec1e-43d9-8a0a-afd302b51b05', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 8082795f-ec1e-43d9-8a0a-afd302b51b05<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: '86ee957b-7c08-436d-a032-4dd23cc0a1a3', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 86ee957b-7c08-436d-a032-4dd23cc0a1a3<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: 'ad525817-88e2-45ec-affa-541045efd39d', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: ad525817-88e2-45ec-affa-541045efd39d<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: 4.0, 8.0, 8.0 SUM ; Ptgs: B3:B5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: 'f75a405b-81ac-459c-b1cf-825db4da829f', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: f75a405b-81ac-459c-b1cf-825db4da829f<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: 'e89bfb1a-3c3c-475a-a9ef-3c9c2e9fe704', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: e89bfb1a-3c3c-475a-a9ef-3c9c2e9fe704<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: '8cc1f5cd-9fec-4bf0-b376-edc989b227f6', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 8cc1f5cd-9fec-4bf0-b376-edc989b227f6<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8082795f-ec1e-43d9-8a0a-afd302b51b05', to: 'f75a405b-81ac-459c-b1cf-825db4da829f'},
{from: '8cc1f5cd-9fec-4bf0-b376-edc989b227f6', to: 'ad525817-88e2-45ec-affa-541045efd39d'},
{from: '86ee957b-7c08-436d-a032-4dd23cc0a1a3', to: '8cc1f5cd-9fec-4bf0-b376-edc989b227f6'},
{from: 'e89bfb1a-3c3c-475a-a9ef-3c9c2e9fe704', to: '8082795f-ec1e-43d9-8a0a-afd302b51b05'}
                            ]);