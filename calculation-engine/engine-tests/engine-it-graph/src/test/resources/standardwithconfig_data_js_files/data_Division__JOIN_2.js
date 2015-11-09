var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1bf167b2-426a-4667-b3cb-0ec4fba9e76f', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 1bf167b2-426a-4667-b3cb-0ec4fba9e76f<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@805e72e'},
{id: 'fe0b61ad-ac25-4a7c-884e-6c1a69400618', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: fe0b61ad-ac25-4a7c-884e-6c1a69400618<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@805e72e'},
{id: '50629110-0e2b-4e8c-bf28-1d6f69945894', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 50629110-0e2b-4e8c-bf28-1d6f69945894<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@805e72e'},
{id: 'db2828c5-abdd-43d5-82ae-16c6009ff177', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: db2828c5-abdd-43d5-82ae-16c6009ff177<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@805e72e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db2828c5-abdd-43d5-82ae-16c6009ff177', to: 'fe0b61ad-ac25-4a7c-884e-6c1a69400618'},
{from: '1bf167b2-426a-4667-b3cb-0ec4fba9e76f', to: 'db2828c5-abdd-43d5-82ae-16c6009ff177'},
{from: '50629110-0e2b-4e8c-bf28-1d6f69945894', to: 'db2828c5-abdd-43d5-82ae-16c6009ff177'}
                            ]);