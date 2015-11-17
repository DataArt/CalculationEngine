var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '388fac12-3fc4-49d0-aac3-dd4b6eba85b7', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 388fac12-3fc4-49d0-aac3-dd4b6eba85b7<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'},
{id: '213c322e-c642-4946-8156-010dbd39ffc0', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 213c322e-c642-4946-8156-010dbd39ffc0<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'},
{id: '0503e0f8-c004-44f9-9a58-7ecb51c0e17d', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 0503e0f8-c004-44f9-9a58-7ecb51c0e17d<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'},
{id: '48c07ecc-2c19-401c-b295-725c9f313d30', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 48c07ecc-2c19-401c-b295-725c9f313d30<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'},
{id: '96f9114e-3bc7-4aec-8c5d-618264ecb9ab', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 96f9114e-3bc7-4aec-8c5d-618264ecb9ab<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'},
{id: '3696016f-c34e-42f1-9f01-2e011d2853eb', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 3696016f-c34e-42f1-9f01-2e011d2853eb<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7926352f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '96f9114e-3bc7-4aec-8c5d-618264ecb9ab', to: '3696016f-c34e-42f1-9f01-2e011d2853eb'},
{from: '48c07ecc-2c19-401c-b295-725c9f313d30', to: '388fac12-3fc4-49d0-aac3-dd4b6eba85b7'},
{from: '3696016f-c34e-42f1-9f01-2e011d2853eb', to: '0503e0f8-c004-44f9-9a58-7ecb51c0e17d'},
{from: '388fac12-3fc4-49d0-aac3-dd4b6eba85b7', to: '213c322e-c642-4946-8156-010dbd39ffc0'}
                            ]);