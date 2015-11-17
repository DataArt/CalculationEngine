var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4de1ed43-08fb-4d05-a6a1-db94aa57bf28', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 4de1ed43-08fb-4d05-a6a1-db94aa57bf28<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'},
{id: 'ef1274e7-64ca-4ec0-ba69-a1f049e409d8', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: ef1274e7-64ca-4ec0-ba69-a1f049e409d8<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'},
{id: '98dab7e1-400f-49de-a63b-401f596e173a', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 98dab7e1-400f-49de-a63b-401f596e173a<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '98dab7e1-400f-49de-a63b-401f596e173a', to: 'ef1274e7-64ca-4ec0-ba69-a1f049e409d8'},
{from: '4de1ed43-08fb-4d05-a6a1-db94aa57bf28', to: '98dab7e1-400f-49de-a63b-401f596e173a'}
                            ]);