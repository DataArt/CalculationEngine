var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bcc0bd89-0692-4c83-b1ee-088e024ff406', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: bcc0bd89-0692-4c83-b1ee-088e024ff406<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5aac4250'},
{id: '762b1266-1a2a-44e6-9a6a-a4643be0502a', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 762b1266-1a2a-44e6-9a6a-a4643be0502a<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5aac4250'},
{id: 'df6f8f99-eeb0-49ca-96fb-0cac5b88ca2f', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: df6f8f99-eeb0-49ca-96fb-0cac5b88ca2f<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5aac4250'},
{id: 'bffc22f8-7d4d-46d4-9f0c-68d6755f8daf', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: bffc22f8-7d4d-46d4-9f0c-68d6755f8daf<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5aac4250'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '762b1266-1a2a-44e6-9a6a-a4643be0502a', to: 'bffc22f8-7d4d-46d4-9f0c-68d6755f8daf'},
{from: 'bffc22f8-7d4d-46d4-9f0c-68d6755f8daf', to: 'bcc0bd89-0692-4c83-b1ee-088e024ff406'},
{from: 'df6f8f99-eeb0-49ca-96fb-0cac5b88ca2f', to: 'bffc22f8-7d4d-46d4-9f0c-68d6755f8daf'}
                            ]);