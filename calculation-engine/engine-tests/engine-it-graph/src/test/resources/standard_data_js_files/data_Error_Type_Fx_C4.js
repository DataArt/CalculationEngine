var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '41179bf3-c177-43cd-a5a5-08e4234cc734', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 41179bf3-c177-43cd-a5a5-08e4234cc734<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29d334c'},
{id: 'ffb03190-01a3-4a7f-b2a1-ddd322041c67', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: ffb03190-01a3-4a7f-b2a1-ddd322041c67<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29d334c'},
{id: '6dc1f087-e423-48f8-9a05-88b2d42cce6c', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 6dc1f087-e423-48f8-9a05-88b2d42cce6c<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29d334c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '41179bf3-c177-43cd-a5a5-08e4234cc734', to: 'ffb03190-01a3-4a7f-b2a1-ddd322041c67'},
{from: 'ffb03190-01a3-4a7f-b2a1-ddd322041c67', to: '6dc1f087-e423-48f8-9a05-88b2d42cce6c'}
                            ]);