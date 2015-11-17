var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9baae02-ecf6-407d-9db6-615e0d63fc66', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: d9baae02-ecf6-407d-9db6-615e0d63fc66<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'},
{id: 'c2dfc91a-605c-47da-ba62-fc0f5d19b4ee', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: c2dfc91a-605c-47da-ba62-fc0f5d19b4ee<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'},
{id: '2264fb8a-abbe-4d71-8e4f-79d01a0ea4e9', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 2264fb8a-abbe-4d71-8e4f-79d01a0ea4e9<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c2dfc91a-605c-47da-ba62-fc0f5d19b4ee', to: '2264fb8a-abbe-4d71-8e4f-79d01a0ea4e9'},
{from: 'd9baae02-ecf6-407d-9db6-615e0d63fc66', to: 'c2dfc91a-605c-47da-ba62-fc0f5d19b4ee'}
                            ]);