var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '68b37cbe-77a0-463a-b021-127b8c4cc3c2', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 68b37cbe-77a0-463a-b021-127b8c4cc3c2<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c8bca63'},
{id: '6276c617-f7e7-4592-9e1e-f74ec5d56953', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 6276c617-f7e7-4592-9e1e-f74ec5d56953<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c8bca63'},
{id: '1f7b7f17-6d44-4cfe-823b-7ef90e0120d0', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1f7b7f17-6d44-4cfe-823b-7ef90e0120d0<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c8bca63'},
{id: '4547e9ba-851c-4e11-975e-ac94426e53ba', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 4547e9ba-851c-4e11-975e-ac94426e53ba<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c8bca63'},
{id: '99c02c07-d757-40ca-8572-1ab915b22521', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 99c02c07-d757-40ca-8572-1ab915b22521<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c8bca63'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1f7b7f17-6d44-4cfe-823b-7ef90e0120d0', to: '68b37cbe-77a0-463a-b021-127b8c4cc3c2'},
{from: '99c02c07-d757-40ca-8572-1ab915b22521', to: '68b37cbe-77a0-463a-b021-127b8c4cc3c2'},
{from: '4547e9ba-851c-4e11-975e-ac94426e53ba', to: '68b37cbe-77a0-463a-b021-127b8c4cc3c2'},
{from: '68b37cbe-77a0-463a-b021-127b8c4cc3c2', to: '6276c617-f7e7-4592-9e1e-f74ec5d56953'}
                            ]);