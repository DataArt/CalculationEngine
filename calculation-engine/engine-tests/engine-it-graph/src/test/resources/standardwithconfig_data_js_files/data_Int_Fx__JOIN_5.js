var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '685f95b4-1506-4275-9690-487c95eeba03', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 685f95b4-1506-4275-9690-487c95eeba03<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: 'e56c372e-723b-4c3d-8d9a-aa8405abc04e', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: e56c372e-723b-4c3d-8d9a-aa8405abc04e<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: 'eb56b68d-51b7-4f62-896c-3fa1c7ad4d4d', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: eb56b68d-51b7-4f62-896c-3fa1c7ad4d4d<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '059313c8-a840-4338-a31d-f95eef15adac', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 059313c8-a840-4338-a31d-f95eef15adac<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '96965100-ce50-404a-8c2c-3a80748f741a', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 96965100-ce50-404a-8c2c-3a80748f741a<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: 'bcb9e700-0a6f-462b-b59f-b0ae5ed7ba2f', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: bcb9e700-0a6f-462b-b59f-b0ae5ed7ba2f<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e56c372e-723b-4c3d-8d9a-aa8405abc04e', to: 'bcb9e700-0a6f-462b-b59f-b0ae5ed7ba2f'},
{from: '685f95b4-1506-4275-9690-487c95eeba03', to: 'eb56b68d-51b7-4f62-896c-3fa1c7ad4d4d'},
{from: 'eb56b68d-51b7-4f62-896c-3fa1c7ad4d4d', to: '96965100-ce50-404a-8c2c-3a80748f741a'},
{from: '059313c8-a840-4338-a31d-f95eef15adac', to: 'e56c372e-723b-4c3d-8d9a-aa8405abc04e'}
                            ]);