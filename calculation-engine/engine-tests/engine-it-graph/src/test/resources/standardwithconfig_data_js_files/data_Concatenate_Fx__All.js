var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fb8bbf28-f103-4b30-a83b-47470606fae8', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: fb8bbf28-f103-4b30-a83b-47470606fae8<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '62e109c7-4bab-4fea-afc5-56e7f9e2f637', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 62e109c7-4bab-4fea-afc5-56e7f9e2f637<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: 'c5d301ec-098e-4ef2-8312-26d6ec9af150', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: c5d301ec-098e-4ef2-8312-26d6ec9af150<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '6fb0d6cd-ca5a-417c-ad0b-59f269c2c0e3', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 6fb0d6cd-ca5a-417c-ad0b-59f269c2c0e3<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: 'fba46234-c899-4953-8fa4-90870b7d821b', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: fba46234-c899-4953-8fa4-90870b7d821b<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '03e104e2-b9a5-43ea-b6e9-ae6570379034', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 03e104e2-b9a5-43ea-b6e9-ae6570379034<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '3e1dd8cb-82bd-45eb-a8a6-5fbc77431dc8', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 3e1dd8cb-82bd-45eb-a8a6-5fbc77431dc8<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'},
{id: '6c7f447e-5759-4f40-864b-0ad6034c601b', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 6c7f447e-5759-4f40-864b-0ad6034c601b<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@57f9f387'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fba46234-c899-4953-8fa4-90870b7d821b', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'},
{from: '03e104e2-b9a5-43ea-b6e9-ae6570379034', to: '6fb0d6cd-ca5a-417c-ad0b-59f269c2c0e3'},
{from: '6c7f447e-5759-4f40-864b-0ad6034c601b', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'},
{from: 'c5d301ec-098e-4ef2-8312-26d6ec9af150', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'},
{from: '62e109c7-4bab-4fea-afc5-56e7f9e2f637', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'},
{from: '3e1dd8cb-82bd-45eb-a8a6-5fbc77431dc8', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'},
{from: 'fb8bbf28-f103-4b30-a83b-47470606fae8', to: '03e104e2-b9a5-43ea-b6e9-ae6570379034'}
                            ]);