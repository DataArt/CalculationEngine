var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aaa2b8c2-0f81-4323-950c-514fb6d47e1e', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: aaa2b8c2-0f81-4323-950c-514fb6d47e1e<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '9961e8cf-dadd-4a1b-9326-bb9b3b538ea4', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 9961e8cf-dadd-4a1b-9326-bb9b3b538ea4<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '86f3b645-d501-4557-96a3-247dc16bce97', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 86f3b645-d501-4557-96a3-247dc16bce97<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'd95b993a-9c0d-42b6-a8fb-af56ceb85a88', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: d95b993a-9c0d-42b6-a8fb-af56ceb85a88<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'df222111-dea2-4043-b06e-73d3f60208ac', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: df222111-dea2-4043-b06e-73d3f60208ac<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'feb9cd4b-33ca-4982-b1fe-726671838600', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: feb9cd4b-33ca-4982-b1fe-726671838600<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '74d4635a-06d3-460f-b697-221c97f42fb1', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 74d4635a-06d3-460f-b697-221c97f42fb1<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '5be5318b-3331-4c52-815c-dbe6faf33be7', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 5be5318b-3331-4c52-815c-dbe6faf33be7<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'a7d61dd2-3c75-4fcb-b81b-5bedf06aeae1', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: a7d61dd2-3c75-4fcb-b81b-5bedf06aeae1<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9961e8cf-dadd-4a1b-9326-bb9b3b538ea4', to: '5be5318b-3331-4c52-815c-dbe6faf33be7'},
{from: 'd95b993a-9c0d-42b6-a8fb-af56ceb85a88', to: '74d4635a-06d3-460f-b697-221c97f42fb1'},
{from: '74d4635a-06d3-460f-b697-221c97f42fb1', to: '86f3b645-d501-4557-96a3-247dc16bce97'},
{from: 'a7d61dd2-3c75-4fcb-b81b-5bedf06aeae1', to: '74d4635a-06d3-460f-b697-221c97f42fb1'},
{from: 'feb9cd4b-33ca-4982-b1fe-726671838600', to: 'd95b993a-9c0d-42b6-a8fb-af56ceb85a88'},
{from: 'aaa2b8c2-0f81-4323-950c-514fb6d47e1e', to: '9961e8cf-dadd-4a1b-9326-bb9b3b538ea4'},
{from: 'df222111-dea2-4043-b06e-73d3f60208ac', to: 'd95b993a-9c0d-42b6-a8fb-af56ceb85a88'}
                            ]);