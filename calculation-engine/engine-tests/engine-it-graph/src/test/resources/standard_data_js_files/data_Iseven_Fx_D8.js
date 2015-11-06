var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dc00b955-eafd-48d2-aea4-4fb6cc9b33dc', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: dc00b955-eafd-48d2-aea4-4fb6cc9b33dc<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab7ce48'},
{id: '0995dd95-e7be-4e50-97eb-9ac057719289', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0995dd95-e7be-4e50-97eb-9ac057719289<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab7ce48'},
{id: '5d0b966f-211c-4383-b60b-195f036c58bf', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 5d0b966f-211c-4383-b60b-195f036c58bf<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab7ce48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dc00b955-eafd-48d2-aea4-4fb6cc9b33dc', to: '0995dd95-e7be-4e50-97eb-9ac057719289'},
{from: '5d0b966f-211c-4383-b60b-195f036c58bf', to: 'dc00b955-eafd-48d2-aea4-4fb6cc9b33dc'}
                            ]);