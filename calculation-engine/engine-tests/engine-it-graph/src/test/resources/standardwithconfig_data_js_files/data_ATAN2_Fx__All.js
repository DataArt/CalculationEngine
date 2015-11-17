var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bfea90d2-2c96-454c-9fde-e1491b3c54fc', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: bfea90d2-2c96-454c-9fde-e1491b3c54fc<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: '51873237-0979-4e02-b00a-d7145a5ec3e8', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 51873237-0979-4e02-b00a-d7145a5ec3e8<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: '8ba2d203-cc3f-46c7-9afe-a4ee57e0bae7', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 8ba2d203-cc3f-46c7-9afe-a4ee57e0bae7<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'ec80fbc9-0cb4-4818-bd3a-5300be264626', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: ec80fbc9-0cb4-4818-bd3a-5300be264626<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'd8a20117-ca4f-48ee-b1fd-60031903dc3e', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: d8a20117-ca4f-48ee-b1fd-60031903dc3e<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: '88e13b6a-c108-4f33-813d-fc2ae672e902', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 88e13b6a-c108-4f33-813d-fc2ae672e902<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'dfabf7da-c847-40e5-8c69-992fb519040e', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: dfabf7da-c847-40e5-8c69-992fb519040e<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'da9a9f89-d9ed-4ac4-87f8-e15b2feb7d2b', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: da9a9f89-d9ed-4ac4-87f8-e15b2feb7d2b<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8ba2d203-cc3f-46c7-9afe-a4ee57e0bae7', to: 'bfea90d2-2c96-454c-9fde-e1491b3c54fc'},
{from: 'd8a20117-ca4f-48ee-b1fd-60031903dc3e', to: 'bfea90d2-2c96-454c-9fde-e1491b3c54fc'},
{from: 'bfea90d2-2c96-454c-9fde-e1491b3c54fc', to: 'ec80fbc9-0cb4-4818-bd3a-5300be264626'},
{from: '51873237-0979-4e02-b00a-d7145a5ec3e8', to: 'dfabf7da-c847-40e5-8c69-992fb519040e'},
{from: 'dfabf7da-c847-40e5-8c69-992fb519040e', to: '88e13b6a-c108-4f33-813d-fc2ae672e902'},
{from: 'da9a9f89-d9ed-4ac4-87f8-e15b2feb7d2b', to: 'dfabf7da-c847-40e5-8c69-992fb519040e'}
                            ]);