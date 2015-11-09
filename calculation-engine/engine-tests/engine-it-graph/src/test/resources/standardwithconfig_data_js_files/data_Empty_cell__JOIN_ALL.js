var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3bacec21-cdcb-4f2c-a3f5-0e87d8258b80', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 3bacec21-cdcb-4f2c-a3f5-0e87d8258b80<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: 'b654adf0-3630-4262-9302-b373af0ab44b', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: b654adf0-3630-4262-9302-b373af0ab44b<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: 'f616d62f-01a4-48bd-ab0a-974602b85c2e', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: f616d62f-01a4-48bd-ab0a-974602b85c2e<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: '8f2400a6-2d57-4a47-a8f9-50869b1da7c5', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: 8f2400a6-2d57-4a47-a8f9-50869b1da7c5<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'},
{id: '61f39b1a-e13e-44b0-ba41-c4cbf447f911', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 61f39b1a-e13e-44b0-ba41-c4cbf447f911<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ce3db41'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f2400a6-2d57-4a47-a8f9-50869b1da7c5', to: 'f616d62f-01a4-48bd-ab0a-974602b85c2e'},
{from: '61f39b1a-e13e-44b0-ba41-c4cbf447f911', to: 'b654adf0-3630-4262-9302-b373af0ab44b'},
{from: '3bacec21-cdcb-4f2c-a3f5-0e87d8258b80', to: '8f2400a6-2d57-4a47-a8f9-50869b1da7c5'}
                            ]);