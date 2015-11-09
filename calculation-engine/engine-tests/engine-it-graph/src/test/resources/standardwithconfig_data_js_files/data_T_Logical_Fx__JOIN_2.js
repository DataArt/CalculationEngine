var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ea4df175-6926-4fad-abb0-1b6a0d2f96c7', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: ea4df175-6926-4fad-abb0-1b6a0d2f96c7<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6060146b'},
{id: '0f76d73b-9cda-4709-8366-544c97c4ebc8', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 0f76d73b-9cda-4709-8366-544c97c4ebc8<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6060146b'},
{id: '8acad20b-3ab2-4a75-a9a8-583f179de96d', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 8acad20b-3ab2-4a75-a9a8-583f179de96d<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6060146b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0f76d73b-9cda-4709-8366-544c97c4ebc8', to: 'ea4df175-6926-4fad-abb0-1b6a0d2f96c7'},
{from: 'ea4df175-6926-4fad-abb0-1b6a0d2f96c7', to: '8acad20b-3ab2-4a75-a9a8-583f179de96d'}
                            ]);