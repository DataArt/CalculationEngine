var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bcc0363f-4df8-4686-9cc0-48593cabada0', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: bcc0363f-4df8-4686-9cc0-48593cabada0<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: 'db90cfcf-bacd-4cf8-85b9-b8ccd2a66bba', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: db90cfcf-bacd-4cf8-85b9-b8ccd2a66bba<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: 'd6f9a4b5-b45d-486c-b613-629fb3a556a1', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: d6f9a4b5-b45d-486c-b613-629fb3a556a1<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: '2f49d99b-bc35-45ea-83dc-0df100fa69f1', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 2f49d99b-bc35-45ea-83dc-0df100fa69f1<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: 'f84885d1-823b-4216-9359-80910c180103', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: f84885d1-823b-4216-9359-80910c180103<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f49d99b-bc35-45ea-83dc-0df100fa69f1', to: 'f84885d1-823b-4216-9359-80910c180103'},
{from: 'f84885d1-823b-4216-9359-80910c180103', to: 'd6f9a4b5-b45d-486c-b613-629fb3a556a1'},
{from: 'bcc0363f-4df8-4686-9cc0-48593cabada0', to: 'f84885d1-823b-4216-9359-80910c180103'},
{from: 'db90cfcf-bacd-4cf8-85b9-b8ccd2a66bba', to: 'f84885d1-823b-4216-9359-80910c180103'}
                            ]);