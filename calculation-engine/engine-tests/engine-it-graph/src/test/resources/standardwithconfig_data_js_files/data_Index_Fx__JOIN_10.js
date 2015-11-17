var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e2940f0d-6464-48fd-9aa4-ae252c641615', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: e2940f0d-6464-48fd-9aa4-ae252c641615<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: 'd37c388e-2cf9-4273-8482-e506d17b23d7', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: d37c388e-2cf9-4273-8482-e506d17b23d7<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: 'cea93d5e-7b96-4021-85dc-4de055d96f6d', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: cea93d5e-7b96-4021-85dc-4de055d96f6d<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '1b368eb2-9380-44b8-9886-65d8125a19f0', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 1b368eb2-9380-44b8-9886-65d8125a19f0<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '0a9fbf06-7c78-4ad6-9a78-9ec75fd6dc5b', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 0a9fbf06-7c78-4ad6-9a78-9ec75fd6dc5b<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0a9fbf06-7c78-4ad6-9a78-9ec75fd6dc5b', to: '1b368eb2-9380-44b8-9886-65d8125a19f0'},
{from: 'e2940f0d-6464-48fd-9aa4-ae252c641615', to: '1b368eb2-9380-44b8-9886-65d8125a19f0'},
{from: '1b368eb2-9380-44b8-9886-65d8125a19f0', to: 'd37c388e-2cf9-4273-8482-e506d17b23d7'},
{from: 'cea93d5e-7b96-4021-85dc-4de055d96f6d', to: '1b368eb2-9380-44b8-9886-65d8125a19f0'}
                            ]);