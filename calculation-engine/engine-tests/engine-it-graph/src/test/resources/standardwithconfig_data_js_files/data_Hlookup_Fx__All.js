var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '65085ff4-afdd-4d5b-b894-e19de79be6c5', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 65085ff4-afdd-4d5b-b894-e19de79be6c5<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '036e8d17-2214-4a12-9a19-d5dd22819e26', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 036e8d17-2214-4a12-9a19-d5dd22819e26<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '36440b8e-36f0-4116-90e8-47586e000a00', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 36440b8e-36f0-4116-90e8-47586e000a00<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: 'b39ccee8-c71c-4a8a-b9f1-0da261e61378', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: b39ccee8-c71c-4a8a-b9f1-0da261e61378<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: 'ee95825d-957a-4a21-9669-aae351ee5cb7', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: ee95825d-957a-4a21-9669-aae351ee5cb7<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '8c60bdeb-974f-434d-b537-619f168f5825', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 8c60bdeb-974f-434d-b537-619f168f5825<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '036e8d17-2214-4a12-9a19-d5dd22819e26', to: '36440b8e-36f0-4116-90e8-47586e000a00'},
{from: '65085ff4-afdd-4d5b-b894-e19de79be6c5', to: '36440b8e-36f0-4116-90e8-47586e000a00'},
{from: '36440b8e-36f0-4116-90e8-47586e000a00', to: 'b39ccee8-c71c-4a8a-b9f1-0da261e61378'},
{from: 'ee95825d-957a-4a21-9669-aae351ee5cb7', to: '36440b8e-36f0-4116-90e8-47586e000a00'},
{from: '8c60bdeb-974f-434d-b537-619f168f5825', to: '36440b8e-36f0-4116-90e8-47586e000a00'}
                            ]);