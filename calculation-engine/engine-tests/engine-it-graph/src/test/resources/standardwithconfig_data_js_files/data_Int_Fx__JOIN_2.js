var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3769ab75-5712-4b47-a068-6de6675cab48', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 3769ab75-5712-4b47-a068-6de6675cab48<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '8fb200c7-1195-41a0-92d5-5ea5887d3c19', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 8fb200c7-1195-41a0-92d5-5ea5887d3c19<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '673f8f1a-63fc-45d8-a575-7f39bc7d4222', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 673f8f1a-63fc-45d8-a575-7f39bc7d4222<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '859fb9ac-9c64-4570-8fdc-b95f2c450dbd', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 859fb9ac-9c64-4570-8fdc-b95f2c450dbd<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: 'b7dea2b8-6a44-4801-b78d-097074876bdb', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: b7dea2b8-6a44-4801-b78d-097074876bdb<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '57b76d7f-4f7e-4280-817a-eb0e5331a84b', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 57b76d7f-4f7e-4280-817a-eb0e5331a84b<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3769ab75-5712-4b47-a068-6de6675cab48', to: '859fb9ac-9c64-4570-8fdc-b95f2c450dbd'},
{from: 'b7dea2b8-6a44-4801-b78d-097074876bdb', to: '3769ab75-5712-4b47-a068-6de6675cab48'},
{from: '57b76d7f-4f7e-4280-817a-eb0e5331a84b', to: '673f8f1a-63fc-45d8-a575-7f39bc7d4222'},
{from: '673f8f1a-63fc-45d8-a575-7f39bc7d4222', to: '8fb200c7-1195-41a0-92d5-5ea5887d3c19'}
                            ]);