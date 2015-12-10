var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6fa07e17-f759-4349-bacc-3df11b760a21', label: 'B1\nA', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: A<br>Type: CELL_WITH_VALUE<br>Id: 6fa07e17-f759-4349-bacc-3df11b760a21<br>Formula Expression: Formula String: B1; Formula Values: A; Formula Ptg: A; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ca8564a'},
{id: 'b54690db-9088-4989-ba7b-6c345edcde6e', label: 'D9\n1.0', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: b54690db-9088-4989-ba7b-6c345edcde6e<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: A, 1.0 SUM ; Ptgs: B1, A1 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ca8564a'},
{id: '6465248d-c6d8-40d2-8068-900be05dc1a8', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 6465248d-c6d8-40d2-8068-900be05dc1a8<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ca8564a'},
{id: '5f0b57d1-6ba6-41c9-9884-e01f0098aa77', label: 'SUM\n1.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 5f0b57d1-6ba6-41c9-9884-e01f0098aa77<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ca8564a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6fa07e17-f759-4349-bacc-3df11b760a21', to: '5f0b57d1-6ba6-41c9-9884-e01f0098aa77'},
{from: '5f0b57d1-6ba6-41c9-9884-e01f0098aa77', to: 'b54690db-9088-4989-ba7b-6c345edcde6e'},
{from: '6465248d-c6d8-40d2-8068-900be05dc1a8', to: '5f0b57d1-6ba6-41c9-9884-e01f0098aa77'}
                            ]);