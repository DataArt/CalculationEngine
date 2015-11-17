var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e20f561c-cf8e-4974-8341-cb06d013edfc', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: e20f561c-cf8e-4974-8341-cb06d013edfc<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'd99f7bfb-8f86-4721-b017-b11af50458d2', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: d99f7bfb-8f86-4721-b017-b11af50458d2<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '70607b4a-57e6-4f13-9c9c-14e56f8254c5', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 70607b4a-57e6-4f13-9c9c-14e56f8254c5<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '1dba1ef4-10af-4bf2-8ae5-0d4e456c7324', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 1dba1ef4-10af-4bf2-8ae5-0d4e456c7324<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'ca24eafb-5e3b-4ec5-a605-d23df94cc5d3', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: ca24eafb-5e3b-4ec5-a605-d23df94cc5d3<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: '211a1b2f-2f38-4b1d-9501-b62b97cd9d4e', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 211a1b2f-2f38-4b1d-9501-b62b97cd9d4e<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'b5df625b-5358-4dbb-988d-73ae82f70b14', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: b5df625b-5358-4dbb-988d-73ae82f70b14<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'a36567f3-f142-403a-9fae-e39b6377052f', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: a36567f3-f142-403a-9fae-e39b6377052f<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'},
{id: 'a1229348-2cbd-4d87-9546-c184b7ee5afd', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: a1229348-2cbd-4d87-9546-c184b7ee5afd<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ebdb938'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a36567f3-f142-403a-9fae-e39b6377052f', to: '1dba1ef4-10af-4bf2-8ae5-0d4e456c7324'},
{from: 'ca24eafb-5e3b-4ec5-a605-d23df94cc5d3', to: 'b5df625b-5358-4dbb-988d-73ae82f70b14'},
{from: 'd99f7bfb-8f86-4721-b017-b11af50458d2', to: '70607b4a-57e6-4f13-9c9c-14e56f8254c5'},
{from: 'a1229348-2cbd-4d87-9546-c184b7ee5afd', to: 'ca24eafb-5e3b-4ec5-a605-d23df94cc5d3'},
{from: '1dba1ef4-10af-4bf2-8ae5-0d4e456c7324', to: 'ca24eafb-5e3b-4ec5-a605-d23df94cc5d3'},
{from: '211a1b2f-2f38-4b1d-9501-b62b97cd9d4e', to: 'd99f7bfb-8f86-4721-b017-b11af50458d2'},
{from: 'e20f561c-cf8e-4974-8341-cb06d013edfc', to: '1dba1ef4-10af-4bf2-8ae5-0d4e456c7324'}
                            ]);