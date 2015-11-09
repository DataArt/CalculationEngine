var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '84e2f26d-02c9-4f5a-be2f-6aa09da9959e', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 84e2f26d-02c9-4f5a-be2f-6aa09da9959e<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: 'a7f7225d-96ae-47d3-9800-b7bb719dcf25', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: a7f7225d-96ae-47d3-9800-b7bb719dcf25<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: 'ad787220-2c5a-4940-ab00-890a01eda1eb', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: ad787220-2c5a-4940-ab00-890a01eda1eb<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '5e173ed1-8ada-4803-82c5-d506bd1b59e3', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 5e173ed1-8ada-4803-82c5-d506bd1b59e3<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '5a12bb57-3dfe-4cbd-a060-7c70357abf16', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 5a12bb57-3dfe-4cbd-a060-7c70357abf16<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '8cc7096c-c011-48c8-84f0-3eafd81b1b67', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 8cc7096c-c011-48c8-84f0-3eafd81b1b67<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a7f7225d-96ae-47d3-9800-b7bb719dcf25', to: '5e173ed1-8ada-4803-82c5-d506bd1b59e3'},
{from: '5e173ed1-8ada-4803-82c5-d506bd1b59e3', to: 'ad787220-2c5a-4940-ab00-890a01eda1eb'},
{from: '8cc7096c-c011-48c8-84f0-3eafd81b1b67', to: '84e2f26d-02c9-4f5a-be2f-6aa09da9959e'},
{from: '84e2f26d-02c9-4f5a-be2f-6aa09da9959e', to: '5a12bb57-3dfe-4cbd-a060-7c70357abf16'}
                            ]);