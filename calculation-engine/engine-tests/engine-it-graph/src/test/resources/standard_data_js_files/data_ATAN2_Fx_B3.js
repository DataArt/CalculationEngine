var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2f424be9-e789-47f9-8b2d-c406a9efc7bd', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 2f424be9-e789-47f9-8b2d-c406a9efc7bd<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49049a04'},
{id: 'de654b02-b6bc-411a-a7eb-c546c89d4670', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: de654b02-b6bc-411a-a7eb-c546c89d4670<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49049a04'},
{id: '543c36df-5d45-406b-a403-eec07a64ce6f', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 543c36df-5d45-406b-a403-eec07a64ce6f<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49049a04'},
{id: 'db2b4b49-5dd6-42fe-b1d4-ef54cff8b5e3', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: db2b4b49-5dd6-42fe-b1d4-ef54cff8b5e3<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49049a04'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db2b4b49-5dd6-42fe-b1d4-ef54cff8b5e3', to: '2f424be9-e789-47f9-8b2d-c406a9efc7bd'},
{from: 'de654b02-b6bc-411a-a7eb-c546c89d4670', to: 'db2b4b49-5dd6-42fe-b1d4-ef54cff8b5e3'},
{from: '543c36df-5d45-406b-a403-eec07a64ce6f', to: 'db2b4b49-5dd6-42fe-b1d4-ef54cff8b5e3'}
                            ]);