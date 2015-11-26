var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '278240a9-19e4-4428-8723-5b3faa6ee99a', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 278240a9-19e4-4428-8723-5b3faa6ee99a<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b760460'},
{id: '9738282c-6ee2-49f0-94fe-2b4f208afe46', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 9738282c-6ee2-49f0-94fe-2b4f208afe46<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b760460'},
{id: 'e1491818-95de-41fb-b1c9-625d7a64950b', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: e1491818-95de-41fb-b1c9-625d7a64950b<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b760460'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9738282c-6ee2-49f0-94fe-2b4f208afe46', to: 'e1491818-95de-41fb-b1c9-625d7a64950b'},
{from: 'e1491818-95de-41fb-b1c9-625d7a64950b', to: '278240a9-19e4-4428-8723-5b3faa6ee99a'}
                            ]);