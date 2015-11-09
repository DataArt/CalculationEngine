var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5c346f60-7602-4f09-8d42-97b5cd5dd74e', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 5c346f60-7602-4f09-8d42-97b5cd5dd74e<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '170d1322-a879-4a6a-bd42-74daf81afd06', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 170d1322-a879-4a6a-bd42-74daf81afd06<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '1a75fa23-e7e5-43f7-984f-4fe0f35b2371', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 1a75fa23-e7e5-43f7-984f-4fe0f35b2371<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '0b9bff26-a067-4f75-a5e3-4a5014684a72', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 0b9bff26-a067-4f75-a5e3-4a5014684a72<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '013db7fe-7a58-4662-8fec-24bb8d7415a0', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 013db7fe-7a58-4662-8fec-24bb8d7415a0<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: 'c122f65d-da9c-475a-a42e-e67f1c0fc14b', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: c122f65d-da9c-475a-a42e-e67f1c0fc14b<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c122f65d-da9c-475a-a42e-e67f1c0fc14b', to: '5c346f60-7602-4f09-8d42-97b5cd5dd74e'},
{from: '0b9bff26-a067-4f75-a5e3-4a5014684a72', to: '013db7fe-7a58-4662-8fec-24bb8d7415a0'},
{from: '013db7fe-7a58-4662-8fec-24bb8d7415a0', to: '1a75fa23-e7e5-43f7-984f-4fe0f35b2371'},
{from: '5c346f60-7602-4f09-8d42-97b5cd5dd74e', to: '170d1322-a879-4a6a-bd42-74daf81afd06'}
                            ]);