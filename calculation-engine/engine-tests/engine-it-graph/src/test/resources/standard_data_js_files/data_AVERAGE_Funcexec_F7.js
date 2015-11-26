var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5e5cd785-2f4e-4a33-850b-19429ec80987', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 5e5cd785-2f4e-4a33-850b-19429ec80987<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: '6985bc16-222c-418c-beab-852f17fbb668', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 6985bc16-222c-418c-beab-852f17fbb668<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: '7fd5c9c6-0e5c-4a7c-9283-6f12b3e98fea', label: 'F7\n5.5', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 7fd5c9c6-0e5c-4a7c-9283-6f12b3e98fea<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 2.0, 8.0, 4.0, 8.0, DEVDEF_2 FUNCEXEC ; Ptgs: D3, C3, B3, A3, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: '6093228c-b6e4-4caf-b713-bf39077e9b01', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 6093228c-b6e4-4caf-b713-bf39077e9b01<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: '14166c14-8cc9-4d97-bd10-f8a84baa969f', label: 'FUNCEXEC\n5.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.5<br>Type: FUNCTION<br>Id: 14166c14-8cc9-4d97-bd10-f8a84baa969f<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: 'b0d32cc4-f8c9-407e-950e-5cb716b46988', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: b0d32cc4-f8c9-407e-950e-5cb716b46988<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'},
{id: 'aad4be96-f0a2-47f4-87e6-673ef15cc57a', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: aad4be96-f0a2-47f4-87e6-673ef15cc57a<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f01b95f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6093228c-b6e4-4caf-b713-bf39077e9b01', to: '14166c14-8cc9-4d97-bd10-f8a84baa969f'},
{from: 'b0d32cc4-f8c9-407e-950e-5cb716b46988', to: '14166c14-8cc9-4d97-bd10-f8a84baa969f'},
{from: '6985bc16-222c-418c-beab-852f17fbb668', to: '14166c14-8cc9-4d97-bd10-f8a84baa969f'},
{from: 'aad4be96-f0a2-47f4-87e6-673ef15cc57a', to: '14166c14-8cc9-4d97-bd10-f8a84baa969f'},
{from: '5e5cd785-2f4e-4a33-850b-19429ec80987', to: '14166c14-8cc9-4d97-bd10-f8a84baa969f'},
{from: '14166c14-8cc9-4d97-bd10-f8a84baa969f', to: '7fd5c9c6-0e5c-4a7c-9283-6f12b3e98fea'}
                            ]);