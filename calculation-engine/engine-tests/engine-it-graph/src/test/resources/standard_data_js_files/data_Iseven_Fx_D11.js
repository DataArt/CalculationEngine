var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ede53e42-a2ff-4bb0-8ead-734efe8e9fce', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: ede53e42-a2ff-4bb0-8ead-734efe8e9fce<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ab6678b'},
{id: '448b9505-d322-4c30-9065-f56f75224266', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 448b9505-d322-4c30-9065-f56f75224266<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: qwerty ISEVEN ; Ptgs: D1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ab6678b'},
{id: '5e1d4251-985a-4a77-ab9a-cfbca3357e6f', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 5e1d4251-985a-4a77-ab9a-cfbca3357e6f<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ab6678b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ede53e42-a2ff-4bb0-8ead-734efe8e9fce', to: '5e1d4251-985a-4a77-ab9a-cfbca3357e6f'},
{from: '5e1d4251-985a-4a77-ab9a-cfbca3357e6f', to: '448b9505-d322-4c30-9065-f56f75224266'}
                            ]);