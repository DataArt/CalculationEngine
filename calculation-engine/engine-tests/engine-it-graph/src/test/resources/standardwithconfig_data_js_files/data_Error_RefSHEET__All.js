var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '57d695f6-5965-45f9-ba45-d8008075aad1', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 57d695f6-5965-45f9-ba45-d8008075aad1<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d268a2c'},
{id: '31ad89c3-712d-4b2c-ab48-9d88124ed122', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 31ad89c3-712d-4b2c-ab48-9d88124ed122<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d268a2c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '57d695f6-5965-45f9-ba45-d8008075aad1', to: '31ad89c3-712d-4b2c-ab48-9d88124ed122'}
                            ]);