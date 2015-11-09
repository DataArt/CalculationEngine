var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '379b4655-26df-406c-82fb-0f67f1eec792', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 379b4655-26df-406c-82fb-0f67f1eec792<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '67e0c77e-2b8b-4774-b5c5-849b1f53971e', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 67e0c77e-2b8b-4774-b5c5-849b1f53971e<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '0b4592b6-fbfd-42c7-ac9d-0a26682ba07f', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 0b4592b6-fbfd-42c7-ac9d-0a26682ba07f<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: 'dea366ff-af7f-4192-b14b-081619e7524b', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: dea366ff-af7f-4192-b14b-081619e7524b<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: 'cc4d6fdf-0a54-4e7a-b1d1-fa65e2cc7285', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: cc4d6fdf-0a54-4e7a-b1d1-fa65e2cc7285<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: 'eee894df-ca9a-4245-a727-c4206d22f57d', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: eee894df-ca9a-4245-a727-c4206d22f57d<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '379b4655-26df-406c-82fb-0f67f1eec792', to: 'dea366ff-af7f-4192-b14b-081619e7524b'},
{from: '67e0c77e-2b8b-4774-b5c5-849b1f53971e', to: '0b4592b6-fbfd-42c7-ac9d-0a26682ba07f'},
{from: 'eee894df-ca9a-4245-a727-c4206d22f57d', to: '67e0c77e-2b8b-4774-b5c5-849b1f53971e'},
{from: 'cc4d6fdf-0a54-4e7a-b1d1-fa65e2cc7285', to: '379b4655-26df-406c-82fb-0f67f1eec792'}
                            ]);