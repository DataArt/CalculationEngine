var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5f66d089-676d-4ddb-ba3a-cb57e5d87e8c', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 5f66d089-676d-4ddb-ba3a-cb57e5d87e8c<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: '00887751-ba7a-45d8-932a-8520e084f61a', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 00887751-ba7a-45d8-932a-8520e084f61a<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: 'e746c0da-82d8-4e5e-9ecc-8d043bbf551a', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: e746c0da-82d8-4e5e-9ecc-8d043bbf551a<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: '8969b90f-bdb0-43a4-b394-5aaef643e658', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 8969b90f-bdb0-43a4-b394-5aaef643e658<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5f66d089-676d-4ddb-ba3a-cb57e5d87e8c', to: '8969b90f-bdb0-43a4-b394-5aaef643e658'},
{from: 'e746c0da-82d8-4e5e-9ecc-8d043bbf551a', to: '5f66d089-676d-4ddb-ba3a-cb57e5d87e8c'},
{from: '00887751-ba7a-45d8-932a-8520e084f61a', to: '5f66d089-676d-4ddb-ba3a-cb57e5d87e8c'}
                            ]);