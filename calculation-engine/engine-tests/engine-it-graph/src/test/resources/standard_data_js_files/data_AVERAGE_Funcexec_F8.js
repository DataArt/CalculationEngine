var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3700d822-520e-4c6d-ac21-d3ec62b2bce5', label: 'F8\n3.5', color: '#31b0d5', title: 'Name: F8<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: 3700d822-520e-4c6d-ac21-d3ec62b2bce5<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 5.0, 0.0, 8.0, 1.0, DEVDEF_3 FUNCEXEC ; Ptgs: D4, C4, B4, A4, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: 'cfedce12-293e-48bb-b2af-6204382e19bf', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: cfedce12-293e-48bb-b2af-6204382e19bf<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: '2f428bbb-a2b3-4684-b76b-301511527c80', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 2f428bbb-a2b3-4684-b76b-301511527c80<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: 'c16d98fb-df2b-4177-9a6e-bb34262d1116', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: c16d98fb-df2b-4177-9a6e-bb34262d1116<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: 'b5a92ee7-a0c1-406d-9b86-97221b95bb91', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: b5a92ee7-a0c1-406d-9b86-97221b95bb91<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: '2c80dab5-c9cd-4ebd-9f3e-bb2e067e4bdb', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2c80dab5-c9cd-4ebd-9f3e-bb2e067e4bdb<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'},
{id: '90f6339c-7ccd-4dac-957b-67749696d22a', label: 'FUNCEXEC\n3.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 3.5<br>Type: FUNCTION<br>Id: 90f6339c-7ccd-4dac-957b-67749696d22a<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@624ea235'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c80dab5-c9cd-4ebd-9f3e-bb2e067e4bdb', to: '90f6339c-7ccd-4dac-957b-67749696d22a'},
{from: 'b5a92ee7-a0c1-406d-9b86-97221b95bb91', to: '90f6339c-7ccd-4dac-957b-67749696d22a'},
{from: '90f6339c-7ccd-4dac-957b-67749696d22a', to: '3700d822-520e-4c6d-ac21-d3ec62b2bce5'},
{from: 'c16d98fb-df2b-4177-9a6e-bb34262d1116', to: '90f6339c-7ccd-4dac-957b-67749696d22a'},
{from: 'cfedce12-293e-48bb-b2af-6204382e19bf', to: '90f6339c-7ccd-4dac-957b-67749696d22a'},
{from: '2f428bbb-a2b3-4684-b76b-301511527c80', to: '90f6339c-7ccd-4dac-957b-67749696d22a'}
                            ]);