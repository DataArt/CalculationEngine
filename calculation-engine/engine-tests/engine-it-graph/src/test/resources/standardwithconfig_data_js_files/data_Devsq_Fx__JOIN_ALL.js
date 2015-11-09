var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4ac52345-e86f-4e79-8b78-caebc178a83c', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 4ac52345-e86f-4e79-8b78-caebc178a83c<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e840abf'},
{id: 'b7e7cb6d-3e8b-40dc-9b4c-d6d0e358d5b4', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: b7e7cb6d-3e8b-40dc-9b4c-d6d0e358d5b4<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e840abf'},
{id: 'be48a11d-4965-43db-a77e-52eaee1f3a84', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: be48a11d-4965-43db-a77e-52eaee1f3a84<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e840abf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b7e7cb6d-3e8b-40dc-9b4c-d6d0e358d5b4', to: 'be48a11d-4965-43db-a77e-52eaee1f3a84'},
{from: 'be48a11d-4965-43db-a77e-52eaee1f3a84', to: '4ac52345-e86f-4e79-8b78-caebc178a83c'}
                            ]);