var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3d39bd78-1b66-4bbf-943d-434735643467', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 3d39bd78-1b66-4bbf-943d-434735643467<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@75e91545'},
{id: 'c532b285-4d8b-4d54-954e-9c9d4c6f0147', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: c532b285-4d8b-4d54-954e-9c9d4c6f0147<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@75e91545'},
{id: '1eb045cf-8b7e-41d7-901c-7277090752da', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 1eb045cf-8b7e-41d7-901c-7277090752da<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@75e91545'},
{id: 'ab0f2780-9427-4dd3-a334-d7e302d81c68', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: ab0f2780-9427-4dd3-a334-d7e302d81c68<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@75e91545'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab0f2780-9427-4dd3-a334-d7e302d81c68', to: '3d39bd78-1b66-4bbf-943d-434735643467'},
{from: '1eb045cf-8b7e-41d7-901c-7277090752da', to: '3d39bd78-1b66-4bbf-943d-434735643467'},
{from: '3d39bd78-1b66-4bbf-943d-434735643467', to: 'c532b285-4d8b-4d54-954e-9c9d4c6f0147'}
                            ]);