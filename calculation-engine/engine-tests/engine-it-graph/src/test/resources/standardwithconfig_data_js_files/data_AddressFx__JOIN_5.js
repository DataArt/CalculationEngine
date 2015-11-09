var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5f5104ab-389b-4c1b-bf02-8b4150feb1d7', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 5f5104ab-389b-4c1b-bf02-8b4150feb1d7<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: '9580ccfd-79f6-45eb-9077-a4723e82b217', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 9580ccfd-79f6-45eb-9077-a4723e82b217<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: '3214459a-b921-414a-b10e-170166e03852', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 3214459a-b921-414a-b10e-170166e03852<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: 'e83540f5-a8a3-4055-8910-ec32a5114fb8', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: e83540f5-a8a3-4055-8910-ec32a5114fb8<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9580ccfd-79f6-45eb-9077-a4723e82b217', to: '3214459a-b921-414a-b10e-170166e03852'},
{from: '3214459a-b921-414a-b10e-170166e03852', to: 'e83540f5-a8a3-4055-8910-ec32a5114fb8'},
{from: '5f5104ab-389b-4c1b-bf02-8b4150feb1d7', to: '3214459a-b921-414a-b10e-170166e03852'}
                            ]);