var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '080be548-4030-41db-b367-c2514eff1d10', label: 'IFERROR\n-2.0', color: '#f0ad4e', title: 'Name: IFERROR<br>Value: -2.0<br>Type: FUNCTION<br>Id: 080be548-4030-41db-b367-c2514eff1d10<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'},
{id: '11e94cce-1f91-48b8-a235-d76dce45ccaa', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 11e94cce-1f91-48b8-a235-d76dce45ccaa<br>Formula Expression: Formula String: B3; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'},
{id: 'a0110956-b453-4b98-a3aa-fd98905a8b6a', label: 'B5\n-2.0', color: '#31b0d5', title: 'Name: B5<br>Value: -2.0<br>Type: CELL_WITH_FORMULA<br>Id: a0110956-b453-4b98-a3aa-fd98905a8b6a<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: 7.0, 3.0 5.0 - IFERROR ; Ptgs: B3, A3 VALUE - IFERROR  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'},
{id: 'cfd09bcf-e54f-4d74-b8c4-9fed936b42ba', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: cfd09bcf-e54f-4d74-b8c4-9fed936b42ba<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'},
{id: 'ca3b67b4-f205-408e-a32c-98712014e2ad', label: '-\n-2.0', color: '#f0ad4e', title: 'Name: -<br>Value: -2.0<br>Type: OPERATOR<br>Id: ca3b67b4-f205-408e-a32c-98712014e2ad<br>Formula Expression: Formula String: A3 - VALUE; Formula Values: 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'},
{id: '097aa583-17a3-4c07-b49b-ba80ec8583de', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 097aa583-17a3-4c07-b49b-ba80ec8583de<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f162cc0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '11e94cce-1f91-48b8-a235-d76dce45ccaa', to: '080be548-4030-41db-b367-c2514eff1d10'},
{from: '097aa583-17a3-4c07-b49b-ba80ec8583de', to: 'ca3b67b4-f205-408e-a32c-98712014e2ad'},
{from: 'cfd09bcf-e54f-4d74-b8c4-9fed936b42ba', to: 'ca3b67b4-f205-408e-a32c-98712014e2ad'},
{from: 'ca3b67b4-f205-408e-a32c-98712014e2ad', to: '080be548-4030-41db-b367-c2514eff1d10'},
{from: '080be548-4030-41db-b367-c2514eff1d10', to: 'a0110956-b453-4b98-a3aa-fd98905a8b6a'}
                            ]);