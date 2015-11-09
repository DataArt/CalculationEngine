var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a53a745e-ca71-499c-8c86-10c7c7afbde6', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: a53a745e-ca71-499c-8c86-10c7c7afbde6<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '3ae9b722-2eca-4e67-a4ac-759b6ad4571d', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 3ae9b722-2eca-4e67-a4ac-759b6ad4571d<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '711abc53-591f-4faf-84df-4283725bacc2', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 711abc53-591f-4faf-84df-4283725bacc2<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '9ab30174-78f6-4e9f-ba56-e238bdaf3310', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 9ab30174-78f6-4e9f-ba56-e238bdaf3310<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '0c85bb64-46fc-407c-b1c1-ac400140de76', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 0c85bb64-46fc-407c-b1c1-ac400140de76<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '96744600-03ed-4fa7-8d8b-3b1940e25ec2', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 96744600-03ed-4fa7-8d8b-3b1940e25ec2<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: '2632b5b6-6f16-49bf-ac46-1927ee7f6e04', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 2632b5b6-6f16-49bf-ac46-1927ee7f6e04<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'},
{id: 'c4bf09ea-9d99-4e91-b550-7a14cc32a798', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: c4bf09ea-9d99-4e91-b550-7a14cc32a798<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a7deba5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9ab30174-78f6-4e9f-ba56-e238bdaf3310', to: 'c4bf09ea-9d99-4e91-b550-7a14cc32a798'},
{from: '0c85bb64-46fc-407c-b1c1-ac400140de76', to: '2632b5b6-6f16-49bf-ac46-1927ee7f6e04'},
{from: '96744600-03ed-4fa7-8d8b-3b1940e25ec2', to: 'c4bf09ea-9d99-4e91-b550-7a14cc32a798'},
{from: 'c4bf09ea-9d99-4e91-b550-7a14cc32a798', to: 'a53a745e-ca71-499c-8c86-10c7c7afbde6'},
{from: '711abc53-591f-4faf-84df-4283725bacc2', to: '0c85bb64-46fc-407c-b1c1-ac400140de76'},
{from: '3ae9b722-2eca-4e67-a4ac-759b6ad4571d', to: '0c85bb64-46fc-407c-b1c1-ac400140de76'}
                            ]);