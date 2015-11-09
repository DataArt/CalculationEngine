var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3e030ac3-7567-4431-a69e-6dc7b9e77526', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 3e030ac3-7567-4431-a69e-6dc7b9e77526<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: '36b0b0b7-ed86-426e-8896-8acef25ab4f9', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 36b0b0b7-ed86-426e-8896-8acef25ab4f9<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: '0fe012bd-c136-4150-93bf-2e160afed2b3', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 0fe012bd-c136-4150-93bf-2e160afed2b3<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: 'c27ff1dc-71fb-4623-9644-0cc1d41b321c', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: c27ff1dc-71fb-4623-9644-0cc1d41b321c<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: 'a238be47-af9c-4f7f-ac29-1533a063212b', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: a238be47-af9c-4f7f-ac29-1533a063212b<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'},
{id: 'af18f8f4-845a-49e2-b4ec-63806990166f', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: af18f8f4-845a-49e2-b4ec-63806990166f<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e5e2e06'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'af18f8f4-845a-49e2-b4ec-63806990166f', to: '0fe012bd-c136-4150-93bf-2e160afed2b3'},
{from: 'a238be47-af9c-4f7f-ac29-1533a063212b', to: '3e030ac3-7567-4431-a69e-6dc7b9e77526'},
{from: '0fe012bd-c136-4150-93bf-2e160afed2b3', to: '36b0b0b7-ed86-426e-8896-8acef25ab4f9'},
{from: '3e030ac3-7567-4431-a69e-6dc7b9e77526', to: 'c27ff1dc-71fb-4623-9644-0cc1d41b321c'}
                            ]);