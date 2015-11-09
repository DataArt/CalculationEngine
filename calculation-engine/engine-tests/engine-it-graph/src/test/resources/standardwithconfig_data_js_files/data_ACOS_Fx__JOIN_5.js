var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1ab5db82-a957-4ded-8393-8f385cb8984e', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 1ab5db82-a957-4ded-8393-8f385cb8984e<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'},
{id: 'ddc3ab1e-f647-4d93-b3d5-61ace45faae7', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: ddc3ab1e-f647-4d93-b3d5-61ace45faae7<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'},
{id: '6ad354cd-91fd-4d29-8472-382a40c29047', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 6ad354cd-91fd-4d29-8472-382a40c29047<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6ad354cd-91fd-4d29-8472-382a40c29047', to: '1ab5db82-a957-4ded-8393-8f385cb8984e'},
{from: '1ab5db82-a957-4ded-8393-8f385cb8984e', to: 'ddc3ab1e-f647-4d93-b3d5-61ace45faae7'}
                            ]);