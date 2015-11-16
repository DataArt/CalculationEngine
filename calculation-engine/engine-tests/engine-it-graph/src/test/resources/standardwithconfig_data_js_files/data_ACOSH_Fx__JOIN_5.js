var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b687f156-f5f6-41fd-966a-9f11b482857c', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: b687f156-f5f6-41fd-966a-9f11b482857c<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: 'dafd291c-c09c-45d4-9d56-b8ca11af859f', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: dafd291c-c09c-45d4-9d56-b8ca11af859f<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: '39a5e0eb-928f-47ef-bd20-4919a47a68e5', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 39a5e0eb-928f-47ef-bd20-4919a47a68e5<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: 'df33aca0-0bf8-482a-b1c0-551e2346ec53', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: df33aca0-0bf8-482a-b1c0-551e2346ec53<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: '3ead8ef7-0f58-43d1-9604-499c78246741', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 3ead8ef7-0f58-43d1-9604-499c78246741<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: '64e4ef6c-aff7-43fd-a2b5-a78c2b3f1aa7', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 64e4ef6c-aff7-43fd-a2b5-a78c2b3f1aa7<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b687f156-f5f6-41fd-966a-9f11b482857c', to: '64e4ef6c-aff7-43fd-a2b5-a78c2b3f1aa7'},
{from: '64e4ef6c-aff7-43fd-a2b5-a78c2b3f1aa7', to: '3ead8ef7-0f58-43d1-9604-499c78246741'},
{from: '39a5e0eb-928f-47ef-bd20-4919a47a68e5', to: 'df33aca0-0bf8-482a-b1c0-551e2346ec53'},
{from: 'dafd291c-c09c-45d4-9d56-b8ca11af859f', to: '39a5e0eb-928f-47ef-bd20-4919a47a68e5'}
                            ]);