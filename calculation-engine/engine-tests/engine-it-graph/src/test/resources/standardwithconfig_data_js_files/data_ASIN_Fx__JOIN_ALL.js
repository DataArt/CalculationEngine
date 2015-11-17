var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bd4f8b63-d32a-4834-a3a7-a59f669735ef', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: bd4f8b63-d32a-4834-a3a7-a59f669735ef<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: 'e6682d14-b255-47e8-96ee-17546475ebfd', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: e6682d14-b255-47e8-96ee-17546475ebfd<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: 'b3d5c39c-4afe-461d-bfe0-e1e2f2085246', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: b3d5c39c-4afe-461d-bfe0-e1e2f2085246<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '8a73e1ce-7e96-4c7a-8c50-c67067a44a87', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 8a73e1ce-7e96-4c7a-8c50-c67067a44a87<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '1cb9664c-0a46-41e1-b1e2-a1e1b5f3fee9', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1cb9664c-0a46-41e1-b1e2-a1e1b5f3fee9<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'},
{id: '2f69d1c5-579e-451a-abad-627e6ded695f', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 2f69d1c5-579e-451a-abad-627e6ded695f<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4803b726'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f69d1c5-579e-451a-abad-627e6ded695f', to: 'bd4f8b63-d32a-4834-a3a7-a59f669735ef'},
{from: 'b3d5c39c-4afe-461d-bfe0-e1e2f2085246', to: '8a73e1ce-7e96-4c7a-8c50-c67067a44a87'},
{from: '1cb9664c-0a46-41e1-b1e2-a1e1b5f3fee9', to: '2f69d1c5-579e-451a-abad-627e6ded695f'},
{from: '8a73e1ce-7e96-4c7a-8c50-c67067a44a87', to: 'e6682d14-b255-47e8-96ee-17546475ebfd'}
                            ]);