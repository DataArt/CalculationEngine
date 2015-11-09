var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd485c90d-e8ed-4877-a315-8fad8b711d2a', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: d485c90d-e8ed-4877-a315-8fad8b711d2a<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'},
{id: 'b78952d3-6720-4a3a-b7f4-ca2c2a14f45c', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: b78952d3-6720-4a3a-b7f4-ca2c2a14f45c<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'},
{id: 'a09eca37-8075-4a0d-a413-cda3dd6aebf6', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: a09eca37-8075-4a0d-a413-cda3dd6aebf6<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b78952d3-6720-4a3a-b7f4-ca2c2a14f45c', to: 'a09eca37-8075-4a0d-a413-cda3dd6aebf6'},
{from: 'a09eca37-8075-4a0d-a413-cda3dd6aebf6', to: 'd485c90d-e8ed-4877-a315-8fad8b711d2a'}
                            ]);