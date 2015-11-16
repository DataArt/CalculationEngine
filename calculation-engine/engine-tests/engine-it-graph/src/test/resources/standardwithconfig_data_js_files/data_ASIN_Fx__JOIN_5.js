var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9a6b9df2-ab19-44b0-8650-7ef99a7d8f02', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 9a6b9df2-ab19-44b0-8650-7ef99a7d8f02<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '7a17533e-fae3-479c-8b5c-9c5017225f8d', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 7a17533e-fae3-479c-8b5c-9c5017225f8d<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '07d587e8-fb02-4230-905f-f25d190670af', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 07d587e8-fb02-4230-905f-f25d190670af<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: 'c097700f-5f64-4f6f-9569-e9e86e6d8647', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: c097700f-5f64-4f6f-9569-e9e86e6d8647<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '7b95c6bb-ed1e-477c-b95f-48c3218d9ae9', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 7b95c6bb-ed1e-477c-b95f-48c3218d9ae9<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '269b9953-f865-4e30-9cee-44f6065d3a11', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 269b9953-f865-4e30-9cee-44f6065d3a11<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '269b9953-f865-4e30-9cee-44f6065d3a11', to: '9a6b9df2-ab19-44b0-8650-7ef99a7d8f02'},
{from: '7a17533e-fae3-479c-8b5c-9c5017225f8d', to: '269b9953-f865-4e30-9cee-44f6065d3a11'},
{from: 'c097700f-5f64-4f6f-9569-e9e86e6d8647', to: '7b95c6bb-ed1e-477c-b95f-48c3218d9ae9'},
{from: '7b95c6bb-ed1e-477c-b95f-48c3218d9ae9', to: '07d587e8-fb02-4230-905f-f25d190670af'}
                            ]);