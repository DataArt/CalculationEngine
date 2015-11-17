var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '32d8e007-a0e4-4261-b6ad-29fdba8ca4d4', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 32d8e007-a0e4-4261-b6ad-29fdba8ca4d4<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '22ffe78b-19a8-4d14-869f-6f20f1b8bad8', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 22ffe78b-19a8-4d14-869f-6f20f1b8bad8<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: 'a0d7fddb-7096-492a-b92f-c240ae42aab2', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: a0d7fddb-7096-492a-b92f-c240ae42aab2<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '628a0c60-512e-4645-9e81-c66a4095f08b', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 628a0c60-512e-4645-9e81-c66a4095f08b<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: '7b81675d-70f9-4ed2-a579-4a56f41346d9', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 7b81675d-70f9-4ed2-a579-4a56f41346d9<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'},
{id: 'a40e1131-32d9-409e-86fa-a03afe9c652f', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: a40e1131-32d9-409e-86fa-a03afe9c652f<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1220969'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '22ffe78b-19a8-4d14-869f-6f20f1b8bad8', to: 'a0d7fddb-7096-492a-b92f-c240ae42aab2'},
{from: '32d8e007-a0e4-4261-b6ad-29fdba8ca4d4', to: 'a0d7fddb-7096-492a-b92f-c240ae42aab2'},
{from: 'a0d7fddb-7096-492a-b92f-c240ae42aab2', to: '628a0c60-512e-4645-9e81-c66a4095f08b'},
{from: '7b81675d-70f9-4ed2-a579-4a56f41346d9', to: 'a0d7fddb-7096-492a-b92f-c240ae42aab2'},
{from: 'a40e1131-32d9-409e-86fa-a03afe9c652f', to: 'a0d7fddb-7096-492a-b92f-c240ae42aab2'}
                            ]);