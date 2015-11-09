var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '80e89be3-06b9-4b32-872e-675cbf05c2e2', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 80e89be3-06b9-4b32-872e-675cbf05c2e2<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'f0050015-7426-4625-815e-b12c4aa69c33', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: f0050015-7426-4625-815e-b12c4aa69c33<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'af44fa88-fc04-4510-ab3c-8040b1dfa7a7', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: af44fa88-fc04-4510-ab3c-8040b1dfa7a7<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'e1be72c0-b65a-4ff9-b781-6f7ef452540d', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: e1be72c0-b65a-4ff9-b781-6f7ef452540d<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '33fa5063-2d0d-4afd-819c-608b89fc9cce', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 33fa5063-2d0d-4afd-819c-608b89fc9cce<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '99086122-5e60-46ee-a8ea-987876acf37e', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 99086122-5e60-46ee-a8ea-987876acf37e<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'c968a67a-8ea9-4948-8162-e9cb31d2d109', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: c968a67a-8ea9-4948-8162-e9cb31d2d109<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'e2b79450-abf7-43c4-b73e-4d99a70cdf66', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: e2b79450-abf7-43c4-b73e-4d99a70cdf66<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'af44fa88-fc04-4510-ab3c-8040b1dfa7a7', to: 'f0050015-7426-4625-815e-b12c4aa69c33'},
{from: '80e89be3-06b9-4b32-872e-675cbf05c2e2', to: 'e2b79450-abf7-43c4-b73e-4d99a70cdf66'},
{from: 'e1be72c0-b65a-4ff9-b781-6f7ef452540d', to: 'c968a67a-8ea9-4948-8162-e9cb31d2d109'},
{from: 'f0050015-7426-4625-815e-b12c4aa69c33', to: 'e2b79450-abf7-43c4-b73e-4d99a70cdf66'},
{from: 'e2b79450-abf7-43c4-b73e-4d99a70cdf66', to: 'c968a67a-8ea9-4948-8162-e9cb31d2d109'},
{from: 'c968a67a-8ea9-4948-8162-e9cb31d2d109', to: '99086122-5e60-46ee-a8ea-987876acf37e'},
{from: '33fa5063-2d0d-4afd-819c-608b89fc9cce', to: 'f0050015-7426-4625-815e-b12c4aa69c33'}
                            ]);