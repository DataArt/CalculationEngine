var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4f019f9d-6674-4c10-b1c6-ba438f81240a', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4f019f9d-6674-4c10-b1c6-ba438f81240a<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: '1dc758cc-d194-42fa-9a1d-96a0eb5d5e44', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 1dc758cc-d194-42fa-9a1d-96a0eb5d5e44<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: '21f634fb-d0e5-40c8-b767-f9244fd90ef6', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 21f634fb-d0e5-40c8-b767-f9244fd90ef6<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: '06c8e2c6-3c06-4470-8802-c23726d920e4', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 06c8e2c6-3c06-4470-8802-c23726d920e4<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'},
{id: '777c4994-9173-4d86-9101-7499fbd74b8f', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 777c4994-9173-4d86-9101-7499fbd74b8f<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d20616a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '06c8e2c6-3c06-4470-8802-c23726d920e4', to: '777c4994-9173-4d86-9101-7499fbd74b8f'},
{from: '777c4994-9173-4d86-9101-7499fbd74b8f', to: '21f634fb-d0e5-40c8-b767-f9244fd90ef6'},
{from: '4f019f9d-6674-4c10-b1c6-ba438f81240a', to: '777c4994-9173-4d86-9101-7499fbd74b8f'},
{from: '1dc758cc-d194-42fa-9a1d-96a0eb5d5e44', to: '777c4994-9173-4d86-9101-7499fbd74b8f'}
                            ]);