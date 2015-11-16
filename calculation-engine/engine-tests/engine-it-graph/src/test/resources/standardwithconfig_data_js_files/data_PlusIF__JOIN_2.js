var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b0e7050a-01d8-4b6f-b851-63e3e8a397d1', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: b0e7050a-01d8-4b6f-b851-63e3e8a397d1<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: 'e088f74d-e896-4ef9-8d2c-f4b14003ab64', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: e088f74d-e896-4ef9-8d2c-f4b14003ab64<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: '4530be30-b4e3-46df-bdb1-54200b32e80e', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 4530be30-b4e3-46df-bdb1-54200b32e80e<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: '6cdf7edf-aa36-4e13-98ff-3f643f635569', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 6cdf7edf-aa36-4e13-98ff-3f643f635569<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: '82e81963-debd-4d6c-901c-e541c499b43d', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 82e81963-debd-4d6c-901c-e541c499b43d<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: 'b6b008ff-a70d-4d52-9947-c23c4fe5d8b5', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: b6b008ff-a70d-4d52-9947-c23c4fe5d8b5<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'},
{id: 'bf449bcc-8d97-4d69-8466-19e0b14a9db9', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: bf449bcc-8d97-4d69-8466-19e0b14a9db9<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35563e4c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4530be30-b4e3-46df-bdb1-54200b32e80e', to: 'e088f74d-e896-4ef9-8d2c-f4b14003ab64'},
{from: 'e088f74d-e896-4ef9-8d2c-f4b14003ab64', to: '82e81963-debd-4d6c-901c-e541c499b43d'},
{from: 'bf449bcc-8d97-4d69-8466-19e0b14a9db9', to: '6cdf7edf-aa36-4e13-98ff-3f643f635569'},
{from: '6cdf7edf-aa36-4e13-98ff-3f643f635569', to: 'e088f74d-e896-4ef9-8d2c-f4b14003ab64'},
{from: 'b0e7050a-01d8-4b6f-b851-63e3e8a397d1', to: '6cdf7edf-aa36-4e13-98ff-3f643f635569'},
{from: '82e81963-debd-4d6c-901c-e541c499b43d', to: 'b6b008ff-a70d-4d52-9947-c23c4fe5d8b5'}
                            ]);