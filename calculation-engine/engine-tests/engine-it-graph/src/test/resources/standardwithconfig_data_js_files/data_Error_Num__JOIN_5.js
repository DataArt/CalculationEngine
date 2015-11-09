var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0d7ba624-9b0b-42fc-bb4f-bdf38b02f3e0', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 0d7ba624-9b0b-42fc-bb4f-bdf38b02f3e0<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: '1e152c3b-2fa8-4ae2-b39f-0356140ae445', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 1e152c3b-2fa8-4ae2-b39f-0356140ae445<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: 'f4fb644e-652d-4f77-a6ce-99479cc619fc', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: f4fb644e-652d-4f77-a6ce-99479cc619fc<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'},
{id: '02104e29-2875-470c-b707-e869858ef05e', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 02104e29-2875-470c-b707-e869858ef05e<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18bec5eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f4fb644e-652d-4f77-a6ce-99479cc619fc', to: '02104e29-2875-470c-b707-e869858ef05e'},
{from: '02104e29-2875-470c-b707-e869858ef05e', to: '0d7ba624-9b0b-42fc-bb4f-bdf38b02f3e0'},
{from: '1e152c3b-2fa8-4ae2-b39f-0356140ae445', to: '02104e29-2875-470c-b707-e869858ef05e'}
                            ]);