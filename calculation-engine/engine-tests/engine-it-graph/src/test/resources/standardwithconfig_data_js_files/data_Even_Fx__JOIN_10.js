var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0537e17b-2604-4eac-b408-954878614e27', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 0537e17b-2604-4eac-b408-954878614e27<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: 'afd04e7a-d4b9-4502-8a11-0367836c4a69', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: afd04e7a-d4b9-4502-8a11-0367836c4a69<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: 'fa99b932-df32-47dc-893a-00190bd30806', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: fa99b932-df32-47dc-893a-00190bd30806<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '8c2b86bf-4d9b-4da9-807e-e2d35537d89a', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 8c2b86bf-4d9b-4da9-807e-e2d35537d89a<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '5eda989d-59cc-4dc4-85cb-f0f34034135b', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 5eda989d-59cc-4dc4-85cb-f0f34034135b<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: 'd3d5bc23-107e-45b3-b107-be135d2038c7', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: d3d5bc23-107e-45b3-b107-be135d2038c7<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8c2b86bf-4d9b-4da9-807e-e2d35537d89a', to: 'd3d5bc23-107e-45b3-b107-be135d2038c7'},
{from: 'fa99b932-df32-47dc-893a-00190bd30806', to: 'afd04e7a-d4b9-4502-8a11-0367836c4a69'},
{from: 'afd04e7a-d4b9-4502-8a11-0367836c4a69', to: '0537e17b-2604-4eac-b408-954878614e27'},
{from: 'd3d5bc23-107e-45b3-b107-be135d2038c7', to: '5eda989d-59cc-4dc4-85cb-f0f34034135b'}
                            ]);