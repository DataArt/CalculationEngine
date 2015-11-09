var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd47cbc89-6a62-4913-8adf-3b46d1e972b9', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: d47cbc89-6a62-4913-8adf-3b46d1e972b9<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '76986f48-0814-49d3-a14b-df5b6c0bc18e', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 76986f48-0814-49d3-a14b-df5b6c0bc18e<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '04763f47-f965-4f03-a883-bacf9112a334', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 04763f47-f965-4f03-a883-bacf9112a334<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: 'bf59db3c-2a5c-4376-a74f-2835d51ce082', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: bf59db3c-2a5c-4376-a74f-2835d51ce082<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '0625ce8a-6854-4f66-8103-6c5ea1f88dbe', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 0625ce8a-6854-4f66-8103-6c5ea1f88dbe<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '84155ec1-6a02-4257-ac8d-8a054bcaf130', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 84155ec1-6a02-4257-ac8d-8a054bcaf130<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '52546212-27f8-472e-9c72-638b89171bf1', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 52546212-27f8-472e-9c72-638b89171bf1<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '44d19633-9af7-4b51-9781-d76dabe2b4d4', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 44d19633-9af7-4b51-9781-d76dabe2b4d4<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '76986f48-0814-49d3-a14b-df5b6c0bc18e', to: '04763f47-f965-4f03-a883-bacf9112a334'},
{from: '84155ec1-6a02-4257-ac8d-8a054bcaf130', to: '52546212-27f8-472e-9c72-638b89171bf1'},
{from: '44d19633-9af7-4b51-9781-d76dabe2b4d4', to: '04763f47-f965-4f03-a883-bacf9112a334'},
{from: '0625ce8a-6854-4f66-8103-6c5ea1f88dbe', to: '52546212-27f8-472e-9c72-638b89171bf1'},
{from: '52546212-27f8-472e-9c72-638b89171bf1', to: 'bf59db3c-2a5c-4376-a74f-2835d51ce082'},
{from: '04763f47-f965-4f03-a883-bacf9112a334', to: 'd47cbc89-6a62-4913-8adf-3b46d1e972b9'}
                            ]);