var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4b53f95-b580-40c5-a78a-0f8b414d23e4', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: f4b53f95-b580-40c5-a78a-0f8b414d23e4<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'cad0e1d2-eedb-403a-9531-2776ee9d7fc3', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: cad0e1d2-eedb-403a-9531-2776ee9d7fc3<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '47c50d1c-5bbf-464d-b532-23ac94135c3b', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 47c50d1c-5bbf-464d-b532-23ac94135c3b<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '425db9b8-2f52-428a-8d27-231c079280ff', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 425db9b8-2f52-428a-8d27-231c079280ff<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '39803b42-075a-4c8f-a517-85569e5c9547', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 39803b42-075a-4c8f-a517-85569e5c9547<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: '537e2094-e9ea-4d9d-9de7-ce5b15a04e17', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 537e2094-e9ea-4d9d-9de7-ce5b15a04e17<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'a8bb3448-ef51-4f3f-b964-52a3bed087a5', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: a8bb3448-ef51-4f3f-b964-52a3bed087a5<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'd4bb04f3-93e0-44dd-ba27-278207d805a7', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: d4bb04f3-93e0-44dd-ba27-278207d805a7<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'},
{id: 'd408cdd9-f9c0-4c2b-a04a-47c4fb21d7c8', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: d408cdd9-f9c0-4c2b-a04a-47c4fb21d7c8<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ea24702'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cad0e1d2-eedb-403a-9531-2776ee9d7fc3', to: 'd4bb04f3-93e0-44dd-ba27-278207d805a7'},
{from: '425db9b8-2f52-428a-8d27-231c079280ff', to: 'a8bb3448-ef51-4f3f-b964-52a3bed087a5'},
{from: 'a8bb3448-ef51-4f3f-b964-52a3bed087a5', to: '47c50d1c-5bbf-464d-b532-23ac94135c3b'},
{from: 'd408cdd9-f9c0-4c2b-a04a-47c4fb21d7c8', to: 'a8bb3448-ef51-4f3f-b964-52a3bed087a5'},
{from: '537e2094-e9ea-4d9d-9de7-ce5b15a04e17', to: '425db9b8-2f52-428a-8d27-231c079280ff'},
{from: 'f4b53f95-b580-40c5-a78a-0f8b414d23e4', to: 'cad0e1d2-eedb-403a-9531-2776ee9d7fc3'},
{from: '39803b42-075a-4c8f-a517-85569e5c9547', to: '425db9b8-2f52-428a-8d27-231c079280ff'}
                            ]);