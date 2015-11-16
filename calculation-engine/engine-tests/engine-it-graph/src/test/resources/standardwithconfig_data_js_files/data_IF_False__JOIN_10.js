var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b550eb74-327e-4a81-bbc5-6724f9342602', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: b550eb74-327e-4a81-bbc5-6724f9342602<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: 'aaf6835d-8a35-4f3c-a877-abae37a1e09e', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: aaf6835d-8a35-4f3c-a877-abae37a1e09e<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: 'a6403c50-5255-45b0-b484-9f13104115b6', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: a6403c50-5255-45b0-b484-9f13104115b6<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: '129277d8-1cfc-473a-bb4e-7e13750995eb', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 129277d8-1cfc-473a-bb4e-7e13750995eb<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: '3d663033-103f-420c-994e-693d007320e3', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 3d663033-103f-420c-994e-693d007320e3<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'},
{id: '9ddc2b03-e658-4ddf-8a81-9c2e0450eb20', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 9ddc2b03-e658-4ddf-8a81-9c2e0450eb20<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@259c6ab8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9ddc2b03-e658-4ddf-8a81-9c2e0450eb20', to: 'aaf6835d-8a35-4f3c-a877-abae37a1e09e'},
{from: '129277d8-1cfc-473a-bb4e-7e13750995eb', to: 'b550eb74-327e-4a81-bbc5-6724f9342602'},
{from: '3d663033-103f-420c-994e-693d007320e3', to: '9ddc2b03-e658-4ddf-8a81-9c2e0450eb20'},
{from: 'a6403c50-5255-45b0-b484-9f13104115b6', to: 'b550eb74-327e-4a81-bbc5-6724f9342602'},
{from: 'b550eb74-327e-4a81-bbc5-6724f9342602', to: '9ddc2b03-e658-4ddf-8a81-9c2e0450eb20'}
                            ]);