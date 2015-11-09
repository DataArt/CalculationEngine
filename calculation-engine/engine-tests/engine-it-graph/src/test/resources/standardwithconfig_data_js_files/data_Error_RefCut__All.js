var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e5462fc4-8e2b-436b-a330-61e90ce07b00', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: e5462fc4-8e2b-436b-a330-61e90ce07b00<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: '56c9c8ec-acda-464e-a004-919f749a1361', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 56c9c8ec-acda-464e-a004-919f749a1361<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: '3571bdea-c861-4fb1-9e77-903e82623a91', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 3571bdea-c861-4fb1-9e77-903e82623a91<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: 'c1592b96-f009-4aae-b2d8-b17428ee4e73', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: c1592b96-f009-4aae-b2d8-b17428ee4e73<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: '92723f4b-db32-4a04-b4de-1519c5b5794c', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 92723f4b-db32-4a04-b4de-1519c5b5794c<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '92723f4b-db32-4a04-b4de-1519c5b5794c', to: 'e5462fc4-8e2b-436b-a330-61e90ce07b00'},
{from: '56c9c8ec-acda-464e-a004-919f749a1361', to: 'e5462fc4-8e2b-436b-a330-61e90ce07b00'},
{from: 'c1592b96-f009-4aae-b2d8-b17428ee4e73', to: 'e5462fc4-8e2b-436b-a330-61e90ce07b00'},
{from: 'e5462fc4-8e2b-436b-a330-61e90ce07b00', to: '3571bdea-c861-4fb1-9e77-903e82623a91'}
                            ]);