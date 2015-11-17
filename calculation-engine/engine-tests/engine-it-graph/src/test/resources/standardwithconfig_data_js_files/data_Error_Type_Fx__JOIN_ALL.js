var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9c8ee4af-7e34-4ba7-827f-9afa451306b6', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 9c8ee4af-7e34-4ba7-827f-9afa451306b6<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: 'e2ccd493-93eb-4097-a34f-9e9b29958805', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: e2ccd493-93eb-4097-a34f-9e9b29958805<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '9be9353e-4afe-48d1-a392-444b67f2de19', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 9be9353e-4afe-48d1-a392-444b67f2de19<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: 'd560a8d9-6002-4865-936e-0173cc03440c', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: d560a8d9-6002-4865-936e-0173cc03440c<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '32e24372-934d-496f-8924-c80ba7f74788', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 32e24372-934d-496f-8924-c80ba7f74788<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'},
{id: '3f64d87e-ff15-44e8-b8d3-954d333f46f1', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 3f64d87e-ff15-44e8-b8d3-954d333f46f1<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@710d7aff'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e2ccd493-93eb-4097-a34f-9e9b29958805', to: 'd560a8d9-6002-4865-936e-0173cc03440c'},
{from: 'd560a8d9-6002-4865-936e-0173cc03440c', to: '9be9353e-4afe-48d1-a392-444b67f2de19'},
{from: '3f64d87e-ff15-44e8-b8d3-954d333f46f1', to: '9c8ee4af-7e34-4ba7-827f-9afa451306b6'},
{from: '9c8ee4af-7e34-4ba7-827f-9afa451306b6', to: '32e24372-934d-496f-8924-c80ba7f74788'}
                            ]);