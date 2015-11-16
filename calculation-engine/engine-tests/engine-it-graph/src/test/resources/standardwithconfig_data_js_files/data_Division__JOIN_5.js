var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e0fdc3a2-c71c-49d7-b5f9-0628fd5d7792', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: e0fdc3a2-c71c-49d7-b5f9-0628fd5d7792<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '0f94964d-05ef-4efa-8fe0-eb65f1c3876b', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 0f94964d-05ef-4efa-8fe0-eb65f1c3876b<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '0cc30bfa-231b-4f52-8963-90f0324d5487', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 0cc30bfa-231b-4f52-8963-90f0324d5487<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '0841ef84-58cf-47dc-a627-86c5e589c0bb', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 0841ef84-58cf-47dc-a627-86c5e589c0bb<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0f94964d-05ef-4efa-8fe0-eb65f1c3876b', to: '0841ef84-58cf-47dc-a627-86c5e589c0bb'},
{from: 'e0fdc3a2-c71c-49d7-b5f9-0628fd5d7792', to: '0841ef84-58cf-47dc-a627-86c5e589c0bb'},
{from: '0841ef84-58cf-47dc-a627-86c5e589c0bb', to: '0cc30bfa-231b-4f52-8963-90f0324d5487'}
                            ]);