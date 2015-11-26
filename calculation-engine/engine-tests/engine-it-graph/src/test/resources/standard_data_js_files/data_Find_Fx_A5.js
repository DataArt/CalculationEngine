var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '862008fa-734d-47bc-a78e-c6e07f9d2fa6', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 862008fa-734d-47bc-a78e-c6e07f9d2fa6<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e8e8621'},
{id: 'ab58a368-d248-40cb-aade-f6999ac6df2c', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: ab58a368-d248-40cb-aade-f6999ac6df2c<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e8e8621'},
{id: 'e93b3237-7a28-4561-a145-d485283eaa60', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Alias: null<br>Value: 6.0<br>Type: FUNCTION<br>Id: e93b3237-7a28-4561-a145-d485283eaa60<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e8e8621'},
{id: '11564eae-1d26-4e1d-9c77-43760fb41818', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 11564eae-1d26-4e1d-9c77-43760fb41818<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e8e8621'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab58a368-d248-40cb-aade-f6999ac6df2c', to: 'e93b3237-7a28-4561-a145-d485283eaa60'},
{from: 'e93b3237-7a28-4561-a145-d485283eaa60', to: '11564eae-1d26-4e1d-9c77-43760fb41818'},
{from: '862008fa-734d-47bc-a78e-c6e07f9d2fa6', to: 'e93b3237-7a28-4561-a145-d485283eaa60'}
                            ]);