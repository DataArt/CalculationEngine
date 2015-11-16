var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd17b7c7b-5227-4290-96aa-6739a2f19d28', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: d17b7c7b-5227-4290-96aa-6739a2f19d28<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '003685ee-39da-444a-b5b4-9683bda7f5a5', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 003685ee-39da-444a-b5b4-9683bda7f5a5<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: 'e2167b93-6faa-4a72-b333-88959363d41f', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: e2167b93-6faa-4a72-b333-88959363d41f<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: 'cae00381-d5c9-4fa2-b4da-9b1a17058a98', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: cae00381-d5c9-4fa2-b4da-9b1a17058a98<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '7d7b1133-44e3-47ed-a180-2c25c19b4bac', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 7d7b1133-44e3-47ed-a180-2c25c19b4bac<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: 'd860f991-128a-44be-8ee2-90a0f1e0459f', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: d860f991-128a-44be-8ee2-90a0f1e0459f<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '80440d5b-ca7a-4e7b-854d-a7db0c43b3db', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 80440d5b-ca7a-4e7b-854d-a7db0c43b3db<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '28112906-a24e-49a8-bd3e-65fd6d87468e', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 28112906-a24e-49a8-bd3e-65fd6d87468e<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7d7b1133-44e3-47ed-a180-2c25c19b4bac', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'},
{from: 'd860f991-128a-44be-8ee2-90a0f1e0459f', to: 'cae00381-d5c9-4fa2-b4da-9b1a17058a98'},
{from: '28112906-a24e-49a8-bd3e-65fd6d87468e', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'},
{from: 'e2167b93-6faa-4a72-b333-88959363d41f', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'},
{from: '003685ee-39da-444a-b5b4-9683bda7f5a5', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'},
{from: '80440d5b-ca7a-4e7b-854d-a7db0c43b3db', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'},
{from: 'd17b7c7b-5227-4290-96aa-6739a2f19d28', to: 'd860f991-128a-44be-8ee2-90a0f1e0459f'}
                            ]);