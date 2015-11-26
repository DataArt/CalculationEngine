var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3a62a0c4-fb84-4335-8f2a-6a72d26daad2', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3a62a0c4-fb84-4335-8f2a-6a72d26daad2<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: FALSE ISLOGICAL ; Ptgs: A2 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3efedc6f'},
{id: 'ffbc55f3-7b85-4b47-8b95-fc1e4ce53344', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: ffbc55f3-7b85-4b47-8b95-fc1e4ce53344<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3efedc6f'},
{id: 'a18fe4b1-56a5-4b85-b09e-5db29f5c6520', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a18fe4b1-56a5-4b85-b09e-5db29f5c6520<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: FALSE ISLOGICAL  ISLOGICAL ; Ptgs: A2 ISLOGICAL  ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3efedc6f'},
{id: '92739b24-d708-43da-9e9f-4a35bd60617b', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 92739b24-d708-43da-9e9f-4a35bd60617b<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3efedc6f'},
{id: '9f7d501b-d484-453a-9372-4a29097b7a14', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 9f7d501b-d484-453a-9372-4a29097b7a14<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3efedc6f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9f7d501b-d484-453a-9372-4a29097b7a14', to: 'a18fe4b1-56a5-4b85-b09e-5db29f5c6520'},
{from: 'ffbc55f3-7b85-4b47-8b95-fc1e4ce53344', to: '3a62a0c4-fb84-4335-8f2a-6a72d26daad2'},
{from: '92739b24-d708-43da-9e9f-4a35bd60617b', to: 'ffbc55f3-7b85-4b47-8b95-fc1e4ce53344'},
{from: '3a62a0c4-fb84-4335-8f2a-6a72d26daad2', to: '9f7d501b-d484-453a-9372-4a29097b7a14'}
                            ]);