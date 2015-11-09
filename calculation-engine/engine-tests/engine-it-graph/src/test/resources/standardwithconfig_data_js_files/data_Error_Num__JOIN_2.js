var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1027064d-acc1-41c4-ad7b-e70fae17367c', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 1027064d-acc1-41c4-ad7b-e70fae17367c<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d66e544'},
{id: '4cb51f9f-fc9e-41e1-afb8-07ee2a84cac7', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 4cb51f9f-fc9e-41e1-afb8-07ee2a84cac7<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d66e544'},
{id: '90585e3a-98f1-4ed5-8bac-986bbc87a6f1', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 90585e3a-98f1-4ed5-8bac-986bbc87a6f1<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d66e544'},
{id: 'e289c42b-395b-4f55-bd47-95d0afba124a', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: e289c42b-395b-4f55-bd47-95d0afba124a<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d66e544'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4cb51f9f-fc9e-41e1-afb8-07ee2a84cac7', to: '90585e3a-98f1-4ed5-8bac-986bbc87a6f1'},
{from: '90585e3a-98f1-4ed5-8bac-986bbc87a6f1', to: '1027064d-acc1-41c4-ad7b-e70fae17367c'},
{from: 'e289c42b-395b-4f55-bd47-95d0afba124a', to: '90585e3a-98f1-4ed5-8bac-986bbc87a6f1'}
                            ]);