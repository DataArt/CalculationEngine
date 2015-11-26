var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '768f40d7-20ea-49f4-bfd3-bff32b1a200f', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 768f40d7-20ea-49f4-bfd3-bff32b1a200f<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'},
{id: 'f7eee8f1-f285-4c21-8744-811d913609ee', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: f7eee8f1-f285-4c21-8744-811d913609ee<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'},
{id: 'c74b9062-39ff-4049-b955-e69ead65e411', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: c74b9062-39ff-4049-b955-e69ead65e411<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'},
{id: 'a759341a-36fb-401e-a2b4-af8f3046a9f0', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 790.0<br>Type: FUNCTION<br>Id: a759341a-36fb-401e-a2b4-af8f3046a9f0<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'},
{id: 'f9b7154a-8825-4502-81ae-7e1f4aba4f13', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: f9b7154a-8825-4502-81ae-7e1f4aba4f13<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'},
{id: 'b9ab4184-4923-4421-b670-cf17798148d6', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: b9ab4184-4923-4421-b670-cf17798148d6<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e82ae'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b9ab4184-4923-4421-b670-cf17798148d6', to: 'a759341a-36fb-401e-a2b4-af8f3046a9f0'},
{from: 'c74b9062-39ff-4049-b955-e69ead65e411', to: 'a759341a-36fb-401e-a2b4-af8f3046a9f0'},
{from: 'a759341a-36fb-401e-a2b4-af8f3046a9f0', to: '768f40d7-20ea-49f4-bfd3-bff32b1a200f'},
{from: 'f7eee8f1-f285-4c21-8744-811d913609ee', to: 'a759341a-36fb-401e-a2b4-af8f3046a9f0'},
{from: 'f9b7154a-8825-4502-81ae-7e1f4aba4f13', to: 'a759341a-36fb-401e-a2b4-af8f3046a9f0'}
                            ]);