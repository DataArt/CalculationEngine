var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f8f74e49-d7a1-4b2d-8487-b37ef52e3b6e', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: f8f74e49-d7a1-4b2d-8487-b37ef52e3b6e<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: '67edfdaf-84cc-405b-a77f-48be71b7e683', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 67edfdaf-84cc-405b-a77f-48be71b7e683<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: '51fee1e1-42cc-4e5d-8407-4164fd443bf5', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 51fee1e1-42cc-4e5d-8407-4164fd443bf5<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: '7d45f81e-0c77-4435-ba98-6362ac880784', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: 7d45f81e-0c77-4435-ba98-6362ac880784<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '51fee1e1-42cc-4e5d-8407-4164fd443bf5', to: '7d45f81e-0c77-4435-ba98-6362ac880784'},
{from: '67edfdaf-84cc-405b-a77f-48be71b7e683', to: 'f8f74e49-d7a1-4b2d-8487-b37ef52e3b6e'}
                            ]);