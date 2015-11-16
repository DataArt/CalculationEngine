var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a026342b-943d-42e4-8a98-62d925e58337', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: a026342b-943d-42e4-8a98-62d925e58337<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '03e1d618-5d2d-4915-90d6-210d4d49b9dc', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 03e1d618-5d2d-4915-90d6-210d4d49b9dc<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '72f1c3de-65a4-4518-8d6a-76734e29dc18', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 72f1c3de-65a4-4518-8d6a-76734e29dc18<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: 'debd3a5d-7b11-4aed-a8bf-f2de1b0e4105', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: debd3a5d-7b11-4aed-a8bf-f2de1b0e4105<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '9637bf05-a22b-474c-85e2-4ae5a69f4670', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 9637bf05-a22b-474c-85e2-4ae5a69f4670<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'},
{id: '15cae295-c275-4528-aafe-df88fd36a897', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 15cae295-c275-4528-aafe-df88fd36a897<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5eae392d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '03e1d618-5d2d-4915-90d6-210d4d49b9dc', to: '72f1c3de-65a4-4518-8d6a-76734e29dc18'},
{from: 'debd3a5d-7b11-4aed-a8bf-f2de1b0e4105', to: '9637bf05-a22b-474c-85e2-4ae5a69f4670'},
{from: '9637bf05-a22b-474c-85e2-4ae5a69f4670', to: '15cae295-c275-4528-aafe-df88fd36a897'},
{from: '72f1c3de-65a4-4518-8d6a-76734e29dc18', to: 'a026342b-943d-42e4-8a98-62d925e58337'}
                            ]);