var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6326c03a-b4cf-40a9-b58f-645084c74841', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 6326c03a-b4cf-40a9-b58f-645084c74841<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '4e4bae6f-2455-472f-9797-a5ad1074646d', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4e4bae6f-2455-472f-9797-a5ad1074646d<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '1a0f7b7b-61a9-48df-a663-f5dacab1b422', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 1a0f7b7b-61a9-48df-a663-f5dacab1b422<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '9ea9d5ae-0dd9-46e2-990b-3ebe40130604', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 9ea9d5ae-0dd9-46e2-990b-3ebe40130604<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '735e0795-881d-4f19-8980-84117cc356f5', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 735e0795-881d-4f19-8980-84117cc356f5<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: 'd1078d43-19da-4920-ba9c-bcd6cbf98601', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: d1078d43-19da-4920-ba9c-bcd6cbf98601<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: 'c63490e2-bdd4-496b-a970-cc108e7a9110', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: c63490e2-bdd4-496b-a970-cc108e7a9110<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '8962ff68-6f22-40dd-a16a-a9bf8c53e729', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 8962ff68-6f22-40dd-a16a-a9bf8c53e729<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd1078d43-19da-4920-ba9c-bcd6cbf98601', to: '8962ff68-6f22-40dd-a16a-a9bf8c53e729'},
{from: '9ea9d5ae-0dd9-46e2-990b-3ebe40130604', to: 'c63490e2-bdd4-496b-a970-cc108e7a9110'},
{from: '735e0795-881d-4f19-8980-84117cc356f5', to: '8962ff68-6f22-40dd-a16a-a9bf8c53e729'},
{from: '8962ff68-6f22-40dd-a16a-a9bf8c53e729', to: '1a0f7b7b-61a9-48df-a663-f5dacab1b422'},
{from: '4e4bae6f-2455-472f-9797-a5ad1074646d', to: 'c63490e2-bdd4-496b-a970-cc108e7a9110'},
{from: 'c63490e2-bdd4-496b-a970-cc108e7a9110', to: '6326c03a-b4cf-40a9-b58f-645084c74841'}
                            ]);