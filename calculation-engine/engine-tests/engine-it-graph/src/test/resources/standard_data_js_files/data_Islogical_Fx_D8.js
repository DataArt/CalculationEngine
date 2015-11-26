var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2c3b26a2-1583-422f-bcfa-1637a7afe60c', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 2c3b26a2-1583-422f-bcfa-1637a7afe60c<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c58dcb1'},
{id: '700164ed-749e-49d2-99a0-f7df182febea', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 700164ed-749e-49d2-99a0-f7df182febea<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c58dcb1'},
{id: 'e706fd7e-8b92-4156-9695-8859f17e9a00', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: e706fd7e-8b92-4156-9695-8859f17e9a00<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: VALUE ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c58dcb1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c3b26a2-1583-422f-bcfa-1637a7afe60c', to: '700164ed-749e-49d2-99a0-f7df182febea'},
{from: '700164ed-749e-49d2-99a0-f7df182febea', to: 'e706fd7e-8b92-4156-9695-8859f17e9a00'}
                            ]);