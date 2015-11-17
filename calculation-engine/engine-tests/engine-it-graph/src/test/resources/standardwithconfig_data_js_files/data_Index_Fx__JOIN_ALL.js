var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dcf4cc53-0560-40b7-8ef9-19cc5df27260', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: dcf4cc53-0560-40b7-8ef9-19cc5df27260<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '48ce3775-73cd-4862-a75c-f8d672fe6a50', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 48ce3775-73cd-4862-a75c-f8d672fe6a50<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '98c33177-312f-43eb-bc13-3ea130ade29c', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 98c33177-312f-43eb-bc13-3ea130ade29c<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '9e72ce5a-74b6-426a-8d2f-61a412479a75', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 9e72ce5a-74b6-426a-8d2f-61a412479a75<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: 'efa48ff5-a44b-423a-8074-547fafdaf62a', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: efa48ff5-a44b-423a-8074-547fafdaf62a<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '98c33177-312f-43eb-bc13-3ea130ade29c', to: '48ce3775-73cd-4862-a75c-f8d672fe6a50'},
{from: 'efa48ff5-a44b-423a-8074-547fafdaf62a', to: '48ce3775-73cd-4862-a75c-f8d672fe6a50'},
{from: '9e72ce5a-74b6-426a-8d2f-61a412479a75', to: '48ce3775-73cd-4862-a75c-f8d672fe6a50'},
{from: '48ce3775-73cd-4862-a75c-f8d672fe6a50', to: 'dcf4cc53-0560-40b7-8ef9-19cc5df27260'}
                            ]);