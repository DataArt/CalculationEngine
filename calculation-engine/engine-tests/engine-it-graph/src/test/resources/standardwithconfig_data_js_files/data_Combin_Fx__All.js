var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7dccdcf7-6aea-42f4-8a3e-66cc102a922a', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 7dccdcf7-6aea-42f4-8a3e-66cc102a922a<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: '0e482ecf-7e1e-41da-870a-3fe8a57c9bd4', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 0e482ecf-7e1e-41da-870a-3fe8a57c9bd4<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: '6a0b13ea-24d3-48b3-aedf-8553f24f6355', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 6a0b13ea-24d3-48b3-aedf-8553f24f6355<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: 'd271d07f-269a-4b29-b585-d3df36d980bb', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: d271d07f-269a-4b29-b585-d3df36d980bb<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0e482ecf-7e1e-41da-870a-3fe8a57c9bd4', to: '6a0b13ea-24d3-48b3-aedf-8553f24f6355'},
{from: 'd271d07f-269a-4b29-b585-d3df36d980bb', to: '6a0b13ea-24d3-48b3-aedf-8553f24f6355'},
{from: '6a0b13ea-24d3-48b3-aedf-8553f24f6355', to: '7dccdcf7-6aea-42f4-8a3e-66cc102a922a'}
                            ]);