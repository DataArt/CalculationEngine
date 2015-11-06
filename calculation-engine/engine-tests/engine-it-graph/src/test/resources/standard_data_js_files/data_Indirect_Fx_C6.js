var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b70a0054-70e4-4bf3-8ca7-56bde56c8d6a', label: 'C6\n1.333', color: '#31b0d5', title: 'Name: C6<br>Value: 1.333<br>Type: CELL_WITH_FORMULA<br>Id: b70a0054-70e4-4bf3-8ca7-56bde56c8d6a<br>Formula Expression: Formula String: INDIRECT(A2); Formula Values: INDIRECT(B2); Formula Ptg: B2 INDIRECT ; Ptgs: A2 INDIRECT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@173373b4'},
{id: '5eed9138-5c11-4c60-a73e-866af8ed6318', label: 'A2\nB2', color: '#31b0d5', title: 'Name: A2<br>Value: B2<br>Type: CELL_WITH_VALUE<br>Id: 5eed9138-5c11-4c60-a73e-866af8ed6318<br>Formula Expression: Formula String: A2; Formula Values: B2; Formula Ptg: B2; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@173373b4'},
{id: '9a2c51b2-bd15-40cd-b91e-8217f52d0862', label: 'INDIRECT\n1.333', color: '#f0ad4e', title: 'Name: INDIRECT<br>Value: 1.333<br>Type: FUNCTION<br>Id: 9a2c51b2-bd15-40cd-b91e-8217f52d0862<br>Formula Expression: Formula String: INDIRECT(A2); Formula Values: INDIRECT(B2); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@173373b4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5eed9138-5c11-4c60-a73e-866af8ed6318', to: '9a2c51b2-bd15-40cd-b91e-8217f52d0862'},
{from: '9a2c51b2-bd15-40cd-b91e-8217f52d0862', to: 'b70a0054-70e4-4bf3-8ca7-56bde56c8d6a'}
                            ]);