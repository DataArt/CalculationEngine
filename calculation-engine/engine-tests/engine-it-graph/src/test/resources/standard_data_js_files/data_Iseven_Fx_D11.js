var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4e2c9bad-e0a7-4308-a9d5-513d0b943317', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 4e2c9bad-e0a7-4308-a9d5-513d0b943317<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f651f93'},
{id: '5ada8268-fad3-429d-89e2-12e80ef14249', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: 5ada8268-fad3-429d-89e2-12e80ef14249<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f651f93'},
{id: 'ea9139a6-18df-4b81-986d-9ef315069a21', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: ea9139a6-18df-4b81-986d-9ef315069a21<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: qwerty ISEVEN ; Ptgs: D1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f651f93'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4e2c9bad-e0a7-4308-a9d5-513d0b943317', to: 'ea9139a6-18df-4b81-986d-9ef315069a21'},
{from: '5ada8268-fad3-429d-89e2-12e80ef14249', to: '4e2c9bad-e0a7-4308-a9d5-513d0b943317'}
                            ]);