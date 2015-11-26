var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '07109055-0b3b-4c27-88dd-f4763c1aad1b', label: '+\n47.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 47.0<br>Type: OPERATOR<br>Id: 07109055-0b3b-4c27-88dd-f4763c1aad1b<br>Formula Expression: Formula String: B1 + A1; Formula Values: 32.0 + 15.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'},
{id: '708abf9b-bf58-4911-8bd3-aaf3161c0112', label: 'C1\n4.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 708abf9b-bf58-4911-8bd3-aaf3161c0112<br>Formula Expression: Formula String: C1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'},
{id: '1dc58db9-941e-4e9f-982b-aa06f2315582', label: 'B1\n32.0', color: '#31b0d5', title: 'Name: B1<br>Alias: My_Age<br>Value: 32.0<br>Type: CELL_WITH_VALUE<br>Id: 1dc58db9-941e-4e9f-982b-aa06f2315582<br>Formula Expression: Formula String: B1; Formula Values: 32.0; Formula Ptg: 32.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'},
{id: '2fd31d2f-db48-4ca0-bcc6-8fe37f399355', label: 'A1\n15.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_VALUE<br>Id: 2fd31d2f-db48-4ca0-bcc6-8fe37f399355<br>Formula Expression: Formula String: A1; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'},
{id: 'b9772853-a55f-46ad-ab00-a3af58473d59', label: '+\n51.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 51.0<br>Type: OPERATOR<br>Id: b9772853-a55f-46ad-ab00-a3af58473d59<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'},
{id: 'b4b564ec-4bed-4c72-90b3-7024a5ab9b65', label: 'B3\n51.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 51.0<br>Type: CELL_WITH_FORMULA<br>Id: b4b564ec-4bed-4c72-90b3-7024a5ab9b65<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: 32.0 15.0 + 4.0 +; Ptgs: B1 A1 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77fa9381'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2fd31d2f-db48-4ca0-bcc6-8fe37f399355', to: '07109055-0b3b-4c27-88dd-f4763c1aad1b'},
{from: 'b9772853-a55f-46ad-ab00-a3af58473d59', to: 'b4b564ec-4bed-4c72-90b3-7024a5ab9b65'},
{from: '07109055-0b3b-4c27-88dd-f4763c1aad1b', to: 'b9772853-a55f-46ad-ab00-a3af58473d59'},
{from: '1dc58db9-941e-4e9f-982b-aa06f2315582', to: '07109055-0b3b-4c27-88dd-f4763c1aad1b'},
{from: '708abf9b-bf58-4911-8bd3-aaf3161c0112', to: 'b9772853-a55f-46ad-ab00-a3af58473d59'}
                            ]);