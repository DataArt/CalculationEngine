var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '44edc932-ee9f-4a8b-bff0-a0b3d0eae3bd', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 44edc932-ee9f-4a8b-bff0-a0b3d0eae3bd<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: 'fb9a25f2-7ec2-4a90-96ae-5c8fa30979be', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: fb9a25f2-7ec2-4a90-96ae-5c8fa30979be<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: 'b8de0673-4588-4bd9-a495-c608b3df31cc', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: b8de0673-4588-4bd9-a495-c608b3df31cc<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: 'c2dfd3dc-7e46-4b5e-87d9-990189718194', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: c2dfd3dc-7e46-4b5e-87d9-990189718194<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: '57d3261c-77ec-4cb5-b976-b18c4216e6fa', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 57d3261c-77ec-4cb5-b976-b18c4216e6fa<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: '50ff79fc-d313-4e53-9cc4-9c1e9820391d', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 50ff79fc-d313-4e53-9cc4-9c1e9820391d<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '50ff79fc-d313-4e53-9cc4-9c1e9820391d', to: 'fb9a25f2-7ec2-4a90-96ae-5c8fa30979be'},
{from: 'c2dfd3dc-7e46-4b5e-87d9-990189718194', to: '44edc932-ee9f-4a8b-bff0-a0b3d0eae3bd'},
{from: '57d3261c-77ec-4cb5-b976-b18c4216e6fa', to: '50ff79fc-d313-4e53-9cc4-9c1e9820391d'},
{from: 'b8de0673-4588-4bd9-a495-c608b3df31cc', to: '44edc932-ee9f-4a8b-bff0-a0b3d0eae3bd'},
{from: '44edc932-ee9f-4a8b-bff0-a0b3d0eae3bd', to: '50ff79fc-d313-4e53-9cc4-9c1e9820391d'}
                            ]);