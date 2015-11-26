var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ecae1389-ccdf-44ec-8c41-ffd107570d1e', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: expected<br>Type: FUNCTION<br>Id: ecae1389-ccdf-44ec-8c41-ffd107570d1e<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af707e0'},
{id: 'c1140712-7773-40b4-96cb-0f62d8f508d6', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: c1140712-7773-40b4-96cb-0f62d8f508d6<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af707e0'},
{id: 'b13e2216-881e-4e4a-9343-7966e33d7a25', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: b13e2216-881e-4e4a-9343-7966e33d7a25<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af707e0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ecae1389-ccdf-44ec-8c41-ffd107570d1e', to: 'c1140712-7773-40b4-96cb-0f62d8f508d6'},
{from: 'b13e2216-881e-4e4a-9343-7966e33d7a25', to: 'ecae1389-ccdf-44ec-8c41-ffd107570d1e'}
                            ]);