var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '99639d29-3e66-4c9a-b062-a94c37237602', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 99639d29-3e66-4c9a-b062-a94c37237602<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: 'e75921dc-c347-4493-9a0c-55c3dc494b51', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: e75921dc-c347-4493-9a0c-55c3dc494b51<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: 'e08e7433-3127-4aa6-9c64-0fc24c3f34ac', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: e08e7433-3127-4aa6-9c64-0fc24c3f34ac<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: '9596c908-6b5f-4f36-9420-4d6da7b8397d', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 9596c908-6b5f-4f36-9420-4d6da7b8397d<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'},
{id: 'f9984ebd-9565-4ccf-a7a4-fba27254b22a', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: f9984ebd-9565-4ccf-a7a4-fba27254b22a<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@232cce0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '99639d29-3e66-4c9a-b062-a94c37237602', to: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48'},
{from: 'e08e7433-3127-4aa6-9c64-0fc24c3f34ac', to: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48'},
{from: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48', to: '9596c908-6b5f-4f36-9420-4d6da7b8397d'},
{from: 'f9984ebd-9565-4ccf-a7a4-fba27254b22a', to: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48'},
{from: 'e75921dc-c347-4493-9a0c-55c3dc494b51', to: '3ba2a4e9-18ac-4a5b-99fe-cc30a10d5a48'}
                            ]);