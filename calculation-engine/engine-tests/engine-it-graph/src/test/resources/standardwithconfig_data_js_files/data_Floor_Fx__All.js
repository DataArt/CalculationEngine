var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1007c088-b51f-4779-9faf-e9c3bc686932', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 1007c088-b51f-4779-9faf-e9c3bc686932<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '93b52578-0fcb-4222-9994-992934ff7cde', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 93b52578-0fcb-4222-9994-992934ff7cde<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: 'e3ae8c3f-de8f-4963-853a-e1463274ac7f', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: e3ae8c3f-de8f-4963-853a-e1463274ac7f<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '19d780a6-87fa-44b6-8b05-1abad7539dee', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 19d780a6-87fa-44b6-8b05-1abad7539dee<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: 'ec357b80-6c75-4162-9a37-1582f08aa44d', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: ec357b80-6c75-4162-9a37-1582f08aa44d<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: 'aaa30573-f90e-427b-bf44-3b7e31287ce4', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: aaa30573-f90e-427b-bf44-3b7e31287ce4<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '4aa11db0-d4a6-4d44-aae9-9ef6ebe52afb', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 4aa11db0-d4a6-4d44-aae9-9ef6ebe52afb<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '4e8769bc-83f2-4b97-bf2d-8cdf1a2d2b93', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4e8769bc-83f2-4b97-bf2d-8cdf1a2d2b93<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '19d780a6-87fa-44b6-8b05-1abad7539dee', to: '4e8769bc-83f2-4b97-bf2d-8cdf1a2d2b93'},
{from: 'ec357b80-6c75-4162-9a37-1582f08aa44d', to: '4aa11db0-d4a6-4d44-aae9-9ef6ebe52afb'},
{from: 'aaa30573-f90e-427b-bf44-3b7e31287ce4', to: '4e8769bc-83f2-4b97-bf2d-8cdf1a2d2b93'},
{from: '4e8769bc-83f2-4b97-bf2d-8cdf1a2d2b93', to: '1007c088-b51f-4779-9faf-e9c3bc686932'},
{from: 'e3ae8c3f-de8f-4963-853a-e1463274ac7f', to: 'ec357b80-6c75-4162-9a37-1582f08aa44d'},
{from: '93b52578-0fcb-4222-9994-992934ff7cde', to: 'ec357b80-6c75-4162-9a37-1582f08aa44d'}
                            ]);