var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '56cf7602-4894-4e93-b1f4-39bf7f66de12', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 56cf7602-4894-4e93-b1f4-39bf7f66de12<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: '7f15b71c-6f7e-4826-9d9c-f05fab79e873', label: 'FUNCEXEC\n5.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.5<br>Type: FUNCTION<br>Id: 7f15b71c-6f7e-4826-9d9c-f05fab79e873<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: 'd0092a01-5839-43da-b07d-df2b4c1f3a3e', label: 'F7\n5.5', color: '#31b0d5', title: 'Name: F7<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: d0092a01-5839-43da-b07d-df2b4c1f3a3e<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 2.0, 8.0, 4.0, 8.0, DEVDEF_2 FUNCEXEC ; Ptgs: D3, C3, B3, A3, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: '8e3e306e-8c2a-4f01-b2a3-1216901ea798', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 8e3e306e-8c2a-4f01-b2a3-1216901ea798<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: '6832cbd7-8857-4b84-8dc1-1b3b879d9cd2', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 6832cbd7-8857-4b84-8dc1-1b3b879d9cd2<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: 'cd38d414-c82a-4886-aaee-7ce63e413844', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: cd38d414-c82a-4886-aaee-7ce63e413844<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'},
{id: 'cbc47dba-d101-49d3-be4e-04b726ed9cbb', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: cbc47dba-d101-49d3-be4e-04b726ed9cbb<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b695b06'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8e3e306e-8c2a-4f01-b2a3-1216901ea798', to: '7f15b71c-6f7e-4826-9d9c-f05fab79e873'},
{from: '56cf7602-4894-4e93-b1f4-39bf7f66de12', to: '7f15b71c-6f7e-4826-9d9c-f05fab79e873'},
{from: 'cd38d414-c82a-4886-aaee-7ce63e413844', to: '7f15b71c-6f7e-4826-9d9c-f05fab79e873'},
{from: '6832cbd7-8857-4b84-8dc1-1b3b879d9cd2', to: '7f15b71c-6f7e-4826-9d9c-f05fab79e873'},
{from: 'cbc47dba-d101-49d3-be4e-04b726ed9cbb', to: '7f15b71c-6f7e-4826-9d9c-f05fab79e873'},
{from: '7f15b71c-6f7e-4826-9d9c-f05fab79e873', to: 'd0092a01-5839-43da-b07d-df2b4c1f3a3e'}
                            ]);