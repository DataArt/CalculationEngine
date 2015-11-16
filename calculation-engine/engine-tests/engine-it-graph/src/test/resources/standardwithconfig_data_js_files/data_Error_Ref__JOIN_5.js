var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3060d62a-80a1-426e-ad6d-2100b59e636c', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: 3060d62a-80a1-426e-ad6d-2100b59e636c<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: '5252515d-466b-446d-902d-d2119cc29a31', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 5252515d-466b-446d-902d-d2119cc29a31<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: '37a4f681-453f-45aa-8ad5-f2788177d7a5', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 37a4f681-453f-45aa-8ad5-f2788177d7a5<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'},
{id: 'fb93f301-64f9-4602-80fc-9cae86f68004', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: fb93f301-64f9-4602-80fc-9cae86f68004<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@27de073b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fb93f301-64f9-4602-80fc-9cae86f68004', to: '37a4f681-453f-45aa-8ad5-f2788177d7a5'},
{from: '5252515d-466b-446d-902d-d2119cc29a31', to: '3060d62a-80a1-426e-ad6d-2100b59e636c'}
                            ]);