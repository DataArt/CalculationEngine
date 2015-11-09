var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9057ccf9-23fb-4242-92a9-2c4f46cbccc1', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 9057ccf9-23fb-4242-92a9-2c4f46cbccc1<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d0e45a5'},
{id: 'd49bf2c2-7b1f-4659-83e4-feb7e307f19d', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: d49bf2c2-7b1f-4659-83e4-feb7e307f19d<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d0e45a5'},
{id: '7f483769-a5cd-4a5c-8aa5-5760b8578896', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 7f483769-a5cd-4a5c-8aa5-5760b8578896<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d0e45a5'},
{id: '68877b69-b453-4a7f-8190-26ba98d87f27', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 68877b69-b453-4a7f-8190-26ba98d87f27<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d0e45a5'},
{id: '90099481-cc83-4589-a819-7069567139cd', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 90099481-cc83-4589-a819-7069567139cd<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d0e45a5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '68877b69-b453-4a7f-8190-26ba98d87f27', to: '90099481-cc83-4589-a819-7069567139cd'},
{from: 'd49bf2c2-7b1f-4659-83e4-feb7e307f19d', to: '90099481-cc83-4589-a819-7069567139cd'},
{from: '90099481-cc83-4589-a819-7069567139cd', to: '9057ccf9-23fb-4242-92a9-2c4f46cbccc1'},
{from: '7f483769-a5cd-4a5c-8aa5-5760b8578896', to: '90099481-cc83-4589-a819-7069567139cd'}
                            ]);