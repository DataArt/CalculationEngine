var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9952299c-08c9-4d95-8947-49c7d9d7242e', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 9952299c-08c9-4d95-8947-49c7d9d7242e<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '66a07ebf-9d74-47af-8852-baa85fb6a9c0', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 66a07ebf-9d74-47af-8852-baa85fb6a9c0<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: 'a04dc80c-5b96-46c7-b01a-554f2d72dd61', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: a04dc80c-5b96-46c7-b01a-554f2d72dd61<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '982821e8-8dec-474c-8bb8-6d1b53587b01', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 982821e8-8dec-474c-8bb8-6d1b53587b01<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: 'ea6013b0-7679-48d3-a51a-bef29176d11d', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: ea6013b0-7679-48d3-a51a-bef29176d11d<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '531a9725-e0b3-4d19-ae98-751a985791cd', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 531a9725-e0b3-4d19-ae98-751a985791cd<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: 'c675eea8-673b-4d89-9ace-3a27350ab956', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: c675eea8-673b-4d89-9ace-3a27350ab956<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '3a3509a2-7148-483b-b9b0-6c54cfd40cef', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3a3509a2-7148-483b-b9b0-6c54cfd40cef<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c675eea8-673b-4d89-9ace-3a27350ab956', to: '9952299c-08c9-4d95-8947-49c7d9d7242e'},
{from: 'c675eea8-673b-4d89-9ace-3a27350ab956', to: '982821e8-8dec-474c-8bb8-6d1b53587b01'},
{from: 'ea6013b0-7679-48d3-a51a-bef29176d11d', to: '66a07ebf-9d74-47af-8852-baa85fb6a9c0'},
{from: '3a3509a2-7148-483b-b9b0-6c54cfd40cef', to: 'c675eea8-673b-4d89-9ace-3a27350ab956'},
{from: '982821e8-8dec-474c-8bb8-6d1b53587b01', to: 'ea6013b0-7679-48d3-a51a-bef29176d11d'},
{from: '531a9725-e0b3-4d19-ae98-751a985791cd', to: 'ea6013b0-7679-48d3-a51a-bef29176d11d'},
{from: 'a04dc80c-5b96-46c7-b01a-554f2d72dd61', to: 'c675eea8-673b-4d89-9ace-3a27350ab956'}
                            ]);