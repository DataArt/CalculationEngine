var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ca8ece11-0de2-48e9-9946-0f116186d3b8', label: 'D3\n77.7', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: ca8ece11-0de2-48e9-9946-0f116186d3b8<br>Formula Expression: Formula String: D3; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2f2cc1'},
{id: '2c3c8f82-ae3d-4b9a-9c0d-2d3ba0010065', label: 'E8\n77.7', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_FORMULA<br>Id: 2c3c8f82-ae3d-4b9a-9c0d-2d3ba0010065<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: 77.7 ABS ; Ptgs: D3 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2f2cc1'},
{id: 'ce7f5742-ba6a-4ec6-acdd-2835d6fc3d51', label: 'ABS\n77.7', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 77.7<br>Type: FUNCTION<br>Id: ce7f5742-ba6a-4ec6-acdd-2835d6fc3d51<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2f2cc1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ce7f5742-ba6a-4ec6-acdd-2835d6fc3d51', to: '2c3c8f82-ae3d-4b9a-9c0d-2d3ba0010065'},
{from: 'ca8ece11-0de2-48e9-9946-0f116186d3b8', to: 'ce7f5742-ba6a-4ec6-acdd-2835d6fc3d51'}
                            ]);