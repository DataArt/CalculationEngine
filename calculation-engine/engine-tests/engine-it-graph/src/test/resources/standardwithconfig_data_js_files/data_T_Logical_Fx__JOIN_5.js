var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8145a4dd-5a85-434e-ac88-56bd395500ea', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 8145a4dd-5a85-434e-ac88-56bd395500ea<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'},
{id: '982f9dd1-7a85-433b-8659-38a56dd44c9b', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 982f9dd1-7a85-433b-8659-38a56dd44c9b<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'},
{id: '5b7f704c-450b-4a78-a4bb-461ae4ce12b9', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 5b7f704c-450b-4a78-a4bb-461ae4ce12b9<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8145a4dd-5a85-434e-ac88-56bd395500ea', to: '5b7f704c-450b-4a78-a4bb-461ae4ce12b9'},
{from: '5b7f704c-450b-4a78-a4bb-461ae4ce12b9', to: '982f9dd1-7a85-433b-8659-38a56dd44c9b'}
                            ]);