var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0c47de22-952e-47e8-bcbf-bdc5111e6f2e', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 0c47de22-952e-47e8-bcbf-bdc5111e6f2e<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: 'd1b480f7-ec9e-4126-afa2-bf4546374604', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: d1b480f7-ec9e-4126-afa2-bf4546374604<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: 'f8e24f71-a408-4fd0-be06-269d47092b2f', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: f8e24f71-a408-4fd0-be06-269d47092b2f<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: '3983b338-e15c-4b74-a269-fb718ecc0132', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 3983b338-e15c-4b74-a269-fb718ecc0132<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0c47de22-952e-47e8-bcbf-bdc5111e6f2e', to: '3983b338-e15c-4b74-a269-fb718ecc0132'},
{from: 'f8e24f71-a408-4fd0-be06-269d47092b2f', to: '0c47de22-952e-47e8-bcbf-bdc5111e6f2e'},
{from: 'd1b480f7-ec9e-4126-afa2-bf4546374604', to: '0c47de22-952e-47e8-bcbf-bdc5111e6f2e'}
                            ]);