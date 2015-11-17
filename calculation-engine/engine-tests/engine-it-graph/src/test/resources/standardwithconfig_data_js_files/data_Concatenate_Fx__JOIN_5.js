var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f6d12141-1c7e-4f70-93a1-d170aed4f0b4', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: f6d12141-1c7e-4f70-93a1-d170aed4f0b4<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '85c26cfc-8613-4844-a5f9-0978b6460ec1', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 85c26cfc-8613-4844-a5f9-0978b6460ec1<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '1caa532b-502a-452f-b5cf-bedd07b063df', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 1caa532b-502a-452f-b5cf-bedd07b063df<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: 'c8608308-a41e-4d8e-ba5c-ed1f04ef92a3', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: c8608308-a41e-4d8e-ba5c-ed1f04ef92a3<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: 'edfdc9da-81e0-4cca-be49-74604c0440f5', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: edfdc9da-81e0-4cca-be49-74604c0440f5<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '4d746677-edf3-4a6a-ae69-8bac585aa910', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 4d746677-edf3-4a6a-ae69-8bac585aa910<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: 'db0e060c-428e-40c6-8e90-ac770f6a3af1', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: db0e060c-428e-40c6-8e90-ac770f6a3af1<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '66c11159-6d21-4594-b3f4-d9150925b21f', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 66c11159-6d21-4594-b3f4-d9150925b21f<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '66c11159-6d21-4594-b3f4-d9150925b21f', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'},
{from: '4d746677-edf3-4a6a-ae69-8bac585aa910', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'},
{from: 'f6d12141-1c7e-4f70-93a1-d170aed4f0b4', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'},
{from: '1caa532b-502a-452f-b5cf-bedd07b063df', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'},
{from: 'db0e060c-428e-40c6-8e90-ac770f6a3af1', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'},
{from: '85c26cfc-8613-4844-a5f9-0978b6460ec1', to: 'edfdc9da-81e0-4cca-be49-74604c0440f5'},
{from: 'c8608308-a41e-4d8e-ba5c-ed1f04ef92a3', to: '85c26cfc-8613-4844-a5f9-0978b6460ec1'}
                            ]);