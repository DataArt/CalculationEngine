var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '67ee8145-3434-4c20-a561-7339a1509a83', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 67ee8145-3434-4c20-a561-7339a1509a83<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: '90fd6177-97e3-49fc-a895-8b149b1d9850', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 90fd6177-97e3-49fc-a895-8b149b1d9850<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: 'dcd1b8ac-4634-4e88-bbc9-c7e2e636504f', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: dcd1b8ac-4634-4e88-bbc9-c7e2e636504f<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: '5462ebd7-7216-4da2-82ac-aa7963120cb5', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 5462ebd7-7216-4da2-82ac-aa7963120cb5<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: '18957ec6-7a28-40e9-a71f-8f5f9475bb10', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 18957ec6-7a28-40e9-a71f-8f5f9475bb10<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: 'da0acef5-5ed6-428a-91bc-4cfb20606f08', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: da0acef5-5ed6-428a-91bc-4cfb20606f08<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'da0acef5-5ed6-428a-91bc-4cfb20606f08', to: 'dcd1b8ac-4634-4e88-bbc9-c7e2e636504f'},
{from: '18957ec6-7a28-40e9-a71f-8f5f9475bb10', to: '67ee8145-3434-4c20-a561-7339a1509a83'},
{from: 'dcd1b8ac-4634-4e88-bbc9-c7e2e636504f', to: '90fd6177-97e3-49fc-a895-8b149b1d9850'},
{from: '67ee8145-3434-4c20-a561-7339a1509a83', to: '5462ebd7-7216-4da2-82ac-aa7963120cb5'}
                            ]);