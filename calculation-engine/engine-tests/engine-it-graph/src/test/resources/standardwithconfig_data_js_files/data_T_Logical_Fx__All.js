var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd38b5e73-4b84-4e08-ac91-c178ef954a49', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: d38b5e73-4b84-4e08-ac91-c178ef954a49<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'},
{id: '6513cacd-5f30-4f34-a72a-5d1717010670', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 6513cacd-5f30-4f34-a72a-5d1717010670<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'},
{id: '809d3a54-c7e5-4da4-bdbf-32c98736202e', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 809d3a54-c7e5-4da4-bdbf-32c98736202e<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6513cacd-5f30-4f34-a72a-5d1717010670', to: '809d3a54-c7e5-4da4-bdbf-32c98736202e'},
{from: 'd38b5e73-4b84-4e08-ac91-c178ef954a49', to: '6513cacd-5f30-4f34-a72a-5d1717010670'}
                            ]);