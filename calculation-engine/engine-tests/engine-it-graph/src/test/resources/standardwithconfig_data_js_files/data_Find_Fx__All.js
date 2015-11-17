var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fd685b5a-6300-455c-b4ee-911b3ce829ec', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: fd685b5a-6300-455c-b4ee-911b3ce829ec<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: '9bd5f1c9-a906-4431-8971-4f0435b273e4', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 9bd5f1c9-a906-4431-8971-4f0435b273e4<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: 'ceae361a-0e14-47b8-8312-fb4772afaf6c', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: ceae361a-0e14-47b8-8312-fb4772afaf6c<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: '6d068b07-3c74-4292-ae4f-cdf01bcd5ab5', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 6d068b07-3c74-4292-ae4f-cdf01bcd5ab5<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9bd5f1c9-a906-4431-8971-4f0435b273e4', to: 'fd685b5a-6300-455c-b4ee-911b3ce829ec'},
{from: 'fd685b5a-6300-455c-b4ee-911b3ce829ec', to: '6d068b07-3c74-4292-ae4f-cdf01bcd5ab5'},
{from: 'ceae361a-0e14-47b8-8312-fb4772afaf6c', to: 'fd685b5a-6300-455c-b4ee-911b3ce829ec'}
                            ]);