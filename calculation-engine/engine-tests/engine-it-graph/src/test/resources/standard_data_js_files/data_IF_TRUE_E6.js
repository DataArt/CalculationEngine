var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a37748e0-cd48-4599-a524-ea58a0d460ff', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: a37748e0-cd48-4599-a524-ea58a0d460ff<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'},
{id: 'e6e975ca-8a03-45e5-a54b-999294de6257', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: e6e975ca-8a03-45e5-a54b-999294de6257<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'},
{id: '7f79113a-3772-47f9-994a-9d09629506f5', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 7f79113a-3772-47f9-994a-9d09629506f5<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'},
{id: '57d384b1-3b8b-40d5-a041-e9d32623c069', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 57d384b1-3b8b-40d5-a041-e9d32623c069<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'},
{id: '9d16ae88-64cf-4555-a228-4150408c57af', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 9d16ae88-64cf-4555-a228-4150408c57af<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'},
{id: 'ee3f98e1-8720-4eea-83ec-772443c6bba7', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: ee3f98e1-8720-4eea-83ec-772443c6bba7<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b6813df'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a37748e0-cd48-4599-a524-ea58a0d460ff', to: '9d16ae88-64cf-4555-a228-4150408c57af'},
{from: '57d384b1-3b8b-40d5-a041-e9d32623c069', to: 'a37748e0-cd48-4599-a524-ea58a0d460ff'},
{from: 'e6e975ca-8a03-45e5-a54b-999294de6257', to: '9d16ae88-64cf-4555-a228-4150408c57af'},
{from: '7f79113a-3772-47f9-994a-9d09629506f5', to: 'a37748e0-cd48-4599-a524-ea58a0d460ff'},
{from: '9d16ae88-64cf-4555-a228-4150408c57af', to: 'ee3f98e1-8720-4eea-83ec-772443c6bba7'}
                            ]);