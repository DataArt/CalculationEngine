var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '45391afa-417d-4df5-9ce7-1de90b24400e', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 45391afa-417d-4df5-9ce7-1de90b24400e<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '9351d5c1-fccf-4cb3-8400-69081b2db45f', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 9351d5c1-fccf-4cb3-8400-69081b2db45f<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: 'b9066e32-1c4d-49d9-8ca2-da0d92cba47a', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: b9066e32-1c4d-49d9-8ca2-da0d92cba47a<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: 'f880af95-5931-488c-aec2-867cea5b63a8', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: f880af95-5931-488c-aec2-867cea5b63a8<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: 'c1ac9f25-6543-473c-b4f7-7185e640f2ea', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: c1ac9f25-6543-473c-b4f7-7185e640f2ea<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '5a7028fa-aff5-4ef7-80bb-73fa386a5098', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 5a7028fa-aff5-4ef7-80bb-73fa386a5098<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9351d5c1-fccf-4cb3-8400-69081b2db45f', to: 'b9066e32-1c4d-49d9-8ca2-da0d92cba47a'},
{from: 'f880af95-5931-488c-aec2-867cea5b63a8', to: 'c1ac9f25-6543-473c-b4f7-7185e640f2ea'},
{from: 'c1ac9f25-6543-473c-b4f7-7185e640f2ea', to: '5a7028fa-aff5-4ef7-80bb-73fa386a5098'},
{from: 'b9066e32-1c4d-49d9-8ca2-da0d92cba47a', to: '45391afa-417d-4df5-9ce7-1de90b24400e'}
                            ]);