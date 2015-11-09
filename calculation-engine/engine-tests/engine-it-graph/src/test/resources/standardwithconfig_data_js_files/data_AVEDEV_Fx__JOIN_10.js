var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9acdc4a8-20c1-4694-84ae-109697ee58ba', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 9acdc4a8-20c1-4694-84ae-109697ee58ba<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV ; Ptgs: A1:A7 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: '32afc74f-23c3-440e-90d8-d18d1605ef26', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: 32afc74f-23c3-440e-90d8-d18d1605ef26<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'c1ea2666-8b84-487a-bfd4-18540acaa405', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: c1ea2666-8b84-487a-bfd4-18540acaa405<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'b282fef0-a06f-43f3-af98-0509d3b0356f', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: b282fef0-a06f-43f3-af98-0509d3b0356f<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'ac82cfd7-72e0-4fd2-ab71-02b492c329c0', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: ac82cfd7-72e0-4fd2-ab71-02b492c329c0<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'd369c17f-074a-485d-a7e6-1ccf35b37830', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: d369c17f-074a-485d-a7e6-1ccf35b37830<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'c67dddd6-a4d0-46c0-9d1a-4dc59b4adec1', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: c67dddd6-a4d0-46c0-9d1a-4dc59b4adec1<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV ; Ptgs: A1:A7 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'c67cc60d-5e61-45ea-a82b-ff4084fef8b6', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: c67cc60d-5e61-45ea-a82b-ff4084fef8b6<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV , 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV  AVEDEV ; Ptgs: B1:C3 AVEDEV , A1:A7 AVEDEV  AVEDEV  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: 'a7e304c1-b239-46f6-b7c3-b1e9bec11de6', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: a7e304c1-b239-46f6-b7c3-b1e9bec11de6<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'},
{id: '89377dd2-64be-4df5-a2a1-7ed5172076ad', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 89377dd2-64be-4df5-a2a1-7ed5172076ad<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac646b3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd369c17f-074a-485d-a7e6-1ccf35b37830', to: 'c67cc60d-5e61-45ea-a82b-ff4084fef8b6'},
{from: '32afc74f-23c3-440e-90d8-d18d1605ef26', to: 'c67dddd6-a4d0-46c0-9d1a-4dc59b4adec1'},
{from: 'b282fef0-a06f-43f3-af98-0509d3b0356f', to: 'c1ea2666-8b84-487a-bfd4-18540acaa405'},
{from: 'c67dddd6-a4d0-46c0-9d1a-4dc59b4adec1', to: 'd369c17f-074a-485d-a7e6-1ccf35b37830'},
{from: 'b282fef0-a06f-43f3-af98-0509d3b0356f', to: 'ac82cfd7-72e0-4fd2-ab71-02b492c329c0'},
{from: '89377dd2-64be-4df5-a2a1-7ed5172076ad', to: 'b282fef0-a06f-43f3-af98-0509d3b0356f'},
{from: 'ac82cfd7-72e0-4fd2-ab71-02b492c329c0', to: 'd369c17f-074a-485d-a7e6-1ccf35b37830'},
{from: 'a7e304c1-b239-46f6-b7c3-b1e9bec11de6', to: '32afc74f-23c3-440e-90d8-d18d1605ef26'},
{from: '32afc74f-23c3-440e-90d8-d18d1605ef26', to: '9acdc4a8-20c1-4694-84ae-109697ee58ba'}
                            ]);