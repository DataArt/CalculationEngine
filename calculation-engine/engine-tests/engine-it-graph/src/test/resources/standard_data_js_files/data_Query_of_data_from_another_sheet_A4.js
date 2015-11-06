var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1e15159b-1ca5-4368-b655-850ee4d7bd78', label: '+\n110.0', color: '#f0ad4e', title: 'Name: +<br>Value: 110.0<br>Type: OPERATOR<br>Id: 1e15159b-1ca5-4368-b655-850ee4d7bd78<br>Formula Expression: Formula String: A1 + $C$1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'},
{id: 'dfafc546-3061-4e9b-ab74-4bf1aeada764', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: dfafc546-3061-4e9b-ab74-4bf1aeada764<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'},
{id: 'effb40a8-0df2-40e4-bde0-cb0550416f08', label: 'Sheet2!$B$1\n85.0', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Value: 85.0<br>Type: CELL_WITH_VALUE<br>Id: effb40a8-0df2-40e4-bde0-cb0550416f08<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: 85.0; Formula Ptg: 85.0; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'},
{id: '970c9e7e-a02b-4d59-9354-521829f8c36c', label: '$C$1\n5.0', color: '#31b0d5', title: 'Name: $C$1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 970c9e7e-a02b-4d59-9354-521829f8c36c<br>Formula Expression: Formula String: $C$1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: $C$1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'},
{id: 'a0983547-091d-454f-92e6-0f0b07dfd40a', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Value: 25.0<br>Type: OPERATOR<br>Id: a0983547-091d-454f-92e6-0f0b07dfd40a<br>Formula Expression: Formula String: A1 + $C$1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'},
{id: '84aa52a2-83e8-4316-8930-f56b2d46dc16', label: 'A4\n110.0', color: '#31b0d5', title: 'Name: A4<br>Value: 110.0<br>Type: CELL_WITH_FORMULA<br>Id: 84aa52a2-83e8-4316-8930-f56b2d46dc16<br>Formula Expression: Formula String: A1 + $C$1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: 20.0 5.0 + 85.0 +; Ptgs: A1 $C$1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d72f75e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dfafc546-3061-4e9b-ab74-4bf1aeada764', to: 'a0983547-091d-454f-92e6-0f0b07dfd40a'},
{from: '970c9e7e-a02b-4d59-9354-521829f8c36c', to: 'a0983547-091d-454f-92e6-0f0b07dfd40a'},
{from: 'a0983547-091d-454f-92e6-0f0b07dfd40a', to: '1e15159b-1ca5-4368-b655-850ee4d7bd78'},
{from: '1e15159b-1ca5-4368-b655-850ee4d7bd78', to: '84aa52a2-83e8-4316-8930-f56b2d46dc16'},
{from: 'effb40a8-0df2-40e4-bde0-cb0550416f08', to: '1e15159b-1ca5-4368-b655-850ee4d7bd78'}
                            ]);