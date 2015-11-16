var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1a1da5fb-3ed6-46b3-a751-9d15af821320', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 1a1da5fb-3ed6-46b3-a751-9d15af821320<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d69a0d3'},
{id: 'ff0aad0e-6624-4107-9b34-63a734ea5949', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: ff0aad0e-6624-4107-9b34-63a734ea5949<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d69a0d3'},
{id: '6667cd03-ae3e-4dbb-a98d-d6812156cc2f', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 6667cd03-ae3e-4dbb-a98d-d6812156cc2f<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d69a0d3'},
{id: 'de3ada1e-1207-4201-8cb5-f1db4ce04a66', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: de3ada1e-1207-4201-8cb5-f1db4ce04a66<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6d69a0d3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6667cd03-ae3e-4dbb-a98d-d6812156cc2f', to: 'ff0aad0e-6624-4107-9b34-63a734ea5949'},
{from: '1a1da5fb-3ed6-46b3-a751-9d15af821320', to: 'de3ada1e-1207-4201-8cb5-f1db4ce04a66'}
                            ]);