var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9ce860de-9c63-4e47-880a-c41ee91e8f09', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 9ce860de-9c63-4e47-880a-c41ee91e8f09<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c45ee6e'},
{id: 'ef8491db-dff6-48f7-a1e5-d8b9e075946b', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: ef8491db-dff6-48f7-a1e5-d8b9e075946b<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c45ee6e'},
{id: 'df1961d9-36dd-487c-9a08-f8f1cf256ba4', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: df1961d9-36dd-487c-9a08-f8f1cf256ba4<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c45ee6e'},
{id: 'd5983144-ac0d-4757-a533-dddac60565f7', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: d5983144-ac0d-4757-a533-dddac60565f7<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c45ee6e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd5983144-ac0d-4757-a533-dddac60565f7', to: '9ce860de-9c63-4e47-880a-c41ee91e8f09'},
{from: '9ce860de-9c63-4e47-880a-c41ee91e8f09', to: 'ef8491db-dff6-48f7-a1e5-d8b9e075946b'},
{from: 'df1961d9-36dd-487c-9a08-f8f1cf256ba4', to: '9ce860de-9c63-4e47-880a-c41ee91e8f09'}
                            ]);