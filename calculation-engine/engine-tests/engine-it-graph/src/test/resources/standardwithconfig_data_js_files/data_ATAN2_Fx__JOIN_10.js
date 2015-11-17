var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a47cbf0c-973a-4b56-9db0-05a49a2d31b7', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: a47cbf0c-973a-4b56-9db0-05a49a2d31b7<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '34408a47-e927-433a-b408-d035c11c31c5', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 34408a47-e927-433a-b408-d035c11c31c5<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: 'bdeb8759-291f-4734-a4b1-3e418d75c691', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: bdeb8759-291f-4734-a4b1-3e418d75c691<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '0ae0907a-fa63-4ff4-be99-a30345913758', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 0ae0907a-fa63-4ff4-be99-a30345913758<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '7a5cdc5d-a2e6-4e23-9815-79b1b9d42808', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 7a5cdc5d-a2e6-4e23-9815-79b1b9d42808<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: 'a7fa2b05-5191-4f6a-84f1-9dc480df1d35', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: a7fa2b05-5191-4f6a-84f1-9dc480df1d35<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '8eabf97a-9fd1-4be6-875e-77c135daaca7', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 8eabf97a-9fd1-4be6-875e-77c135daaca7<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: 'b2c149c9-3f7b-48ed-acec-b8ed87c4bf04', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: b2c149c9-3f7b-48ed-acec-b8ed87c4bf04<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '34408a47-e927-433a-b408-d035c11c31c5', to: '8eabf97a-9fd1-4be6-875e-77c135daaca7'},
{from: 'bdeb8759-291f-4734-a4b1-3e418d75c691', to: '0ae0907a-fa63-4ff4-be99-a30345913758'},
{from: '7a5cdc5d-a2e6-4e23-9815-79b1b9d42808', to: '34408a47-e927-433a-b408-d035c11c31c5'},
{from: '0ae0907a-fa63-4ff4-be99-a30345913758', to: 'b2c149c9-3f7b-48ed-acec-b8ed87c4bf04'},
{from: 'a47cbf0c-973a-4b56-9db0-05a49a2d31b7', to: '34408a47-e927-433a-b408-d035c11c31c5'},
{from: 'a7fa2b05-5191-4f6a-84f1-9dc480df1d35', to: '0ae0907a-fa63-4ff4-be99-a30345913758'}
                            ]);