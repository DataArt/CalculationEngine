var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4a59829b-3367-4996-a131-80c35d9c7ef9', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 4a59829b-3367-4996-a131-80c35d9c7ef9<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: 'b644983e-88e0-427f-a182-9f25f0fa9b75', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: b644983e-88e0-427f-a182-9f25f0fa9b75<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: 'cf634bd7-2d2f-4c4b-916d-3d552dda08d3', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: cf634bd7-2d2f-4c4b-916d-3d552dda08d3<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: '9e3736c9-2fb7-4153-9efb-a50f14fc0ab4', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 9e3736c9-2fb7-4153-9efb-a50f14fc0ab4<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: '0a6e5990-8ac8-4c87-a506-390c749ea2b3', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 0a6e5990-8ac8-4c87-a506-390c749ea2b3<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9e3736c9-2fb7-4153-9efb-a50f14fc0ab4', to: '0a6e5990-8ac8-4c87-a506-390c749ea2b3'},
{from: '4a59829b-3367-4996-a131-80c35d9c7ef9', to: '0a6e5990-8ac8-4c87-a506-390c749ea2b3'},
{from: 'cf634bd7-2d2f-4c4b-916d-3d552dda08d3', to: '0a6e5990-8ac8-4c87-a506-390c749ea2b3'},
{from: '0a6e5990-8ac8-4c87-a506-390c749ea2b3', to: 'b644983e-88e0-427f-a182-9f25f0fa9b75'}
                            ]);