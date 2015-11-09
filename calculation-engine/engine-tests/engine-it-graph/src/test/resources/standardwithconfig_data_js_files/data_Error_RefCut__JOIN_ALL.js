var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8495aaa7-5830-4a0c-add4-288619e15b67', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 8495aaa7-5830-4a0c-add4-288619e15b67<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '1605614a-82e4-452d-9db0-aad81dfa8749', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 1605614a-82e4-452d-9db0-aad81dfa8749<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'e67b7842-985f-48b2-b8a5-79af44a8e847', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: e67b7842-985f-48b2-b8a5-79af44a8e847<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'b2e17ee2-1a88-412a-bbd8-235f996a872f', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: b2e17ee2-1a88-412a-bbd8-235f996a872f<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '9346c1ed-9055-43c6-8948-7af6295cf1b5', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 9346c1ed-9055-43c6-8948-7af6295cf1b5<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b2e17ee2-1a88-412a-bbd8-235f996a872f', to: '9346c1ed-9055-43c6-8948-7af6295cf1b5'},
{from: '8495aaa7-5830-4a0c-add4-288619e15b67', to: 'b2e17ee2-1a88-412a-bbd8-235f996a872f'},
{from: 'e67b7842-985f-48b2-b8a5-79af44a8e847', to: 'b2e17ee2-1a88-412a-bbd8-235f996a872f'},
{from: '1605614a-82e4-452d-9db0-aad81dfa8749', to: 'b2e17ee2-1a88-412a-bbd8-235f996a872f'}
                            ]);