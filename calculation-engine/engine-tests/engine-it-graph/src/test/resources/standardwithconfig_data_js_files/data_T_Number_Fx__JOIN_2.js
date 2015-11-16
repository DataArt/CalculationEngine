var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ce83f7ea-aa77-4ba0-a6e0-ee1caea5a78c', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: ce83f7ea-aa77-4ba0-a6e0-ee1caea5a78c<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: 'd2b6c1fa-3206-46cb-882e-a6e5d7350818', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: d2b6c1fa-3206-46cb-882e-a6e5d7350818<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: '93c3adba-9a10-4648-a3bf-0c688484e881', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 93c3adba-9a10-4648-a3bf-0c688484e881<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: 'aa0ad688-b43e-4bf3-95dd-b800eae2e9e6', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: aa0ad688-b43e-4bf3-95dd-b800eae2e9e6<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: 'b48bfb8a-62ce-44db-97ee-1c92f977aa25', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: b48bfb8a-62ce-44db-97ee-1c92f977aa25<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: '1c014fc0-95da-4da8-b5da-1b600645acd1', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 1c014fc0-95da-4da8-b5da-1b600645acd1<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: 'afee6a09-94d7-407a-9781-59273d6936f1', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: afee6a09-94d7-407a-9781-59273d6936f1<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: '8ec78868-ae49-472d-bd7b-7a3ec016face', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 8ec78868-ae49-472d-bd7b-7a3ec016face<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'},
{id: 'dbc9ea4c-24d3-41d6-8104-352ae64f2cfb', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: dbc9ea4c-24d3-41d6-8104-352ae64f2cfb<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@147efd9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1c014fc0-95da-4da8-b5da-1b600645acd1', to: 'd2b6c1fa-3206-46cb-882e-a6e5d7350818'},
{from: 'b48bfb8a-62ce-44db-97ee-1c92f977aa25', to: 'ce83f7ea-aa77-4ba0-a6e0-ee1caea5a78c'},
{from: '93c3adba-9a10-4648-a3bf-0c688484e881', to: 'aa0ad688-b43e-4bf3-95dd-b800eae2e9e6'},
{from: 'aa0ad688-b43e-4bf3-95dd-b800eae2e9e6', to: 'b48bfb8a-62ce-44db-97ee-1c92f977aa25'},
{from: 'dbc9ea4c-24d3-41d6-8104-352ae64f2cfb', to: '1c014fc0-95da-4da8-b5da-1b600645acd1'},
{from: 'afee6a09-94d7-407a-9781-59273d6936f1', to: 'aa0ad688-b43e-4bf3-95dd-b800eae2e9e6'},
{from: '8ec78868-ae49-472d-bd7b-7a3ec016face', to: 'b48bfb8a-62ce-44db-97ee-1c92f977aa25'}
                            ]);