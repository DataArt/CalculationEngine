var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a0f29650-de0e-44ca-a421-434af28e4eaf', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: a0f29650-de0e-44ca-a421-434af28e4eaf<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: 'f7ff6217-c8da-459b-b61c-3f8489a7cb53', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: f7ff6217-c8da-459b-b61c-3f8489a7cb53<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: 'bd69d35d-3b6b-439f-ae0a-39849311bc1d', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: bd69d35d-3b6b-439f-ae0a-39849311bc1d<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: 'f2163ea6-6b91-4965-a635-7c19dd60cd82', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: f2163ea6-6b91-4965-a635-7c19dd60cd82<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f2163ea6-6b91-4965-a635-7c19dd60cd82', to: 'f7ff6217-c8da-459b-b61c-3f8489a7cb53'},
{from: 'f7ff6217-c8da-459b-b61c-3f8489a7cb53', to: 'a0f29650-de0e-44ca-a421-434af28e4eaf'},
{from: 'bd69d35d-3b6b-439f-ae0a-39849311bc1d', to: 'f7ff6217-c8da-459b-b61c-3f8489a7cb53'}
                            ]);