var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '06b2fd86-708d-4323-9b52-cf227c7fe4d0', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 06b2fd86-708d-4323-9b52-cf227c7fe4d0<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '55ef8f46-5b52-455f-9b6e-515ba1346aff', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 55ef8f46-5b52-455f-9b6e-515ba1346aff<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '0db97384-db65-46cc-8270-146755166c9d', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 0db97384-db65-46cc-8270-146755166c9d<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '20b11a54-967c-4858-a612-16fc194fccc0', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 20b11a54-967c-4858-a612-16fc194fccc0<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '36a173a0-fb09-4de7-887f-8e4039e34d77', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 36a173a0-fb09-4de7-887f-8e4039e34d77<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '6623b4b7-b99e-4837-8103-db4c0e345f71', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 6623b4b7-b99e-4837-8103-db4c0e345f71<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6623b4b7-b99e-4837-8103-db4c0e345f71', to: '0db97384-db65-46cc-8270-146755166c9d'},
{from: '55ef8f46-5b52-455f-9b6e-515ba1346aff', to: '06b2fd86-708d-4323-9b52-cf227c7fe4d0'},
{from: '06b2fd86-708d-4323-9b52-cf227c7fe4d0', to: '20b11a54-967c-4858-a612-16fc194fccc0'},
{from: '36a173a0-fb09-4de7-887f-8e4039e34d77', to: '6623b4b7-b99e-4837-8103-db4c0e345f71'}
                            ]);