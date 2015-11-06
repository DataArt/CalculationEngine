var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a4245f03-50d5-412b-b939-f6fe457e9534', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: a4245f03-50d5-412b-b939-f6fe457e9534<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: 'ba46a7a2-493f-4f41-a4f5-31b95bbed843', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: ba46a7a2-493f-4f41-a4f5-31b95bbed843<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: '18b373af-bc61-4729-b9b3-7f4cb7682d00', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 18b373af-bc61-4729-b9b3-7f4cb7682d00<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: '1021f4dc-2e07-43cd-a06f-6f79b95c8e9d', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1021f4dc-2e07-43cd-a06f-6f79b95c8e9d<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: '417ca469-4728-4eb9-9986-1bf0e7493a97', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 417ca469-4728-4eb9-9986-1bf0e7493a97<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: '8a1719c1-8cf4-4114-a66a-6ad94e9339bd', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 8a1719c1-8cf4-4114-a66a-6ad94e9339bd<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: 'b64f3b77-fb6b-4bf5-8fed-b06d2d656784', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: b64f3b77-fb6b-4bf5-8fed-b06d2d656784<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'},
{id: '9483ad34-7fba-4bf4-8b9a-4c4b938d8cb4', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 9483ad34-7fba-4bf4-8b9a-4c4b938d8cb4<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b20ca2b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1021f4dc-2e07-43cd-a06f-6f79b95c8e9d', to: '8a1719c1-8cf4-4114-a66a-6ad94e9339bd'},
{from: '18b373af-bc61-4729-b9b3-7f4cb7682d00', to: 'a4245f03-50d5-412b-b939-f6fe457e9534'},
{from: 'a4245f03-50d5-412b-b939-f6fe457e9534', to: '8a1719c1-8cf4-4114-a66a-6ad94e9339bd'},
{from: 'b64f3b77-fb6b-4bf5-8fed-b06d2d656784', to: '417ca469-4728-4eb9-9986-1bf0e7493a97'},
{from: 'ba46a7a2-493f-4f41-a4f5-31b95bbed843', to: 'a4245f03-50d5-412b-b939-f6fe457e9534'},
{from: '8a1719c1-8cf4-4114-a66a-6ad94e9339bd', to: '417ca469-4728-4eb9-9986-1bf0e7493a97'},
{from: '417ca469-4728-4eb9-9986-1bf0e7493a97', to: '9483ad34-7fba-4bf4-8b9a-4c4b938d8cb4'}
                            ]);