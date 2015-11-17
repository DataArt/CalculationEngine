var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '552e375a-7d96-427e-90e7-2c79cea991be', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 552e375a-7d96-427e-90e7-2c79cea991be<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'},
{id: '4ccfb045-99e4-487e-ba8b-28927f18746c', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 4ccfb045-99e4-487e-ba8b-28927f18746c<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'},
{id: '71bc6b8b-9647-426d-b560-2ce9dda52082', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 71bc6b8b-9647-426d-b560-2ce9dda52082<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '71bc6b8b-9647-426d-b560-2ce9dda52082', to: '552e375a-7d96-427e-90e7-2c79cea991be'},
{from: '552e375a-7d96-427e-90e7-2c79cea991be', to: '4ccfb045-99e4-487e-ba8b-28927f18746c'}
                            ]);