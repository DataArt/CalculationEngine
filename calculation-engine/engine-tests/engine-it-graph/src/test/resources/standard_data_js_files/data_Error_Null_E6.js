var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a3aff04e-82eb-4560-8ebc-8038a60dd8f3', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: a3aff04e-82eb-4560-8ebc-8038a60dd8f3<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@636be97c'},
{id: '1b402de7-da6f-40ee-a35d-f6f0837ce1a6', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 1b402de7-da6f-40ee-a35d-f6f0837ce1a6<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@636be97c'},
{id: 'ed1421b0-6537-4b91-9e15-42359a3f1b50', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: ed1421b0-6537-4b91-9e15-42359a3f1b50<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@636be97c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ed1421b0-6537-4b91-9e15-42359a3f1b50', to: 'a3aff04e-82eb-4560-8ebc-8038a60dd8f3'},
{from: 'a3aff04e-82eb-4560-8ebc-8038a60dd8f3', to: '1b402de7-da6f-40ee-a35d-f6f0837ce1a6'}
                            ]);