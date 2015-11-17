var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '783f150e-307c-4e47-bc9c-69b43935efe2', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 783f150e-307c-4e47-bc9c-69b43935efe2<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '31fdf728-353b-4b03-855f-e28d4ada3179', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 31fdf728-353b-4b03-855f-e28d4ada3179<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '8adeaf7e-855f-4acb-8c0a-af45556de51c', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8adeaf7e-855f-4acb-8c0a-af45556de51c<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '58095fd6-23b8-4376-bf89-12453f87d669', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 58095fd6-23b8-4376-bf89-12453f87d669<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '80f8dbec-5637-4d6d-98d6-7c6fe12def89', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 80f8dbec-5637-4d6d-98d6-7c6fe12def89<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '9214894f-41fd-4269-8e0c-0e5ed094956d', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 9214894f-41fd-4269-8e0c-0e5ed094956d<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'c1cd8a02-1ec3-439a-a4fa-4018380a1369', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: c1cd8a02-1ec3-439a-a4fa-4018380a1369<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'beeaa840-2277-434b-a5d3-b3b14e03a9b3', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Value: 372.0<br>Type: OPERATOR<br>Id: beeaa840-2277-434b-a5d3-b3b14e03a9b3<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'd6592c54-548f-4757-8252-2ecd5a6803e4', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Value: TRUE<br>Type: FUNCTION<br>Id: d6592c54-548f-4757-8252-2ecd5a6803e4<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '5f40d20d-8ec4-4eb1-b953-aeeae5808515', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 5f40d20d-8ec4-4eb1-b953-aeeae5808515<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'c175e7c0-5c16-41e3-8220-996ee9138256', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Value: 6.4<br>Type: OPERATOR<br>Id: c175e7c0-5c16-41e3-8220-996ee9138256<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'b40b688f-f41b-4a66-82b8-a96175c4bab6', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: b40b688f-f41b-4a66-82b8-a96175c4bab6<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '1093e0ad-d42b-47b0-9ef2-34ce6260bcac', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 1093e0ad-d42b-47b0-9ef2-34ce6260bcac<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'd55498b8-c6fd-43b6-b91d-f20f4471c34c', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Value: FALSE<br>Type: FUNCTION<br>Id: d55498b8-c6fd-43b6-b91d-f20f4471c34c<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'aa1e8e75-92ca-468b-b435-63c955c5f4b4', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: aa1e8e75-92ca-468b-b435-63c955c5f4b4<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'e5e66c14-bd69-4c20-9418-5f566cd544e8', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: e5e66c14-bd69-4c20-9418-5f566cd544e8<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: 7.0, 6.0 0.4 + 5.0 - AND ; Ptgs: C2, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: 'a2e6e266-141a-414a-b4d9-04f4b72dafb0', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Value: FALSE<br>Type: OPERATOR<br>Id: a2e6e266-141a-414a-b4d9-04f4b72dafb0<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'},
{id: '67dd1a29-30e6-41cd-8798-ae10666ebab6', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 67dd1a29-30e6-41cd-8798-ae10666ebab6<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fae6f43'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a2e6e266-141a-414a-b4d9-04f4b72dafb0', to: 'd55498b8-c6fd-43b6-b91d-f20f4471c34c'},
{from: 'c175e7c0-5c16-41e3-8220-996ee9138256', to: '67dd1a29-30e6-41cd-8798-ae10666ebab6'},
{from: '8adeaf7e-855f-4acb-8c0a-af45556de51c', to: 'beeaa840-2277-434b-a5d3-b3b14e03a9b3'},
{from: 'beeaa840-2277-434b-a5d3-b3b14e03a9b3', to: '1093e0ad-d42b-47b0-9ef2-34ce6260bcac'},
{from: '80f8dbec-5637-4d6d-98d6-7c6fe12def89', to: 'a2e6e266-141a-414a-b4d9-04f4b72dafb0'},
{from: 'b40b688f-f41b-4a66-82b8-a96175c4bab6', to: '67dd1a29-30e6-41cd-8798-ae10666ebab6'},
{from: '1093e0ad-d42b-47b0-9ef2-34ce6260bcac', to: 'd55498b8-c6fd-43b6-b91d-f20f4471c34c'},
{from: 'd6592c54-548f-4757-8252-2ecd5a6803e4', to: 'e5e66c14-bd69-4c20-9418-5f566cd544e8'},
{from: '67dd1a29-30e6-41cd-8798-ae10666ebab6', to: 'd6592c54-548f-4757-8252-2ecd5a6803e4'},
{from: '9214894f-41fd-4269-8e0c-0e5ed094956d', to: 'c175e7c0-5c16-41e3-8220-996ee9138256'},
{from: '58095fd6-23b8-4376-bf89-12453f87d669', to: 'd6592c54-548f-4757-8252-2ecd5a6803e4'},
{from: '31fdf728-353b-4b03-855f-e28d4ada3179', to: '1093e0ad-d42b-47b0-9ef2-34ce6260bcac'},
{from: 'aa1e8e75-92ca-468b-b435-63c955c5f4b4', to: 'c175e7c0-5c16-41e3-8220-996ee9138256'},
{from: '5f40d20d-8ec4-4eb1-b953-aeeae5808515', to: 'beeaa840-2277-434b-a5d3-b3b14e03a9b3'},
{from: 'd55498b8-c6fd-43b6-b91d-f20f4471c34c', to: 'c1cd8a02-1ec3-439a-a4fa-4018380a1369'},
{from: '783f150e-307c-4e47-bc9c-69b43935efe2', to: 'a2e6e266-141a-414a-b4d9-04f4b72dafb0'}
                            ]);