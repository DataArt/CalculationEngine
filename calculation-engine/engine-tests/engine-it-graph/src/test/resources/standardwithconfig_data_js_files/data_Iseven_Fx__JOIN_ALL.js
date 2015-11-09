var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8c85c68f-3cd6-4455-9897-671b7789f703', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: 8c85c68f-3cd6-4455-9897-671b7789f703<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '4afba2f6-56d2-49f0-b193-ac8ebbc6eea5', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4afba2f6-56d2-49f0-b193-ac8ebbc6eea5<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '2ed6a62d-cf33-4870-beb3-334e6d3b3f8c', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2ed6a62d-cf33-4870-beb3-334e6d3b3f8c<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '669c55ad-7304-4caa-bfe9-992e35a750c8', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 669c55ad-7304-4caa-bfe9-992e35a750c8<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'b699a235-5098-4928-830b-6219f17d3a05', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: b699a235-5098-4928-830b-6219f17d3a05<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: qwerty ISEVEN ; Ptgs: D1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'd90d36bf-e9c2-4301-81a9-68dd27e1e2ca', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: d90d36bf-e9c2-4301-81a9-68dd27e1e2ca<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '4cd38145-9543-41cc-8086-266e588aa11b', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4cd38145-9543-41cc-8086-266e588aa11b<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: 5.45 ISEVEN ; Ptgs: C3 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'e61956b0-bbfc-479b-8306-8bd6601b83e4', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: e61956b0-bbfc-479b-8306-8bd6601b83e4<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '8d32fc23-22ac-47e2-80e5-2323a74bed9c', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 8d32fc23-22ac-47e2-80e5-2323a74bed9c<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '1aa83596-7a40-4b03-b747-9a53c03c0f89', label: 'hjk\n', color: '#31b0d5', title: 'Name: hjk<br>Value: <br>Type: EMPTY_CELL<br>Id: 1aa83596-7a40-4b03-b747-9a53c03c0f89<br>Formula Expression: Formula String: hjk; Formula Values: ; Formula Ptg: ; Ptgs: hjk Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '9764bd1b-c0b5-4b11-a1ba-d959af4aaf27', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 9764bd1b-c0b5-4b11-a1ba-d959af4aaf27<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg:  ISEVEN ; Ptgs: hjk ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '888b676e-4596-4ef7-bc28-233d88e24f32', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: 888b676e-4596-4ef7-bc28-233d88e24f32<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: '2af44bc7-4d4e-4441-b5f4-8615aa1e0223', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 2af44bc7-4d4e-4441-b5f4-8615aa1e0223<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'f3f09c91-7a01-4fee-9da7-5961172e432a', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: f3f09c91-7a01-4fee-9da7-5961172e432a<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'a502f485-0199-475a-a385-f662482b8562', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a502f485-0199-475a-a385-f662482b8562<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'},
{id: 'b5109e02-eaf5-49aa-bdaa-7b3c137f58e7', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: b5109e02-eaf5-49aa-bdaa-7b3c137f58e7<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309028af'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8c85c68f-3cd6-4455-9897-671b7789f703', to: 'a502f485-0199-475a-a385-f662482b8562'},
{from: 'e61956b0-bbfc-479b-8306-8bd6601b83e4', to: '669c55ad-7304-4caa-bfe9-992e35a750c8'},
{from: '4afba2f6-56d2-49f0-b193-ac8ebbc6eea5', to: '888b676e-4596-4ef7-bc28-233d88e24f32'},
{from: 'b5109e02-eaf5-49aa-bdaa-7b3c137f58e7', to: '8c85c68f-3cd6-4455-9897-671b7789f703'},
{from: '669c55ad-7304-4caa-bfe9-992e35a750c8', to: 'b699a235-5098-4928-830b-6219f17d3a05'},
{from: '888b676e-4596-4ef7-bc28-233d88e24f32', to: '8d32fc23-22ac-47e2-80e5-2323a74bed9c'},
{from: '2af44bc7-4d4e-4441-b5f4-8615aa1e0223', to: 'f3f09c91-7a01-4fee-9da7-5961172e432a'},
{from: 'f3f09c91-7a01-4fee-9da7-5961172e432a', to: '4cd38145-9543-41cc-8086-266e588aa11b'},
{from: '1aa83596-7a40-4b03-b747-9a53c03c0f89', to: '2ed6a62d-cf33-4870-beb3-334e6d3b3f8c'},
{from: '2ed6a62d-cf33-4870-beb3-334e6d3b3f8c', to: '9764bd1b-c0b5-4b11-a1ba-d959af4aaf27'},
{from: '8d32fc23-22ac-47e2-80e5-2323a74bed9c', to: 'd90d36bf-e9c2-4301-81a9-68dd27e1e2ca'}
                            ]);