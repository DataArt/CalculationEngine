var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e55989fe-1400-4791-a250-79b2b93bd826', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Value: #N/A<br>Type: FUNCTION<br>Id: e55989fe-1400-4791-a250-79b2b93bd826<br>Formula Expression: Formula String: ISNA(ISNA(D6)); Formula Values: ISNA(ISNA(#N/A)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: '9d1373d7-2fe6-4e61-9d8c-5a6aa14604ed', label: 'D9\n#N/A', color: '#31b0d5', title: 'Name: D9<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 9d1373d7-2fe6-4e61-9d8c-5a6aa14604ed<br>Formula Expression: Formula String: ISNA(ISNA(D6)); Formula Values: ISNA(ISNA(#N/A)); Formula Ptg: #N/A ISNA  ISNA ; Ptgs: D6 ISNA  ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: '2b406657-7551-4049-9b98-392f735954e8', label: 'D8\n#N/A', color: '#31b0d5', title: 'Name: D8<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 2b406657-7551-4049-9b98-392f735954e8<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: #N/A ISNA ; Ptgs: D6 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: '3a4a6315-2909-4148-8265-631035fcf83e', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Value: #N/A<br>Type: FUNCTION<br>Id: 3a4a6315-2909-4148-8265-631035fcf83e<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: '6540727d-b2c1-492d-a120-f564712db814', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: 6540727d-b2c1-492d-a120-f564712db814<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: 'c2e7fcc2-93e1-458c-9321-5e09773b1a42', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: c2e7fcc2-93e1-458c-9321-5e09773b1a42<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'},
{id: 'c03c2311-5444-4803-be98-795f2e968b4c', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Value: #N/A<br>Type: FUNCTION<br>Id: c03c2311-5444-4803-be98-795f2e968b4c<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@782be4eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3a4a6315-2909-4148-8265-631035fcf83e', to: '2b406657-7551-4049-9b98-392f735954e8'},
{from: 'c03c2311-5444-4803-be98-795f2e968b4c', to: '2b406657-7551-4049-9b98-392f735954e8'},
{from: 'c2e7fcc2-93e1-458c-9321-5e09773b1a42', to: '3a4a6315-2909-4148-8265-631035fcf83e'},
{from: 'e55989fe-1400-4791-a250-79b2b93bd826', to: '9d1373d7-2fe6-4e61-9d8c-5a6aa14604ed'},
{from: '6540727d-b2c1-492d-a120-f564712db814', to: 'c03c2311-5444-4803-be98-795f2e968b4c'},
{from: '2b406657-7551-4049-9b98-392f735954e8', to: 'e55989fe-1400-4791-a250-79b2b93bd826'}
                            ]);