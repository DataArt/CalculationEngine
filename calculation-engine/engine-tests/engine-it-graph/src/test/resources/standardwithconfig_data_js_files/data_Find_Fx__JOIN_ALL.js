var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1b1fe7c1-4497-41e7-bd0f-348318a40d1a', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 1b1fe7c1-4497-41e7-bd0f-348318a40d1a<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: 'ff5391e2-8efd-4ca4-a398-67924e26bbd7', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: ff5391e2-8efd-4ca4-a398-67924e26bbd7<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: '896a52fa-90b3-4850-a805-659ff642d6f4', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 896a52fa-90b3-4850-a805-659ff642d6f4<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'},
{id: 'b10ed774-0a48-41cb-b45f-08c6e5fa51a8', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: b10ed774-0a48-41cb-b45f-08c6e5fa51a8<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@9d200de'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b10ed774-0a48-41cb-b45f-08c6e5fa51a8', to: '1b1fe7c1-4497-41e7-bd0f-348318a40d1a'},
{from: '896a52fa-90b3-4850-a805-659ff642d6f4', to: 'b10ed774-0a48-41cb-b45f-08c6e5fa51a8'},
{from: 'ff5391e2-8efd-4ca4-a398-67924e26bbd7', to: 'b10ed774-0a48-41cb-b45f-08c6e5fa51a8'}
                            ]);