var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0fff5d31-0a7a-4845-afc8-8882bc5966fb', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 0fff5d31-0a7a-4845-afc8-8882bc5966fb<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: 'e1d57be3-062b-40b2-a23d-9ea723f0ad8f', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: e1d57be3-062b-40b2-a23d-9ea723f0ad8f<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: '594fd416-58b8-4919-9235-360c776c8bb0', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 594fd416-58b8-4919-9235-360c776c8bb0<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: '7b613a8d-f811-4b1a-8a7a-9d518ae2bc0f', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 7b613a8d-f811-4b1a-8a7a-9d518ae2bc0f<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0fff5d31-0a7a-4845-afc8-8882bc5966fb', to: 'e1d57be3-062b-40b2-a23d-9ea723f0ad8f'},
{from: '594fd416-58b8-4919-9235-360c776c8bb0', to: 'e1d57be3-062b-40b2-a23d-9ea723f0ad8f'},
{from: 'e1d57be3-062b-40b2-a23d-9ea723f0ad8f', to: '7b613a8d-f811-4b1a-8a7a-9d518ae2bc0f'}
                            ]);