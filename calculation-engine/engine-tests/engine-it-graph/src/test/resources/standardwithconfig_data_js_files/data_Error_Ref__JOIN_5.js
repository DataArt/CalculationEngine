var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fda26a42-f462-45b2-831c-8103a20f88c5', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: fda26a42-f462-45b2-831c-8103a20f88c5<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: 'e33a718a-b848-4688-9198-ac4ddcabf05c', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: e33a718a-b848-4688-9198-ac4ddcabf05c<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: '975abab2-ae64-4b47-beaa-cc195ea43608', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 975abab2-ae64-4b47-beaa-cc195ea43608<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: '527db826-7bae-445f-9336-f7b7534d1727', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 527db826-7bae-445f-9336-f7b7534d1727<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '527db826-7bae-445f-9336-f7b7534d1727', to: '975abab2-ae64-4b47-beaa-cc195ea43608'},
{from: 'e33a718a-b848-4688-9198-ac4ddcabf05c', to: 'fda26a42-f462-45b2-831c-8103a20f88c5'}
                            ]);