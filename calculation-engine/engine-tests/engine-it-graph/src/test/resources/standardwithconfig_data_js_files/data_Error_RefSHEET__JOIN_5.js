var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ffa670a9-b514-4666-b917-3d8a6e01af29', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: ffa670a9-b514-4666-b917-3d8a6e01af29<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af22a6'},
{id: '63e90b9e-2678-49de-9f84-f1161fab573f', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 63e90b9e-2678-49de-9f84-f1161fab573f<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af22a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ffa670a9-b514-4666-b917-3d8a6e01af29', to: '63e90b9e-2678-49de-9f84-f1161fab573f'}
                            ]);