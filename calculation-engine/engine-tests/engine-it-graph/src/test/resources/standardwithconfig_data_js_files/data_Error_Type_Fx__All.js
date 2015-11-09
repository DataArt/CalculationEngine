var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '35673a48-b804-4bbe-a7c1-ec256325e702', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 35673a48-b804-4bbe-a7c1-ec256325e702<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: '1fc70a84-4838-4963-bda5-00dd4ecf8623', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 1fc70a84-4838-4963-bda5-00dd4ecf8623<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: 'b06019ca-9bf9-4f89-aa7b-9af309a4abe0', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: b06019ca-9bf9-4f89-aa7b-9af309a4abe0<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: '1a9b6b58-c306-4f56-bbe4-f39acb4ba2dc', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 1a9b6b58-c306-4f56-bbe4-f39acb4ba2dc<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: 'ec2ccb74-f05d-4dd1-82e6-9c58393d2561', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: ec2ccb74-f05d-4dd1-82e6-9c58393d2561<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: 'e899b1f9-684c-4bd6-b408-e53d5ff03be3', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: e899b1f9-684c-4bd6-b408-e53d5ff03be3<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1a9b6b58-c306-4f56-bbe4-f39acb4ba2dc', to: 'e899b1f9-684c-4bd6-b408-e53d5ff03be3'},
{from: 'b06019ca-9bf9-4f89-aa7b-9af309a4abe0', to: '35673a48-b804-4bbe-a7c1-ec256325e702'},
{from: '1fc70a84-4838-4963-bda5-00dd4ecf8623', to: '1a9b6b58-c306-4f56-bbe4-f39acb4ba2dc'},
{from: 'ec2ccb74-f05d-4dd1-82e6-9c58393d2561', to: 'b06019ca-9bf9-4f89-aa7b-9af309a4abe0'}
                            ]);