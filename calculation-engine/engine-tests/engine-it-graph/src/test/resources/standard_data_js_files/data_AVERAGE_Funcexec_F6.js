var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2aa90844-d5af-4e4e-8200-a49b99a37cdc', label: 'F6\n5.25', color: '#31b0d5', title: 'Name: F6<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 2aa90844-d5af-4e4e-8200-a49b99a37cdc<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: 4.0, 9.0, 3.0, 5.0, DEVDEF_1 FUNCEXEC ; Ptgs: D2, C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: 'b6bd1d95-6c7f-498b-bcf8-9c5b7bfa1ea6', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: b6bd1d95-6c7f-498b-bcf8-9c5b7bfa1ea6<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: '3b7893ba-1f0e-4be2-888c-305aced2a981', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 3b7893ba-1f0e-4be2-888c-305aced2a981<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: 'b067205c-f07c-4d93-acf3-227342959a52', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: b067205c-f07c-4d93-acf3-227342959a52<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: 'd2310e7a-0014-4e8f-b144-24197aac9f36', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: d2310e7a-0014-4e8f-b144-24197aac9f36<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: '2c54b410-11d6-4781-b548-daa1236f3fd5', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2c54b410-11d6-4781-b548-daa1236f3fd5<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'},
{id: 'cb3e82c3-5272-4bc4-b979-1abca49b2515', label: 'FUNCEXEC\n5.25', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.25<br>Type: FUNCTION<br>Id: cb3e82c3-5272-4bc4-b979-1abca49b2515<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5386659f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b6bd1d95-6c7f-498b-bcf8-9c5b7bfa1ea6', to: 'cb3e82c3-5272-4bc4-b979-1abca49b2515'},
{from: '3b7893ba-1f0e-4be2-888c-305aced2a981', to: 'cb3e82c3-5272-4bc4-b979-1abca49b2515'},
{from: '2c54b410-11d6-4781-b548-daa1236f3fd5', to: 'cb3e82c3-5272-4bc4-b979-1abca49b2515'},
{from: 'd2310e7a-0014-4e8f-b144-24197aac9f36', to: 'cb3e82c3-5272-4bc4-b979-1abca49b2515'},
{from: 'b067205c-f07c-4d93-acf3-227342959a52', to: 'cb3e82c3-5272-4bc4-b979-1abca49b2515'},
{from: 'cb3e82c3-5272-4bc4-b979-1abca49b2515', to: '2aa90844-d5af-4e4e-8200-a49b99a37cdc'}
                            ]);