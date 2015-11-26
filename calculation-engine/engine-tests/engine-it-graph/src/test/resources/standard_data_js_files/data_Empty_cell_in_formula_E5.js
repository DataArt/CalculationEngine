var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c71b28ab-94bb-4fbb-8862-5471f4ec47ae', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: c71b28ab-94bb-4fbb-8862-5471f4ec47ae<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: 'e8d29829-1ea3-4703-932f-0f3f0932f81f', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: e8d29829-1ea3-4703-932f-0f3f0932f81f<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: 'd93af39e-7360-428b-a6d6-d0e107896ad1', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: d93af39e-7360-428b-a6d6-d0e107896ad1<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: '90a63363-0320-4c97-b37c-4fd5de649d46', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 90a63363-0320-4c97-b37c-4fd5de649d46<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: 'eaf4f923-0945-4b0a-8c01-a0771e40a91d', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: eaf4f923-0945-4b0a-8c01-a0771e40a91d<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: '8c9ce531-4dd1-45dc-9506-4d8098f08a74', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 8c9ce531-4dd1-45dc-9506-4d8098f08a74<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: 'd9488343-d1a6-410d-ae90-ce442370a381', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: d9488343-d1a6-410d-ae90-ce442370a381<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'},
{id: '7fb25954-5e76-48da-9a1f-c18e29e2993e', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 7fb25954-5e76-48da-9a1f-c18e29e2993e<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1af146'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '90a63363-0320-4c97-b37c-4fd5de649d46', to: '7fb25954-5e76-48da-9a1f-c18e29e2993e'},
{from: 'e8d29829-1ea3-4703-932f-0f3f0932f81f', to: 'd93af39e-7360-428b-a6d6-d0e107896ad1'},
{from: 'eaf4f923-0945-4b0a-8c01-a0771e40a91d', to: 'd93af39e-7360-428b-a6d6-d0e107896ad1'},
{from: 'd9488343-d1a6-410d-ae90-ce442370a381', to: 'c71b28ab-94bb-4fbb-8862-5471f4ec47ae'},
{from: 'c71b28ab-94bb-4fbb-8862-5471f4ec47ae', to: '90a63363-0320-4c97-b37c-4fd5de649d46'},
{from: 'd93af39e-7360-428b-a6d6-d0e107896ad1', to: 'c71b28ab-94bb-4fbb-8862-5471f4ec47ae'},
{from: '8c9ce531-4dd1-45dc-9506-4d8098f08a74', to: '90a63363-0320-4c97-b37c-4fd5de649d46'}
                            ]);