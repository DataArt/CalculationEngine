var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0af4fda8-ef76-48bc-8514-ec0c0a6010ca', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 0af4fda8-ef76-48bc-8514-ec0c0a6010ca<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: 'dbac209f-b272-442b-8eb6-c7094014357a', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: dbac209f-b272-442b-8eb6-c7094014357a<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '120c60c0-538d-40c3-a582-1faa2ef732df', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 120c60c0-538d-40c3-a582-1faa2ef732df<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: 'ed394a02-989b-4436-90ea-e6599c3139f2', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: ed394a02-989b-4436-90ea-e6599c3139f2<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: 'c75bd8f8-80a5-405f-b6a5-903b8276c15e', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: c75bd8f8-80a5-405f-b6a5-903b8276c15e<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '5471e380-3c34-4893-bedb-bfc0f5087b67', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5471e380-3c34-4893-bedb-bfc0f5087b67<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '33da87cb-488b-44c7-bae3-842997a1724d', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 33da87cb-488b-44c7-bae3-842997a1724d<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '908758a9-b89d-470a-a840-48e9e078905b', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 908758a9-b89d-470a-a840-48e9e078905b<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5471e380-3c34-4893-bedb-bfc0f5087b67', to: 'c75bd8f8-80a5-405f-b6a5-903b8276c15e'},
{from: 'ed394a02-989b-4436-90ea-e6599c3139f2', to: '33da87cb-488b-44c7-bae3-842997a1724d'},
{from: '33da87cb-488b-44c7-bae3-842997a1724d', to: '120c60c0-538d-40c3-a582-1faa2ef732df'},
{from: '0af4fda8-ef76-48bc-8514-ec0c0a6010ca', to: '33da87cb-488b-44c7-bae3-842997a1724d'},
{from: '908758a9-b89d-470a-a840-48e9e078905b', to: '5471e380-3c34-4893-bedb-bfc0f5087b67'},
{from: 'dbac209f-b272-442b-8eb6-c7094014357a', to: '5471e380-3c34-4893-bedb-bfc0f5087b67'}
                            ]);