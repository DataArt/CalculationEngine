var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3f8a4a8e-329a-40a5-af27-88e643790200', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 3f8a4a8e-329a-40a5-af27-88e643790200<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19553973'},
{id: 'c263cb48-2eda-4a63-8ac2-f0ea25076e84', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: c263cb48-2eda-4a63-8ac2-f0ea25076e84<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19553973'},
{id: 'fe7ee66f-7294-4678-b60e-9d39cf000a65', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: fe7ee66f-7294-4678-b60e-9d39cf000a65<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19553973'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3f8a4a8e-329a-40a5-af27-88e643790200', to: 'fe7ee66f-7294-4678-b60e-9d39cf000a65'},
{from: 'c263cb48-2eda-4a63-8ac2-f0ea25076e84', to: '3f8a4a8e-329a-40a5-af27-88e643790200'}
                            ]);