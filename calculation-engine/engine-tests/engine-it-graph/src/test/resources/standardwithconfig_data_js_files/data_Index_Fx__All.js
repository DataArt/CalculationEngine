var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5f9a9209-765a-4f5c-a96c-847c899d6394', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 5f9a9209-765a-4f5c-a96c-847c899d6394<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: '57f99a31-c8bf-4ea9-a397-1f210e590f46', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 57f99a31-c8bf-4ea9-a397-1f210e590f46<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: 'fd41f23a-76f0-4d4d-b99f-8b3fa15c1ad5', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: fd41f23a-76f0-4d4d-b99f-8b3fa15c1ad5<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: '1512b813-7003-47e8-88a0-e1f86a862ced', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 1512b813-7003-47e8-88a0-e1f86a862ced<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'},
{id: 'e724622b-60d7-4977-83d1-088f7fc3803c', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: e724622b-60d7-4977-83d1-088f7fc3803c<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bf2f2ce'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fd41f23a-76f0-4d4d-b99f-8b3fa15c1ad5', to: '57f99a31-c8bf-4ea9-a397-1f210e590f46'},
{from: '57f99a31-c8bf-4ea9-a397-1f210e590f46', to: '1512b813-7003-47e8-88a0-e1f86a862ced'},
{from: 'e724622b-60d7-4977-83d1-088f7fc3803c', to: '57f99a31-c8bf-4ea9-a397-1f210e590f46'},
{from: '5f9a9209-765a-4f5c-a96c-847c899d6394', to: '57f99a31-c8bf-4ea9-a397-1f210e590f46'}
                            ]);