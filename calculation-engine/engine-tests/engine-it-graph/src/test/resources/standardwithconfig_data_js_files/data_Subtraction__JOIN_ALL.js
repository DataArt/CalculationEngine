var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ad1c32a5-ef8a-40ee-ab54-436d731a5921', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: ad1c32a5-ef8a-40ee-ab54-436d731a5921<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: 'cee3e463-ff8d-4188-b12d-5000a66f2b3c', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: cee3e463-ff8d-4188-b12d-5000a66f2b3c<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: '3a3e7256-0363-420e-87aa-aad25fe53450', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 3a3e7256-0363-420e-87aa-aad25fe53450<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: '7f274adb-e093-45cc-bfbd-77ba4c90e89b', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: 7f274adb-e093-45cc-bfbd-77ba4c90e89b<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ad1c32a5-ef8a-40ee-ab54-436d731a5921', to: '7f274adb-e093-45cc-bfbd-77ba4c90e89b'},
{from: '7f274adb-e093-45cc-bfbd-77ba4c90e89b', to: 'cee3e463-ff8d-4188-b12d-5000a66f2b3c'},
{from: '3a3e7256-0363-420e-87aa-aad25fe53450', to: '7f274adb-e093-45cc-bfbd-77ba4c90e89b'}
                            ]);