var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'abe0439b-dfd3-4e71-85b7-7b6fa59c9312', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: abe0439b-dfd3-4e71-85b7-7b6fa59c9312<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '360f7213-22ae-409e-8a96-34d26ba585aa', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 360f7213-22ae-409e-8a96-34d26ba585aa<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '5493b3bb-2e07-426d-961f-f140ec4c57d2', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 5493b3bb-2e07-426d-961f-f140ec4c57d2<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '74d785e2-f73c-4af9-9ce9-d9543f0d0dc2', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 74d785e2-f73c-4af9-9ce9-d9543f0d0dc2<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '85fcfd52-faee-450d-8251-d8eaefedaee7', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 85fcfd52-faee-450d-8251-d8eaefedaee7<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '5d111cf1-4c7c-4a2b-95d8-a50af41b54e2', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 5d111cf1-4c7c-4a2b-95d8-a50af41b54e2<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: 'c038ddce-0444-4c14-bd07-a39bff76da2a', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: c038ddce-0444-4c14-bd07-a39bff76da2a<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '61bde251-ad97-4cd7-9d38-5f7ad9a20409', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 61bde251-ad97-4cd7-9d38-5f7ad9a20409<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'},
{id: '13bfec50-b839-410d-ba78-40d63078cf5a', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 13bfec50-b839-410d-ba78-40d63078cf5a<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b29d36c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '61bde251-ad97-4cd7-9d38-5f7ad9a20409', to: '360f7213-22ae-409e-8a96-34d26ba585aa'},
{from: 'abe0439b-dfd3-4e71-85b7-7b6fa59c9312', to: 'c038ddce-0444-4c14-bd07-a39bff76da2a'},
{from: '360f7213-22ae-409e-8a96-34d26ba585aa', to: 'abe0439b-dfd3-4e71-85b7-7b6fa59c9312'},
{from: '5d111cf1-4c7c-4a2b-95d8-a50af41b54e2', to: '360f7213-22ae-409e-8a96-34d26ba585aa'},
{from: '13bfec50-b839-410d-ba78-40d63078cf5a', to: '74d785e2-f73c-4af9-9ce9-d9543f0d0dc2'},
{from: '85fcfd52-faee-450d-8251-d8eaefedaee7', to: '13bfec50-b839-410d-ba78-40d63078cf5a'},
{from: '5493b3bb-2e07-426d-961f-f140ec4c57d2', to: 'abe0439b-dfd3-4e71-85b7-7b6fa59c9312'}
                            ]);