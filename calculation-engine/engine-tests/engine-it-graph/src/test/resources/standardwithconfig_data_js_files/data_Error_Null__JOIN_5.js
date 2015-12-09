var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8349faf0-5a48-4c4a-887d-cf730c532ba6', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 8349faf0-5a48-4c4a-887d-cf730c532ba6<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'f65891a0-48a0-43e4-8e41-bc37b5a38ca5', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: f65891a0-48a0-43e4-8e41-bc37b5a38ca5<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: 4.0, 8.0, 8.0 SUM ; Ptgs: B3:B5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'd560bd76-0012-4de4-b8ea-f0ae2d24a28f', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: d560bd76-0012-4de4-b8ea-f0ae2d24a28f<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '5fb5d775-5032-41de-860e-bb43a10bea3e', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 5fb5d775-5032-41de-860e-bb43a10bea3e<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '3cebb5f8-6b7f-48cf-9a82-80df1c800401', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 3cebb5f8-6b7f-48cf-9a82-80df1c800401<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '57ae9139-ce69-4cea-b3da-6af49f7e2783', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 57ae9139-ce69-4cea-b3da-6af49f7e2783<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd560bd76-0012-4de4-b8ea-f0ae2d24a28f', to: '5fb5d775-5032-41de-860e-bb43a10bea3e'},
{from: '57ae9139-ce69-4cea-b3da-6af49f7e2783', to: '8349faf0-5a48-4c4a-887d-cf730c532ba6'},
{from: '8349faf0-5a48-4c4a-887d-cf730c532ba6', to: '3cebb5f8-6b7f-48cf-9a82-80df1c800401'},
{from: '5fb5d775-5032-41de-860e-bb43a10bea3e', to: 'f65891a0-48a0-43e4-8e41-bc37b5a38ca5'}
                            ]);