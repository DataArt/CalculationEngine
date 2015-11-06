var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'db9dde22-a4d9-4e26-a255-92397e62197e', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: db9dde22-a4d9-4e26-a255-92397e62197e<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'},
{id: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3', label: 'FUNCEXEC\n9.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 9.0<br>Type: FUNCTION<br>Id: ebf35152-8173-4203-9e68-0d8b84dcf0f3<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'},
{id: '203a2228-3a42-465c-a587-7811e55c31dc', label: 'F8\n9.0', color: '#31b0d5', title: 'Name: F8<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 203a2228-3a42-465c-a587-7811e55c31dc<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 0.0, 8.0, 1.0, DEVDEF_3 FUNCEXEC ; Ptgs: C4, B4, A4, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'},
{id: 'ce506a3f-46cb-487b-a307-514fdf7710ca', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: ce506a3f-46cb-487b-a307-514fdf7710ca<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'},
{id: '06050c15-4395-4f94-a61c-afe7fdc8622f', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 06050c15-4395-4f94-a61c-afe7fdc8622f<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'},
{id: '6c995db8-873f-410b-8aff-7f9493b1bb18', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 6c995db8-873f-410b-8aff-7f9493b1bb18<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b02e036'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db9dde22-a4d9-4e26-a255-92397e62197e', to: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3'},
{from: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3', to: '203a2228-3a42-465c-a587-7811e55c31dc'},
{from: '6c995db8-873f-410b-8aff-7f9493b1bb18', to: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3'},
{from: '06050c15-4395-4f94-a61c-afe7fdc8622f', to: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3'},
{from: 'ce506a3f-46cb-487b-a307-514fdf7710ca', to: 'ebf35152-8173-4203-9e68-0d8b84dcf0f3'}
                            ]);