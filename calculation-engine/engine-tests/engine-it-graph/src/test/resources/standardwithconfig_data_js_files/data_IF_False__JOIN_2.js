var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4fe4ae4d-3516-41f5-b8de-e779bf8a8bab', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 4fe4ae4d-3516-41f5-b8de-e779bf8a8bab<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'},
{id: '44f1a141-be51-42d2-a0f0-f4cdba22bf18', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 44f1a141-be51-42d2-a0f0-f4cdba22bf18<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'},
{id: '15599c35-052e-45c3-9f44-34bdfe97e475', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 15599c35-052e-45c3-9f44-34bdfe97e475<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'},
{id: 'eb4fe44d-ddac-42a7-adc7-c2c3906566f8', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: eb4fe44d-ddac-42a7-adc7-c2c3906566f8<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'},
{id: '1cce922c-1d58-4c43-b35b-924427bfbf4b', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1cce922c-1d58-4c43-b35b-924427bfbf4b<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'},
{id: 'e13d6787-29de-427b-85c3-6117d7003963', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: e13d6787-29de-427b-85c3-6117d7003963<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2eb0cefe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'eb4fe44d-ddac-42a7-adc7-c2c3906566f8', to: '4fe4ae4d-3516-41f5-b8de-e779bf8a8bab'},
{from: '1cce922c-1d58-4c43-b35b-924427bfbf4b', to: '4fe4ae4d-3516-41f5-b8de-e779bf8a8bab'},
{from: 'e13d6787-29de-427b-85c3-6117d7003963', to: '44f1a141-be51-42d2-a0f0-f4cdba22bf18'},
{from: '44f1a141-be51-42d2-a0f0-f4cdba22bf18', to: '15599c35-052e-45c3-9f44-34bdfe97e475'},
{from: '4fe4ae4d-3516-41f5-b8de-e779bf8a8bab', to: '44f1a141-be51-42d2-a0f0-f4cdba22bf18'}
                            ]);