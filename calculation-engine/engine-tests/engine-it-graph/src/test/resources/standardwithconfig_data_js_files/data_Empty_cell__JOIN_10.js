var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd0103be9-36dd-48e0-bb9c-2eff0ef45e4b', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: d0103be9-36dd-48e0-bb9c-2eff0ef45e4b<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '11404fa1-8ff7-4654-9b94-8cc1018c5db6', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: 11404fa1-8ff7-4654-9b94-8cc1018c5db6<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '5a529cd1-dcb9-4886-88e0-9ae7d99e5678', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 5a529cd1-dcb9-4886-88e0-9ae7d99e5678<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '9ba7dd2f-e55b-4fdd-bfac-ffb6de1c1e49', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 9ba7dd2f-e55b-4fdd-bfac-ffb6de1c1e49<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '6eaf94d3-a6f1-489e-a8c9-de19279cdbc3', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 6eaf94d3-a6f1-489e-a8c9-de19279cdbc3<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '11404fa1-8ff7-4654-9b94-8cc1018c5db6', to: '6eaf94d3-a6f1-489e-a8c9-de19279cdbc3'},
{from: 'd0103be9-36dd-48e0-bb9c-2eff0ef45e4b', to: '5a529cd1-dcb9-4886-88e0-9ae7d99e5678'},
{from: '9ba7dd2f-e55b-4fdd-bfac-ffb6de1c1e49', to: '11404fa1-8ff7-4654-9b94-8cc1018c5db6'}
                            ]);