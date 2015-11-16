var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a302d424-e3bc-4d5d-9792-350f877da449', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: a302d424-e3bc-4d5d-9792-350f877da449<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: '8aa9865b-fa2e-4c18-bf34-89ed74715e8e', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 8aa9865b-fa2e-4c18-bf34-89ed74715e8e<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: 'c7cdb6e9-a032-4feb-91b6-6d9c0efb5a74', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: c7cdb6e9-a032-4feb-91b6-6d9c0efb5a74<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: 'e4ced429-208f-4a2e-9988-62a29018fb31', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: e4ced429-208f-4a2e-9988-62a29018fb31<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e4ced429-208f-4a2e-9988-62a29018fb31', to: 'c7cdb6e9-a032-4feb-91b6-6d9c0efb5a74'},
{from: 'c7cdb6e9-a032-4feb-91b6-6d9c0efb5a74', to: 'a302d424-e3bc-4d5d-9792-350f877da449'},
{from: '8aa9865b-fa2e-4c18-bf34-89ed74715e8e', to: 'c7cdb6e9-a032-4feb-91b6-6d9c0efb5a74'}
                            ]);