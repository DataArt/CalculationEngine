var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '172a12f9-b6d2-4772-81f6-e6fb9321715b', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 172a12f9-b6d2-4772-81f6-e6fb9321715b<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '67e2e4ee-d945-4d51-8be3-e5db671c8e01', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 67e2e4ee-d945-4d51-8be3-e5db671c8e01<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: 'eb2f2e57-faae-46ba-a50c-23b5f51fed37', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: eb2f2e57-faae-46ba-a50c-23b5f51fed37<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '28731e84-b864-4e4f-b3b0-234ea5a1282c', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 28731e84-b864-4e4f-b3b0-234ea5a1282c<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: 'e6c5f579-cb77-4645-9048-f4d657554359', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: e6c5f579-cb77-4645-9048-f4d657554359<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '0fbf3c10-6116-40b5-9513-7ab9ce9af81f', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 0fbf3c10-6116-40b5-9513-7ab9ce9af81f<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67e2e4ee-d945-4d51-8be3-e5db671c8e01', to: '28731e84-b864-4e4f-b3b0-234ea5a1282c'},
{from: 'eb2f2e57-faae-46ba-a50c-23b5f51fed37', to: '28731e84-b864-4e4f-b3b0-234ea5a1282c'},
{from: '172a12f9-b6d2-4772-81f6-e6fb9321715b', to: '28731e84-b864-4e4f-b3b0-234ea5a1282c'},
{from: '0fbf3c10-6116-40b5-9513-7ab9ce9af81f', to: '28731e84-b864-4e4f-b3b0-234ea5a1282c'},
{from: '28731e84-b864-4e4f-b3b0-234ea5a1282c', to: 'e6c5f579-cb77-4645-9048-f4d657554359'}
                            ]);