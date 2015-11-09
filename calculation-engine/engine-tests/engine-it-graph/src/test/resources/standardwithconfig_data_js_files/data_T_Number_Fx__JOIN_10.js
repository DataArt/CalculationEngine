var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '90e56bad-9419-48ee-b32d-8e9518781499', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 90e56bad-9419-48ee-b32d-8e9518781499<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '96d56109-886a-49c9-a866-40f8a8b54e3d', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 96d56109-886a-49c9-a866-40f8a8b54e3d<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '1081db21-b23a-4166-a057-7090538e200b', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 1081db21-b23a-4166-a057-7090538e200b<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: 'df9cb8e4-c50e-4c54-9737-a6e2ce65f61b', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: df9cb8e4-c50e-4c54-9737-a6e2ce65f61b<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: 'd93eacef-f54b-47ad-abf0-5039ce83efc6', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: d93eacef-f54b-47ad-abf0-5039ce83efc6<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '748d8cf5-1934-4c1b-a1f6-affe7555d1a0', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 748d8cf5-1934-4c1b-a1f6-affe7555d1a0<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '568bfdd7-ac1a-4abd-a0a3-c7c107c7ca67', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 568bfdd7-ac1a-4abd-a0a3-c7c107c7ca67<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '70c37857-4658-4bc2-b2c2-0de477c51102', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 70c37857-4658-4bc2-b2c2-0de477c51102<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '7f6b214c-1e56-408b-8d81-185e99e7b482', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 7f6b214c-1e56-408b-8d81-185e99e7b482<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '70c37857-4658-4bc2-b2c2-0de477c51102', to: '96d56109-886a-49c9-a866-40f8a8b54e3d'},
{from: '90e56bad-9419-48ee-b32d-8e9518781499', to: '568bfdd7-ac1a-4abd-a0a3-c7c107c7ca67'},
{from: '96d56109-886a-49c9-a866-40f8a8b54e3d', to: '90e56bad-9419-48ee-b32d-8e9518781499'},
{from: '748d8cf5-1934-4c1b-a1f6-affe7555d1a0', to: '96d56109-886a-49c9-a866-40f8a8b54e3d'},
{from: '7f6b214c-1e56-408b-8d81-185e99e7b482', to: 'df9cb8e4-c50e-4c54-9737-a6e2ce65f61b'},
{from: 'd93eacef-f54b-47ad-abf0-5039ce83efc6', to: '7f6b214c-1e56-408b-8d81-185e99e7b482'},
{from: '1081db21-b23a-4166-a057-7090538e200b', to: '90e56bad-9419-48ee-b32d-8e9518781499'}
                            ]);