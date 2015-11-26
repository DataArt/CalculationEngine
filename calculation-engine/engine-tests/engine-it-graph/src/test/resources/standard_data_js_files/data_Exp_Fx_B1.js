var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd20313b1-801b-45fb-a01c-962d328105db', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: d20313b1-801b-45fb-a01c-962d328105db<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d0bfb24'},
{id: '16c984db-f479-4abb-af04-35669dce68a5', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 16c984db-f479-4abb-af04-35669dce68a5<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d0bfb24'},
{id: '1aa6d200-8dcd-4901-8c38-3eea84f49da7', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1aa6d200-8dcd-4901-8c38-3eea84f49da7<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d0bfb24'},
{id: '47137135-933e-4c96-a639-db006005b0d6', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 47137135-933e-4c96-a639-db006005b0d6<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d0bfb24'},
{id: 'dfd8f6ae-62d0-4810-b6e5-99807ee024fe', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: dfd8f6ae-62d0-4810-b6e5-99807ee024fe<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d0bfb24'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dfd8f6ae-62d0-4810-b6e5-99807ee024fe', to: '47137135-933e-4c96-a639-db006005b0d6'},
{from: 'd20313b1-801b-45fb-a01c-962d328105db', to: '16c984db-f479-4abb-af04-35669dce68a5'},
{from: '16c984db-f479-4abb-af04-35669dce68a5', to: 'dfd8f6ae-62d0-4810-b6e5-99807ee024fe'},
{from: '1aa6d200-8dcd-4901-8c38-3eea84f49da7', to: 'd20313b1-801b-45fb-a01c-962d328105db'}
                            ]);