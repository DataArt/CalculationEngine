var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0820f236-c0d0-4b6e-8e81-e54709d303ae', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 0820f236-c0d0-4b6e-8e81-e54709d303ae<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: '2c5415d1-9425-4477-bdd6-3e7b3fdedf15', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 2c5415d1-9425-4477-bdd6-3e7b3fdedf15<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: 'c5432715-0de3-4b24-98dc-c6767ca635a6', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: c5432715-0de3-4b24-98dc-c6767ca635a6<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: '186cb87a-8a66-4787-8e29-b3e4b9dea123', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 186cb87a-8a66-4787-8e29-b3e4b9dea123<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'},
{id: '034012eb-ee3f-4098-9bb6-df76bd5801cf', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 034012eb-ee3f-4098-9bb6-df76bd5801cf<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@637edfe0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c5415d1-9425-4477-bdd6-3e7b3fdedf15', to: '0820f236-c0d0-4b6e-8e81-e54709d303ae'},
{from: '034012eb-ee3f-4098-9bb6-df76bd5801cf', to: '2c5415d1-9425-4477-bdd6-3e7b3fdedf15'},
{from: '186cb87a-8a66-4787-8e29-b3e4b9dea123', to: '2c5415d1-9425-4477-bdd6-3e7b3fdedf15'},
{from: 'c5432715-0de3-4b24-98dc-c6767ca635a6', to: '2c5415d1-9425-4477-bdd6-3e7b3fdedf15'}
                            ]);