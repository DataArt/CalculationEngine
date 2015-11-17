var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3c746f9f-82e0-435b-bbf8-97df5a9e5255', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 3c746f9f-82e0-435b-bbf8-97df5a9e5255<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '4b6d6789-b209-45b7-9ac4-828b2f6b2fd1', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 4b6d6789-b209-45b7-9ac4-828b2f6b2fd1<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: 'fc5062d5-5038-42a6-a6d4-1c2a91fee7d4', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: fc5062d5-5038-42a6-a6d4-1c2a91fee7d4<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: 'c7c1d787-90f1-41f0-a64d-562f646f998e', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: c7c1d787-90f1-41f0-a64d-562f646f998e<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '9f49629c-1ab0-40c3-900b-d24beb5f3d7c', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 9f49629c-1ab0-40c3-900b-d24beb5f3d7c<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '19188648-f576-47f5-91c1-4a811bee8935', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 19188648-f576-47f5-91c1-4a811bee8935<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c7c1d787-90f1-41f0-a64d-562f646f998e', to: 'fc5062d5-5038-42a6-a6d4-1c2a91fee7d4'},
{from: '9f49629c-1ab0-40c3-900b-d24beb5f3d7c', to: '4b6d6789-b209-45b7-9ac4-828b2f6b2fd1'},
{from: '4b6d6789-b209-45b7-9ac4-828b2f6b2fd1', to: '3c746f9f-82e0-435b-bbf8-97df5a9e5255'},
{from: '19188648-f576-47f5-91c1-4a811bee8935', to: 'c7c1d787-90f1-41f0-a64d-562f646f998e'}
                            ]);