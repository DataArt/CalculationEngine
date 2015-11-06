var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bbb584eb-fb3c-451d-ba48-facab400c6e1', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: bbb584eb-fb3c-451d-ba48-facab400c6e1<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ba45490'},
{id: 'a13d1f47-752a-4f11-a606-db94cb4e5a6c', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: a13d1f47-752a-4f11-a606-db94cb4e5a6c<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ba45490'},
{id: '7b450c64-9a0e-4a11-b660-dd448e949254', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 7b450c64-9a0e-4a11-b660-dd448e949254<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ba45490'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b450c64-9a0e-4a11-b660-dd448e949254', to: 'bbb584eb-fb3c-451d-ba48-facab400c6e1'},
{from: 'a13d1f47-752a-4f11-a606-db94cb4e5a6c', to: '7b450c64-9a0e-4a11-b660-dd448e949254'}
                            ]);