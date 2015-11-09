var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7ddbf58a-4dec-4945-9927-36ec200eb8f6', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 7ddbf58a-4dec-4945-9927-36ec200eb8f6<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: why not? T ; Ptgs: C3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '50c51a40-1733-4854-9671-03984d7b87b7', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 50c51a40-1733-4854-9671-03984d7b87b7<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '0094cfe6-db8e-4c9a-b57c-840641f6f777', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 0094cfe6-db8e-4c9a-b57c-840641f6f777<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '1a159b8c-1fe7-49c1-aa79-d91fd0028321', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 1a159b8c-1fe7-49c1-aa79-d91fd0028321<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '63023d8e-50f2-4c23-a187-44e9a7f136ec', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 63023d8e-50f2-4c23-a187-44e9a7f136ec<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '0cec2c2d-eb18-4ac4-8b3a-03da073bb482', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 0cec2c2d-eb18-4ac4-8b3a-03da073bb482<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '3ea5d0c6-b12e-4311-86c1-efa92e6a84c2', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 3ea5d0c6-b12e-4311-86c1-efa92e6a84c2<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: 'c365618e-bb6c-4f6a-8500-5a2e717f2b9e', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Value: why not?<br>Type: FUNCTION<br>Id: c365618e-bb6c-4f6a-8500-5a2e717f2b9e<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: 'fda34245-0fe6-47d2-a1e6-1d45ae6ca4c0', label: 'D6\n', color: '#31b0d5', title: 'Name: D6<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: fda34245-0fe6-47d2-a1e6-1d45ae6ca4c0<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '9352572d-0a83-4815-95d9-c3948a63398a', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 9352572d-0a83-4815-95d9-c3948a63398a<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '816dd25c-9411-45ae-9c55-9fd731c1885f', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 816dd25c-9411-45ae-9c55-9fd731c1885f<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'},
{id: '2bcfda9c-3dd5-4348-aaba-1f785dec888a', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 2bcfda9c-3dd5-4348-aaba-1f785dec888a<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30f454f4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9352572d-0a83-4815-95d9-c3948a63398a', to: '816dd25c-9411-45ae-9c55-9fd731c1885f'},
{from: '3ea5d0c6-b12e-4311-86c1-efa92e6a84c2', to: 'c365618e-bb6c-4f6a-8500-5a2e717f2b9e'},
{from: '1a159b8c-1fe7-49c1-aa79-d91fd0028321', to: '9352572d-0a83-4815-95d9-c3948a63398a'},
{from: '0cec2c2d-eb18-4ac4-8b3a-03da073bb482', to: 'fda34245-0fe6-47d2-a1e6-1d45ae6ca4c0'},
{from: '2bcfda9c-3dd5-4348-aaba-1f785dec888a', to: '9352572d-0a83-4815-95d9-c3948a63398a'},
{from: '816dd25c-9411-45ae-9c55-9fd731c1885f', to: '63023d8e-50f2-4c23-a187-44e9a7f136ec'},
{from: 'c365618e-bb6c-4f6a-8500-5a2e717f2b9e', to: '7ddbf58a-4dec-4945-9927-36ec200eb8f6'},
{from: '50c51a40-1733-4854-9671-03984d7b87b7', to: '816dd25c-9411-45ae-9c55-9fd731c1885f'},
{from: '0094cfe6-db8e-4c9a-b57c-840641f6f777', to: '0cec2c2d-eb18-4ac4-8b3a-03da073bb482'}
                            ]);