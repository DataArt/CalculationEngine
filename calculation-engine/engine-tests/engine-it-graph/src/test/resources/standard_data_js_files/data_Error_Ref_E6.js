var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b4cf2217-b66c-4ac6-b9d0-81cdf9bc4c9b', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: b4cf2217-b66c-4ac6-b9d0-81cdf9bc4c9b<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b3c354a'},
{id: 'f08c0184-4af2-4c1a-90e7-09f17ac9d6cb', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: f08c0184-4af2-4c1a-90e7-09f17ac9d6cb<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b3c354a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f08c0184-4af2-4c1a-90e7-09f17ac9d6cb', to: 'b4cf2217-b66c-4ac6-b9d0-81cdf9bc4c9b'}
                            ]);