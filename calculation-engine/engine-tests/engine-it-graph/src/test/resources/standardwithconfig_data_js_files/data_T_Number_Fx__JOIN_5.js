var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a8f8feda-9a2d-4b3a-b822-03bc2f15a0cf', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: a8f8feda-9a2d-4b3a-b822-03bc2f15a0cf<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '69bfcb2e-c50d-4c6c-9669-e9789c0a20d9', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 69bfcb2e-c50d-4c6c-9669-e9789c0a20d9<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'abb0df6b-fc9a-48d1-b7f3-ca361a1007bc', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: abb0df6b-fc9a-48d1-b7f3-ca361a1007bc<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '374c0330-3984-4e0f-abb5-05942cef5d20', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 374c0330-3984-4e0f-abb5-05942cef5d20<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '6294bdf1-73e6-4bb5-ac66-4ddf9ce4f31a', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 6294bdf1-73e6-4bb5-ac66-4ddf9ce4f31a<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'd66fb9f1-c8d0-4940-8c6a-18bacfb0090c', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: d66fb9f1-c8d0-4940-8c6a-18bacfb0090c<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '6c10a13d-f4c4-4f72-a457-836d28b8c201', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 6c10a13d-f4c4-4f72-a457-836d28b8c201<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '14c3f713-b4f2-4278-8e7f-cae3f95f1efe', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 14c3f713-b4f2-4278-8e7f-cae3f95f1efe<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '0e84bd0b-6c01-44f7-a158-d843bc04f7a8', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 0e84bd0b-6c01-44f7-a158-d843bc04f7a8<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '14c3f713-b4f2-4278-8e7f-cae3f95f1efe', to: '374c0330-3984-4e0f-abb5-05942cef5d20'},
{from: '6294bdf1-73e6-4bb5-ac66-4ddf9ce4f31a', to: '6c10a13d-f4c4-4f72-a457-836d28b8c201'},
{from: '69bfcb2e-c50d-4c6c-9669-e9789c0a20d9', to: 'abb0df6b-fc9a-48d1-b7f3-ca361a1007bc'},
{from: '0e84bd0b-6c01-44f7-a158-d843bc04f7a8', to: '6294bdf1-73e6-4bb5-ac66-4ddf9ce4f31a'},
{from: '374c0330-3984-4e0f-abb5-05942cef5d20', to: '6294bdf1-73e6-4bb5-ac66-4ddf9ce4f31a'},
{from: 'd66fb9f1-c8d0-4940-8c6a-18bacfb0090c', to: '69bfcb2e-c50d-4c6c-9669-e9789c0a20d9'},
{from: 'a8f8feda-9a2d-4b3a-b822-03bc2f15a0cf', to: '374c0330-3984-4e0f-abb5-05942cef5d20'}
                            ]);