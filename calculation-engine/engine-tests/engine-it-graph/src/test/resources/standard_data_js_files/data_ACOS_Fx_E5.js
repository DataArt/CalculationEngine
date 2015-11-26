var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9f8b1a78-6a52-4aad-98e8-26cef1671d07', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 9f8b1a78-6a52-4aad-98e8-26cef1671d07<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@670002'},
{id: 'db4a398c-2a39-44f9-8e4b-b8ecc1708d10', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: db4a398c-2a39-44f9-8e4b-b8ecc1708d10<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@670002'},
{id: '319d2839-00e1-4a0e-b79d-e76b942e7924', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Alias: null<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 319d2839-00e1-4a0e-b79d-e76b942e7924<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@670002'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db4a398c-2a39-44f9-8e4b-b8ecc1708d10', to: '319d2839-00e1-4a0e-b79d-e76b942e7924'},
{from: '319d2839-00e1-4a0e-b79d-e76b942e7924', to: '9f8b1a78-6a52-4aad-98e8-26cef1671d07'}
                            ]);