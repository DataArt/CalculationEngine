var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '12409d71-1e09-4f75-95f7-0dededfef095', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 12409d71-1e09-4f75-95f7-0dededfef095<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'},
{id: '42aa85dc-5161-45d5-bc38-0df11967951a', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 42aa85dc-5161-45d5-bc38-0df11967951a<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'},
{id: '19b36d80-c0aa-4834-81fc-c23ebec73f23', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 19b36d80-c0aa-4834-81fc-c23ebec73f23<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6314e967'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '42aa85dc-5161-45d5-bc38-0df11967951a', to: '19b36d80-c0aa-4834-81fc-c23ebec73f23'},
{from: '12409d71-1e09-4f75-95f7-0dededfef095', to: '42aa85dc-5161-45d5-bc38-0df11967951a'}
                            ]);