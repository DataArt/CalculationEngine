var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fedac96c-efef-4e9c-9616-6fa6a1e35cee', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: fedac96c-efef-4e9c-9616-6fa6a1e35cee<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: '22646a86-3003-4b3d-9ed4-ce72a59f48a9', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 22646a86-3003-4b3d-9ed4-ce72a59f48a9<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'e52a54fd-90aa-4d7f-ac9a-68fa9d243a67', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: e52a54fd-90aa-4d7f-ac9a-68fa9d243a67<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'acdc8775-7986-4920-ad04-411ce8c15b5e', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: acdc8775-7986-4920-ad04-411ce8c15b5e<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'ba286f68-9b8a-4a13-b49c-7a5dd4377a22', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: ba286f68-9b8a-4a13-b49c-7a5dd4377a22<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'e5786ba4-533f-4e7b-9cbc-0cf5dfd9394d', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: e5786ba4-533f-4e7b-9cbc-0cf5dfd9394d<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'acdc8775-7986-4920-ad04-411ce8c15b5e', to: 'e5786ba4-533f-4e7b-9cbc-0cf5dfd9394d'},
{from: 'e5786ba4-533f-4e7b-9cbc-0cf5dfd9394d', to: 'fedac96c-efef-4e9c-9616-6fa6a1e35cee'},
{from: 'ba286f68-9b8a-4a13-b49c-7a5dd4377a22', to: '22646a86-3003-4b3d-9ed4-ce72a59f48a9'},
{from: '22646a86-3003-4b3d-9ed4-ce72a59f48a9', to: 'e52a54fd-90aa-4d7f-ac9a-68fa9d243a67'}
                            ]);