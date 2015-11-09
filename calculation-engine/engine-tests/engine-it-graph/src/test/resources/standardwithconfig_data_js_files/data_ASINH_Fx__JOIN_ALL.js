var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3049164d-3a37-45ca-b640-1beb0d6482c8', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 3049164d-3a37-45ca-b640-1beb0d6482c8<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '47121db2-baf8-4c0a-8415-b2f160705346', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 47121db2-baf8-4c0a-8415-b2f160705346<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '39920307-dcc6-4c06-8229-14cb2e7e8ae1', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 39920307-dcc6-4c06-8229-14cb2e7e8ae1<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '7f1fc03d-fade-4536-ac88-96c3f403ce37', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 7f1fc03d-fade-4536-ac88-96c3f403ce37<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '36321b75-64cb-4291-8625-5ba99e4fb852', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 36321b75-64cb-4291-8625-5ba99e4fb852<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: 'b5d01f0d-2484-49e3-a36e-1503028215b6', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: b5d01f0d-2484-49e3-a36e-1503028215b6<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '36321b75-64cb-4291-8625-5ba99e4fb852', to: '7f1fc03d-fade-4536-ac88-96c3f403ce37'},
{from: '39920307-dcc6-4c06-8229-14cb2e7e8ae1', to: 'b5d01f0d-2484-49e3-a36e-1503028215b6'},
{from: '3049164d-3a37-45ca-b640-1beb0d6482c8', to: '39920307-dcc6-4c06-8229-14cb2e7e8ae1'},
{from: '7f1fc03d-fade-4536-ac88-96c3f403ce37', to: '47121db2-baf8-4c0a-8415-b2f160705346'}
                            ]);