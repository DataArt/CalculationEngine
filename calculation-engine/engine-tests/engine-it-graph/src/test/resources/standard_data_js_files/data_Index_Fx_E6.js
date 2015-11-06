var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c5d13509-2c61-42de-878c-d86690a4cb6a', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: c5d13509-2c61-42de-878c-d86690a4cb6a<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@398474a2'},
{id: '19ecaa57-d366-4901-86bd-274eb662da81', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 19ecaa57-d366-4901-86bd-274eb662da81<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@398474a2'},
{id: 'befa4013-034e-4584-852f-bbac01827e0d', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: befa4013-034e-4584-852f-bbac01827e0d<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@398474a2'},
{id: '2fbd8c01-2728-47ef-b5d4-e40724136f3e', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 2fbd8c01-2728-47ef-b5d4-e40724136f3e<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@398474a2'},
{id: 'd584b4f3-3088-42a7-b764-29343d6e4000', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: d584b4f3-3088-42a7-b764-29343d6e4000<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@398474a2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'befa4013-034e-4584-852f-bbac01827e0d', to: 'd584b4f3-3088-42a7-b764-29343d6e4000'},
{from: 'c5d13509-2c61-42de-878c-d86690a4cb6a', to: 'd584b4f3-3088-42a7-b764-29343d6e4000'},
{from: '2fbd8c01-2728-47ef-b5d4-e40724136f3e', to: 'd584b4f3-3088-42a7-b764-29343d6e4000'},
{from: 'd584b4f3-3088-42a7-b764-29343d6e4000', to: '19ecaa57-d366-4901-86bd-274eb662da81'}
                            ]);