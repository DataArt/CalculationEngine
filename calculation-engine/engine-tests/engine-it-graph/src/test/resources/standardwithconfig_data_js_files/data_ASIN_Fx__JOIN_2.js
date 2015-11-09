var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7e045f14-efbe-4717-9965-fd6faaa9b868', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 7e045f14-efbe-4717-9965-fd6faaa9b868<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: 'd909d55f-fa3a-4a5d-a6ac-88b72ac1c7fc', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: d909d55f-fa3a-4a5d-a6ac-88b72ac1c7fc<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '6a5ac85f-5b56-452c-9e0d-4e58d98e8fa9', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 6a5ac85f-5b56-452c-9e0d-4e58d98e8fa9<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: 'dd64aa1b-01f8-4199-ac87-3081e2463cfe', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: dd64aa1b-01f8-4199-ac87-3081e2463cfe<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: 'a5050766-cfc0-4049-9ca2-5fb3ccb1b185', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: a5050766-cfc0-4049-9ca2-5fb3ccb1b185<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '87804f9a-c657-469d-8710-937b930512e6', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 87804f9a-c657-469d-8710-937b930512e6<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6a5ac85f-5b56-452c-9e0d-4e58d98e8fa9', to: '7e045f14-efbe-4717-9965-fd6faaa9b868'},
{from: '87804f9a-c657-469d-8710-937b930512e6', to: 'd909d55f-fa3a-4a5d-a6ac-88b72ac1c7fc'},
{from: 'a5050766-cfc0-4049-9ca2-5fb3ccb1b185', to: '6a5ac85f-5b56-452c-9e0d-4e58d98e8fa9'},
{from: 'dd64aa1b-01f8-4199-ac87-3081e2463cfe', to: '87804f9a-c657-469d-8710-937b930512e6'}
                            ]);