var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f07760c8-03e8-40a9-889f-d6c15391e291', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: f07760c8-03e8-40a9-889f-d6c15391e291<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: 'd30d5844-d0cc-403a-9850-a3af913f452d', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: d30d5844-d0cc-403a-9850-a3af913f452d<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: 'e3a9d095-ea2f-48c1-b9d1-8f1b789136c8', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: e3a9d095-ea2f-48c1-b9d1-8f1b789136c8<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: '49206d24-b7f0-4530-8722-7e6379747e0c', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 49206d24-b7f0-4530-8722-7e6379747e0c<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e3a9d095-ea2f-48c1-b9d1-8f1b789136c8', to: 'd30d5844-d0cc-403a-9850-a3af913f452d'},
{from: '49206d24-b7f0-4530-8722-7e6379747e0c', to: 'd30d5844-d0cc-403a-9850-a3af913f452d'},
{from: 'd30d5844-d0cc-403a-9850-a3af913f452d', to: 'f07760c8-03e8-40a9-889f-d6c15391e291'}
                            ]);