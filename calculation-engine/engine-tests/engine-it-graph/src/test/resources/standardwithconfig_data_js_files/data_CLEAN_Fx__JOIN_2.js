var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f85d3fdf-f2d6-4a5d-b6cc-d066dc1e79f4', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: f85d3fdf-f2d6-4a5d-b6cc-d066dc1e79f4<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'},
{id: 'd0fc148e-1fc1-463e-a794-5f742185c9f7', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: d0fc148e-1fc1-463e-a794-5f742185c9f7<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'},
{id: 'ff012775-ded3-453d-8cc5-70a15ead4879', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: ff012775-ded3-453d-8cc5-70a15ead4879<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'},
{id: '6b5ca95c-b394-4d29-a72a-12fbb791a738', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 6b5ca95c-b394-4d29-a72a-12fbb791a738<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'},
{id: '821c547c-1e98-4779-83c8-b8afa2f06350', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 821c547c-1e98-4779-83c8-b8afa2f06350<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'},
{id: '4fc651d5-746d-4940-848f-7d0ba5c5ed76', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 4fc651d5-746d-4940-848f-7d0ba5c5ed76<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da635c0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f85d3fdf-f2d6-4a5d-b6cc-d066dc1e79f4', to: '4fc651d5-746d-4940-848f-7d0ba5c5ed76'},
{from: 'ff012775-ded3-453d-8cc5-70a15ead4879', to: '821c547c-1e98-4779-83c8-b8afa2f06350'},
{from: 'd0fc148e-1fc1-463e-a794-5f742185c9f7', to: 'ff012775-ded3-453d-8cc5-70a15ead4879'},
{from: '6b5ca95c-b394-4d29-a72a-12fbb791a738', to: 'f85d3fdf-f2d6-4a5d-b6cc-d066dc1e79f4'}
                            ]);