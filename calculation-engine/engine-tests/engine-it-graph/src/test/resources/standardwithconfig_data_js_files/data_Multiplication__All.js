var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3c222b96-931f-41af-a1be-718f78656b49', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 3c222b96-931f-41af-a1be-718f78656b49<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: 'c1bba11b-9157-47be-8958-4b1cc58a151d', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: c1bba11b-9157-47be-8958-4b1cc58a151d<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: 'a76f756d-925f-4586-bdae-dd61fb919580', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: a76f756d-925f-4586-bdae-dd61fb919580<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: '8b3586e7-3470-4b19-9d4f-bba8d8ba6b45', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 8b3586e7-3470-4b19-9d4f-bba8d8ba6b45<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a76f756d-925f-4586-bdae-dd61fb919580', to: '3c222b96-931f-41af-a1be-718f78656b49'},
{from: '8b3586e7-3470-4b19-9d4f-bba8d8ba6b45', to: '3c222b96-931f-41af-a1be-718f78656b49'},
{from: '3c222b96-931f-41af-a1be-718f78656b49', to: 'c1bba11b-9157-47be-8958-4b1cc58a151d'}
                            ]);