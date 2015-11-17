var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9350f508-6e23-4586-ad89-ed6e508437c2', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 9350f508-6e23-4586-ad89-ed6e508437c2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: 'cafa59ff-0d99-4074-bccb-33f9ae0af51d', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: cafa59ff-0d99-4074-bccb-33f9ae0af51d<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: 'faed9fca-4ac5-4056-830c-b241281409e3', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: faed9fca-4ac5-4056-830c-b241281409e3<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '89dfc79a-9148-4bc5-bf86-6134895bc0c7', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 89dfc79a-9148-4bc5-bf86-6134895bc0c7<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '4f838d04-c06a-44e4-9052-d0caf11f2dc3', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 4f838d04-c06a-44e4-9052-d0caf11f2dc3<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: 'e42ddc5e-389b-41bd-aa58-275b56b354f0', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: e42ddc5e-389b-41bd-aa58-275b56b354f0<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4f838d04-c06a-44e4-9052-d0caf11f2dc3', to: '89dfc79a-9148-4bc5-bf86-6134895bc0c7'},
{from: '89dfc79a-9148-4bc5-bf86-6134895bc0c7', to: '9350f508-6e23-4586-ad89-ed6e508437c2'},
{from: 'e42ddc5e-389b-41bd-aa58-275b56b354f0', to: 'cafa59ff-0d99-4074-bccb-33f9ae0af51d'},
{from: 'faed9fca-4ac5-4056-830c-b241281409e3', to: 'e42ddc5e-389b-41bd-aa58-275b56b354f0'}
                            ]);