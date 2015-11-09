var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd30435c5-477a-48de-8bb6-6921dec3ca0b', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: d30435c5-477a-48de-8bb6-6921dec3ca0b<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: 'd2ceb9fc-5b11-4713-ae96-a681394dba49', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: d2ceb9fc-5b11-4713-ae96-a681394dba49<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: '5fa756de-bfc3-4d39-aa6e-d44f708f80f5', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 5fa756de-bfc3-4d39-aa6e-d44f708f80f5<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: '10ad5645-263d-4e5c-b0f1-9cd496054827', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 10ad5645-263d-4e5c-b0f1-9cd496054827<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5fa756de-bfc3-4d39-aa6e-d44f708f80f5', to: 'd2ceb9fc-5b11-4713-ae96-a681394dba49'},
{from: 'd2ceb9fc-5b11-4713-ae96-a681394dba49', to: '10ad5645-263d-4e5c-b0f1-9cd496054827'},
{from: 'd30435c5-477a-48de-8bb6-6921dec3ca0b', to: 'd2ceb9fc-5b11-4713-ae96-a681394dba49'}
                            ]);