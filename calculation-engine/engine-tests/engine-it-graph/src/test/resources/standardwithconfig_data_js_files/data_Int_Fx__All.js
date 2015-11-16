var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ec29e9b1-e902-43e0-8b32-b9d420e51979', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: ec29e9b1-e902-43e0-8b32-b9d420e51979<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '8d27558e-0d66-43eb-91be-b0ceaf9176ea', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 8d27558e-0d66-43eb-91be-b0ceaf9176ea<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '47d0cb48-34b9-434c-9a8b-37fb6547776d', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 47d0cb48-34b9-434c-9a8b-37fb6547776d<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '74dcefb1-a6d0-4ce5-af2f-212aaa5f0912', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 74dcefb1-a6d0-4ce5-af2f-212aaa5f0912<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '502495f0-76dd-4c62-a26b-fbefe6e61734', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 502495f0-76dd-4c62-a26b-fbefe6e61734<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '0302c6a1-e587-4145-9516-abd7cf4f37c6', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 0302c6a1-e587-4145-9516-abd7cf4f37c6<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '74dcefb1-a6d0-4ce5-af2f-212aaa5f0912', to: 'ec29e9b1-e902-43e0-8b32-b9d420e51979'},
{from: '47d0cb48-34b9-434c-9a8b-37fb6547776d', to: '502495f0-76dd-4c62-a26b-fbefe6e61734'},
{from: '502495f0-76dd-4c62-a26b-fbefe6e61734', to: '8d27558e-0d66-43eb-91be-b0ceaf9176ea'},
{from: 'ec29e9b1-e902-43e0-8b32-b9d420e51979', to: '0302c6a1-e587-4145-9516-abd7cf4f37c6'}
                            ]);