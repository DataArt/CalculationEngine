var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '044eaaf2-55a8-4680-9568-4a851be41f1a', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 044eaaf2-55a8-4680-9568-4a851be41f1a<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '624cc5cc-5631-4b9d-8b40-134b205de011', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 624cc5cc-5631-4b9d-8b40-134b205de011<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: 'ae7a5e25-3dee-4cd0-a6b5-fe968d486eb3', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: ae7a5e25-3dee-4cd0-a6b5-fe968d486eb3<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: 'c39c4a08-ea74-461d-a34f-f08b461fb9ff', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: c39c4a08-ea74-461d-a34f-f08b461fb9ff<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '5590c47e-17f0-4db7-ad8d-a7b29891268e', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 5590c47e-17f0-4db7-ad8d-a7b29891268e<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: 'c1a823cc-0426-4cf0-a9db-059eca96afa6', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: c1a823cc-0426-4cf0-a9db-059eca96afa6<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '624cc5cc-5631-4b9d-8b40-134b205de011', to: 'c39c4a08-ea74-461d-a34f-f08b461fb9ff'},
{from: '5590c47e-17f0-4db7-ad8d-a7b29891268e', to: 'c39c4a08-ea74-461d-a34f-f08b461fb9ff'},
{from: 'c39c4a08-ea74-461d-a34f-f08b461fb9ff', to: '044eaaf2-55a8-4680-9568-4a851be41f1a'},
{from: 'c1a823cc-0426-4cf0-a9db-059eca96afa6', to: '044eaaf2-55a8-4680-9568-4a851be41f1a'},
{from: '044eaaf2-55a8-4680-9568-4a851be41f1a', to: 'ae7a5e25-3dee-4cd0-a6b5-fe968d486eb3'}
                            ]);