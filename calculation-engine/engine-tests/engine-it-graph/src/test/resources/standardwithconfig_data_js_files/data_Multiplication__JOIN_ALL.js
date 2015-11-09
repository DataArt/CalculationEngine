var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '01a2d4c2-a7be-4459-b425-b3866ee135e4', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 01a2d4c2-a7be-4459-b425-b3866ee135e4<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: '8752b2b5-1b31-4c65-9005-5af6599694a6', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8752b2b5-1b31-4c65-9005-5af6599694a6<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: 'a6b645d6-b757-4748-977d-9afb78604cd8', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: a6b645d6-b757-4748-977d-9afb78604cd8<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: '884448e4-e56a-4b4c-b716-93471a396e68', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 884448e4-e56a-4b4c-b716-93471a396e68<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a6b645d6-b757-4748-977d-9afb78604cd8', to: '884448e4-e56a-4b4c-b716-93471a396e68'},
{from: '8752b2b5-1b31-4c65-9005-5af6599694a6', to: '884448e4-e56a-4b4c-b716-93471a396e68'},
{from: '884448e4-e56a-4b4c-b716-93471a396e68', to: '01a2d4c2-a7be-4459-b425-b3866ee135e4'}
                            ]);