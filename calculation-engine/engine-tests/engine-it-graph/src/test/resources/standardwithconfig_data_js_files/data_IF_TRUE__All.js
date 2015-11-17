var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '376762b8-5e53-48d9-bdad-8e618d4f2a5f', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 376762b8-5e53-48d9-bdad-8e618d4f2a5f<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '74ffee2e-9e79-48bf-8bba-3eae2eb65147', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 74ffee2e-9e79-48bf-8bba-3eae2eb65147<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '4c62e13e-75d1-4a2a-b9d6-15b14ac5047a', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 4c62e13e-75d1-4a2a-b9d6-15b14ac5047a<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '4f843f61-0d7d-4737-8240-03d51c079fc1', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 4f843f61-0d7d-4737-8240-03d51c079fc1<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '6fb98362-1113-4e95-8f00-8c937368ca64', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 6fb98362-1113-4e95-8f00-8c937368ca64<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '342ed1f3-0316-435c-80af-fcc87824d88f', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 342ed1f3-0316-435c-80af-fcc87824d88f<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '342ed1f3-0316-435c-80af-fcc87824d88f', to: '74ffee2e-9e79-48bf-8bba-3eae2eb65147'},
{from: '74ffee2e-9e79-48bf-8bba-3eae2eb65147', to: '4c62e13e-75d1-4a2a-b9d6-15b14ac5047a'},
{from: '6fb98362-1113-4e95-8f00-8c937368ca64', to: '74ffee2e-9e79-48bf-8bba-3eae2eb65147'},
{from: '4f843f61-0d7d-4737-8240-03d51c079fc1', to: '6fb98362-1113-4e95-8f00-8c937368ca64'},
{from: '376762b8-5e53-48d9-bdad-8e618d4f2a5f', to: '6fb98362-1113-4e95-8f00-8c937368ca64'}
                            ]);