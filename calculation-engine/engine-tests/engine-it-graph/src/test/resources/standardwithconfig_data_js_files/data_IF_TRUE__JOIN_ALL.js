var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '98810d6e-3d4b-47c6-b1dc-7f408e9385e9', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 98810d6e-3d4b-47c6-b1dc-7f408e9385e9<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '7e15f35b-bb5a-4179-bc52-311f12966af5', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 7e15f35b-bb5a-4179-bc52-311f12966af5<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '8a45eb2e-7dc7-4b04-b82b-92f24a47e81b', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 8a45eb2e-7dc7-4b04-b82b-92f24a47e81b<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '2bf38cfe-4b7c-47e2-8bc8-35c2d30153b5', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 2bf38cfe-4b7c-47e2-8bc8-35c2d30153b5<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: 'd001af84-1b42-4dda-9c1a-6e97beb52bee', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: d001af84-1b42-4dda-9c1a-6e97beb52bee<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '67f85aed-7d22-4b1f-8f7c-2154a86bb77b', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 67f85aed-7d22-4b1f-8f7c-2154a86bb77b<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67f85aed-7d22-4b1f-8f7c-2154a86bb77b', to: '2bf38cfe-4b7c-47e2-8bc8-35c2d30153b5'},
{from: '8a45eb2e-7dc7-4b04-b82b-92f24a47e81b', to: '67f85aed-7d22-4b1f-8f7c-2154a86bb77b'},
{from: 'd001af84-1b42-4dda-9c1a-6e97beb52bee', to: '67f85aed-7d22-4b1f-8f7c-2154a86bb77b'},
{from: '7e15f35b-bb5a-4179-bc52-311f12966af5', to: '8a45eb2e-7dc7-4b04-b82b-92f24a47e81b'},
{from: '98810d6e-3d4b-47c6-b1dc-7f408e9385e9', to: '8a45eb2e-7dc7-4b04-b82b-92f24a47e81b'}
                            ]);