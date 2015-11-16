var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7d630103-9211-4226-9d6f-d4293555bc09', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 7d630103-9211-4226-9d6f-d4293555bc09<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'},
{id: '46af7a00-8cb9-40e5-8437-61214602951c', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 46af7a00-8cb9-40e5-8437-61214602951c<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'},
{id: '54a191a8-e46f-466d-b066-257d01dfead6', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 54a191a8-e46f-466d-b066-257d01dfead6<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'},
{id: '10a10c97-f7ed-4a63-90d7-8e5ff3e1ff6e', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 10a10c97-f7ed-4a63-90d7-8e5ff3e1ff6e<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'},
{id: '40a610fb-0a57-4b72-a224-2cd622b2b21f', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 40a610fb-0a57-4b72-a224-2cd622b2b21f<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'},
{id: '4d854352-8704-478d-b5f4-a0f1195d1109', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4d854352-8704-478d-b5f4-a0f1195d1109<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43e8f1c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '46af7a00-8cb9-40e5-8437-61214602951c', to: '10a10c97-f7ed-4a63-90d7-8e5ff3e1ff6e'},
{from: '4d854352-8704-478d-b5f4-a0f1195d1109', to: '54a191a8-e46f-466d-b066-257d01dfead6'},
{from: '10a10c97-f7ed-4a63-90d7-8e5ff3e1ff6e', to: '40a610fb-0a57-4b72-a224-2cd622b2b21f'},
{from: '7d630103-9211-4226-9d6f-d4293555bc09', to: '4d854352-8704-478d-b5f4-a0f1195d1109'}
                            ]);