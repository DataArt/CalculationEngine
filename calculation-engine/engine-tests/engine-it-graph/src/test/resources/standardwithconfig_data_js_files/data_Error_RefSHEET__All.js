var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1e8a4b01-48fc-4e2e-ba6d-a9c2be3bbfc6', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 1e8a4b01-48fc-4e2e-ba6d-a9c2be3bbfc6<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d268a2c'},
{id: 'e7383b4f-e40e-4a18-9167-d93e10e96f1c', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: e7383b4f-e40e-4a18-9167-d93e10e96f1c<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d268a2c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1e8a4b01-48fc-4e2e-ba6d-a9c2be3bbfc6', to: 'e7383b4f-e40e-4a18-9167-d93e10e96f1c'}
                            ]);