var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9833f251-3aa4-4f14-81b5-56a6423f03bc', label: 'C6\nFALSE', color: '#31b0d5', title: 'Name: C6<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 9833f251-3aa4-4f14-81b5-56a6423f03bc<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: some ISNONTEXT ; Ptgs: B1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@743e66f7'},
{id: '2aa3158f-1112-4816-816f-33e7da476040', label: 'B1\nsome', color: '#31b0d5', title: 'Name: B1<br>Value: some<br>Type: CELL_WITH_VALUE<br>Id: 2aa3158f-1112-4816-816f-33e7da476040<br>Formula Expression: Formula String: B1; Formula Values: some; Formula Ptg: some; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@743e66f7'},
{id: 'b9f31b61-488e-4ea9-8e11-9fd64dcc0442', label: 'ISNONTEXT\nFALSE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Value: FALSE<br>Type: FUNCTION<br>Id: b9f31b61-488e-4ea9-8e11-9fd64dcc0442<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@743e66f7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b9f31b61-488e-4ea9-8e11-9fd64dcc0442', to: '9833f251-3aa4-4f14-81b5-56a6423f03bc'},
{from: '2aa3158f-1112-4816-816f-33e7da476040', to: 'b9f31b61-488e-4ea9-8e11-9fd64dcc0442'}
                            ]);