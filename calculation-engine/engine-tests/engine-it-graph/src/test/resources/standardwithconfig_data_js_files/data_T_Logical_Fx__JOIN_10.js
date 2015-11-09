var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '24ab8524-9a7e-4bfe-9302-d7564fe3e034', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 24ab8524-9a7e-4bfe-9302-d7564fe3e034<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'},
{id: '809deb7f-0cf7-4c1c-ad1e-f7368281c95a', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 809deb7f-0cf7-4c1c-ad1e-f7368281c95a<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'},
{id: 'd636d54a-8129-4f2e-949f-53ea3cd2de07', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: d636d54a-8129-4f2e-949f-53ea3cd2de07<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@675bf541'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd636d54a-8129-4f2e-949f-53ea3cd2de07', to: '809deb7f-0cf7-4c1c-ad1e-f7368281c95a'},
{from: '24ab8524-9a7e-4bfe-9302-d7564fe3e034', to: 'd636d54a-8129-4f2e-949f-53ea3cd2de07'}
                            ]);