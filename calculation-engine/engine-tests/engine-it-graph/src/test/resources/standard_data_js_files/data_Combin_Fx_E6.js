var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'affc7b83-3d1d-4a6b-8c9d-341b0b0699c3', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: affc7b83-3d1d-4a6b-8c9d-341b0b0699c3<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21fd5faa'},
{id: '9f60f452-d033-4baa-9e02-4fca4c4c9435', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 9f60f452-d033-4baa-9e02-4fca4c4c9435<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21fd5faa'},
{id: '7566009b-a81a-4bcc-9004-302c6a85ac07', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 7566009b-a81a-4bcc-9004-302c6a85ac07<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21fd5faa'},
{id: 'ca132c4e-f925-4c7a-a6c9-f83124b7be5b', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: ca132c4e-f925-4c7a-a6c9-f83124b7be5b<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21fd5faa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ca132c4e-f925-4c7a-a6c9-f83124b7be5b', to: '7566009b-a81a-4bcc-9004-302c6a85ac07'},
{from: '7566009b-a81a-4bcc-9004-302c6a85ac07', to: '9f60f452-d033-4baa-9e02-4fca4c4c9435'},
{from: 'affc7b83-3d1d-4a6b-8c9d-341b0b0699c3', to: '7566009b-a81a-4bcc-9004-302c6a85ac07'}
                            ]);