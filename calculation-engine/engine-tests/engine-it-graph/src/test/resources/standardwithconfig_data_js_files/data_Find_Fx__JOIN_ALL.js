var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '272af6ef-c9d8-4cee-9282-d9b3e441887e', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 272af6ef-c9d8-4cee-9282-d9b3e441887e<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: 'aca526b3-ee2d-4a0e-9b60-37d09ed4081c', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: aca526b3-ee2d-4a0e-9b60-37d09ed4081c<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: 'cf6da866-3090-44bc-84dd-5b523da0dc04', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: cf6da866-3090-44bc-84dd-5b523da0dc04<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: 'b45275c1-36a9-4561-b4ff-86e8a83b2284', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: b45275c1-36a9-4561-b4ff-86e8a83b2284<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b45275c1-36a9-4561-b4ff-86e8a83b2284', to: '272af6ef-c9d8-4cee-9282-d9b3e441887e'},
{from: 'cf6da866-3090-44bc-84dd-5b523da0dc04', to: 'b45275c1-36a9-4561-b4ff-86e8a83b2284'},
{from: 'aca526b3-ee2d-4a0e-9b60-37d09ed4081c', to: 'b45275c1-36a9-4561-b4ff-86e8a83b2284'}
                            ]);