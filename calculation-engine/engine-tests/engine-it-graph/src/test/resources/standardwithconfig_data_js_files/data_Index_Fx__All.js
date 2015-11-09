var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'beb8e637-dc3b-481a-933f-be3ad4261b6a', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: beb8e637-dc3b-481a-933f-be3ad4261b6a<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: '207b184d-465e-45c4-bbaa-4399fc351234', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 207b184d-465e-45c4-bbaa-4399fc351234<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: '258a9cac-3b30-483c-9753-4d8259139cc1', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 258a9cac-3b30-483c-9753-4d8259139cc1<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: 'da514792-d844-4d23-962b-676a88d89c96', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: da514792-d844-4d23-962b-676a88d89c96<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: '99ab4bce-28ea-4459-b35a-3cb87e0c8968', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 99ab4bce-28ea-4459-b35a-3cb87e0c8968<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '258a9cac-3b30-483c-9753-4d8259139cc1', to: '207b184d-465e-45c4-bbaa-4399fc351234'},
{from: '207b184d-465e-45c4-bbaa-4399fc351234', to: 'da514792-d844-4d23-962b-676a88d89c96'},
{from: '99ab4bce-28ea-4459-b35a-3cb87e0c8968', to: '207b184d-465e-45c4-bbaa-4399fc351234'},
{from: 'beb8e637-dc3b-481a-933f-be3ad4261b6a', to: '207b184d-465e-45c4-bbaa-4399fc351234'}
                            ]);