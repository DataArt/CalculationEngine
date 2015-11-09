var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6c026337-69cc-4dd0-9b79-72e2cd81fdf8', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 6c026337-69cc-4dd0-9b79-72e2cd81fdf8<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a434a8'},
{id: 'f92d5717-aa16-4e2e-94c9-6ad2a9054550', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: f92d5717-aa16-4e2e-94c9-6ad2a9054550<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a434a8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6c026337-69cc-4dd0-9b79-72e2cd81fdf8', to: 'f92d5717-aa16-4e2e-94c9-6ad2a9054550'}
                            ]);