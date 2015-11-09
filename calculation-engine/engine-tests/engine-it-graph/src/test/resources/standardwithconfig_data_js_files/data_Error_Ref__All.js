var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'db47e2be-7153-401b-b37a-5500c8864bd2', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: db47e2be-7153-401b-b37a-5500c8864bd2<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: '6db31779-0642-43c6-913c-40b287d23d34', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 6db31779-0642-43c6-913c-40b287d23d34<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: 'ad575534-6618-4945-9c08-b02120ecdc0b', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: ad575534-6618-4945-9c08-b02120ecdc0b<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: '6dcf1261-05a6-4efd-8c0e-9e319ab3ac3f', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 6dcf1261-05a6-4efd-8c0e-9e319ab3ac3f<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6dcf1261-05a6-4efd-8c0e-9e319ab3ac3f', to: 'db47e2be-7153-401b-b37a-5500c8864bd2'},
{from: '6db31779-0642-43c6-913c-40b287d23d34', to: 'ad575534-6618-4945-9c08-b02120ecdc0b'}
                            ]);