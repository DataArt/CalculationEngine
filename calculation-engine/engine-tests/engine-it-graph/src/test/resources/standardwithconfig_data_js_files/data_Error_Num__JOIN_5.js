var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e2f600f7-a301-4c66-accc-0782d9160fb9', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: e2f600f7-a301-4c66-accc-0782d9160fb9<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: '980c0f23-9a05-4c9f-a31b-1de06e69f28c', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 980c0f23-9a05-4c9f-a31b-1de06e69f28c<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: 'a591fe86-0cfd-437e-87fe-a89bcb58caf9', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: a591fe86-0cfd-437e-87fe-a89bcb58caf9<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: 'a97d8487-1c41-416b-980c-c3d0b3ab3491', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: a97d8487-1c41-416b-980c-c3d0b3ab3491<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a591fe86-0cfd-437e-87fe-a89bcb58caf9', to: 'a97d8487-1c41-416b-980c-c3d0b3ab3491'},
{from: 'a97d8487-1c41-416b-980c-c3d0b3ab3491', to: 'e2f600f7-a301-4c66-accc-0782d9160fb9'},
{from: '980c0f23-9a05-4c9f-a31b-1de06e69f28c', to: 'a97d8487-1c41-416b-980c-c3d0b3ab3491'}
                            ]);