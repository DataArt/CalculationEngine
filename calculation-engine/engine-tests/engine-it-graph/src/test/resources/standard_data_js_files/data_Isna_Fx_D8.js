var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '134f56bd-b7e3-4d2f-b0e2-96f793d9d1db', label: 'D8\n#N/A', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 134f56bd-b7e3-4d2f-b0e2-96f793d9d1db<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: #N/A ISNA ; Ptgs: D6 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e048149'},
{id: 'bdb7a9cc-3993-4101-ac61-898624fed34e', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: bdb7a9cc-3993-4101-ac61-898624fed34e<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e048149'},
{id: 'ca55a230-9c60-498d-bfdc-603c606818c8', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Alias: null<br>Value: #N/A<br>Type: FUNCTION<br>Id: ca55a230-9c60-498d-bfdc-603c606818c8<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e048149'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ca55a230-9c60-498d-bfdc-603c606818c8', to: '134f56bd-b7e3-4d2f-b0e2-96f793d9d1db'},
{from: 'bdb7a9cc-3993-4101-ac61-898624fed34e', to: 'ca55a230-9c60-498d-bfdc-603c606818c8'}
                            ]);