var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ddb9805c-6b4e-47a6-abab-922f0062a5a1', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: ddb9805c-6b4e-47a6-abab-922f0062a5a1<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a434a8'},
{id: '79dbdf32-7796-44ca-b11e-feea92c81276', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 79dbdf32-7796-44ca-b11e-feea92c81276<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a434a8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ddb9805c-6b4e-47a6-abab-922f0062a5a1', to: '79dbdf32-7796-44ca-b11e-feea92c81276'}
                            ]);