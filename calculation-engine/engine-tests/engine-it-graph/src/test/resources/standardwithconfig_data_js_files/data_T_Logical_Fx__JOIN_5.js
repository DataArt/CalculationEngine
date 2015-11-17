var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fada7af7-b864-4b63-84e1-fdeeef784d3a', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: fada7af7-b864-4b63-84e1-fdeeef784d3a<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'},
{id: '31332f4c-d32b-4fc1-8365-b26432ed9a3e', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 31332f4c-d32b-4fc1-8365-b26432ed9a3e<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'},
{id: '8560108c-22d4-4453-b7ba-6076ee51eed6', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 8560108c-22d4-4453-b7ba-6076ee51eed6<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b7a2b89'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fada7af7-b864-4b63-84e1-fdeeef784d3a', to: '8560108c-22d4-4453-b7ba-6076ee51eed6'},
{from: '8560108c-22d4-4453-b7ba-6076ee51eed6', to: '31332f4c-d32b-4fc1-8365-b26432ed9a3e'}
                            ]);