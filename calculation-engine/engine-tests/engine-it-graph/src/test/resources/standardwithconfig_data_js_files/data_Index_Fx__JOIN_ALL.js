var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fa2f67c3-c5a7-473c-8bcb-3472553092fc', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: fa2f67c3-c5a7-473c-8bcb-3472553092fc<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '01ed1a23-e98f-417b-ac26-427ac246ef95', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 01ed1a23-e98f-417b-ac26-427ac246ef95<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: 'b2e3e687-23d9-43fa-84be-0b646e849faf', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: b2e3e687-23d9-43fa-84be-0b646e849faf<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '73a5265c-0db1-41de-bc34-553466608ae7', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 73a5265c-0db1-41de-bc34-553466608ae7<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'},
{id: '10c6f33a-93cf-44ee-a0f0-c91640fc4010', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 10c6f33a-93cf-44ee-a0f0-c91640fc4010<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@31e72cbc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b2e3e687-23d9-43fa-84be-0b646e849faf', to: '01ed1a23-e98f-417b-ac26-427ac246ef95'},
{from: '10c6f33a-93cf-44ee-a0f0-c91640fc4010', to: '01ed1a23-e98f-417b-ac26-427ac246ef95'},
{from: '73a5265c-0db1-41de-bc34-553466608ae7', to: '01ed1a23-e98f-417b-ac26-427ac246ef95'},
{from: '01ed1a23-e98f-417b-ac26-427ac246ef95', to: 'fa2f67c3-c5a7-473c-8bcb-3472553092fc'}
                            ]);