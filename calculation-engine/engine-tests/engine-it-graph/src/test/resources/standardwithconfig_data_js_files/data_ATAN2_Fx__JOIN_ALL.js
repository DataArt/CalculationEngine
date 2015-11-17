var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '56c61fd1-f930-4571-bbc1-69203a6f68fe', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 56c61fd1-f930-4571-bbc1-69203a6f68fe<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'a420420f-b5d1-4715-99ad-f56c6921ff35', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: a420420f-b5d1-4715-99ad-f56c6921ff35<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '6352ecef-f899-4b9f-979e-2aad41644251', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 6352ecef-f899-4b9f-979e-2aad41644251<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'e6a76f22-71cb-48a5-bf08-2c4e6a4ef2fb', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: e6a76f22-71cb-48a5-bf08-2c4e6a4ef2fb<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '77314edc-5423-4222-9e23-105c031a789d', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 77314edc-5423-4222-9e23-105c031a789d<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '086ec3b3-967a-4277-8e38-0c385dae7f47', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 086ec3b3-967a-4277-8e38-0c385dae7f47<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'f02d92c3-5f51-4d11-ab92-43fff33ea210', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: f02d92c3-5f51-4d11-ab92-43fff33ea210<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'a7527dea-11e3-4b6d-8b4b-b6638854954b', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: a7527dea-11e3-4b6d-8b4b-b6638854954b<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '086ec3b3-967a-4277-8e38-0c385dae7f47', to: 'a420420f-b5d1-4715-99ad-f56c6921ff35'},
{from: '6352ecef-f899-4b9f-979e-2aad41644251', to: 'f02d92c3-5f51-4d11-ab92-43fff33ea210'},
{from: '77314edc-5423-4222-9e23-105c031a789d', to: 'f02d92c3-5f51-4d11-ab92-43fff33ea210'},
{from: 'f02d92c3-5f51-4d11-ab92-43fff33ea210', to: 'a7527dea-11e3-4b6d-8b4b-b6638854954b'},
{from: 'a420420f-b5d1-4715-99ad-f56c6921ff35', to: 'e6a76f22-71cb-48a5-bf08-2c4e6a4ef2fb'},
{from: '56c61fd1-f930-4571-bbc1-69203a6f68fe', to: 'a420420f-b5d1-4715-99ad-f56c6921ff35'}
                            ]);