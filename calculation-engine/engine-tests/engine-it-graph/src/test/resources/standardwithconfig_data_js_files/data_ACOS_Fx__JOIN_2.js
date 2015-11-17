var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '97c4858b-628f-429d-ad33-3bc8cff956a0', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 97c4858b-628f-429d-ad33-3bc8cff956a0<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'},
{id: '4aef8824-7b40-4fc3-b023-4dd63f70e8d4', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 4aef8824-7b40-4fc3-b023-4dd63f70e8d4<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'},
{id: 'c350bbc5-868a-4d0b-a69c-5b0bc5cc9c13', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: c350bbc5-868a-4d0b-a69c-5b0bc5cc9c13<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58b91d57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4aef8824-7b40-4fc3-b023-4dd63f70e8d4', to: 'c350bbc5-868a-4d0b-a69c-5b0bc5cc9c13'},
{from: 'c350bbc5-868a-4d0b-a69c-5b0bc5cc9c13', to: '97c4858b-628f-429d-ad33-3bc8cff956a0'}
                            ]);