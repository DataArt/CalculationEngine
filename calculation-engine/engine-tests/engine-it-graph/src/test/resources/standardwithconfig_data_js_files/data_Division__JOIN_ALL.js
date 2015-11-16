var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b5cdcaa4-5171-47e3-8d9c-8b23e94bbf83', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: b5cdcaa4-5171-47e3-8d9c-8b23e94bbf83<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '44ada3dd-f6a2-4f3b-9f43-0b6914d87d69', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 44ada3dd-f6a2-4f3b-9f43-0b6914d87d69<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '9b856f77-019f-46f0-8d74-6b0b5422c9fc', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 9b856f77-019f-46f0-8d74-6b0b5422c9fc<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '1615b654-4d3f-4df8-815e-e6f5f51482ea', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 1615b654-4d3f-4df8-815e-e6f5f51482ea<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '44ada3dd-f6a2-4f3b-9f43-0b6914d87d69', to: '1615b654-4d3f-4df8-815e-e6f5f51482ea'},
{from: '9b856f77-019f-46f0-8d74-6b0b5422c9fc', to: '44ada3dd-f6a2-4f3b-9f43-0b6914d87d69'},
{from: 'b5cdcaa4-5171-47e3-8d9c-8b23e94bbf83', to: '44ada3dd-f6a2-4f3b-9f43-0b6914d87d69'}
                            ]);