var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '22e17a14-1956-4778-a7c0-69287336edc9', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 22e17a14-1956-4778-a7c0-69287336edc9<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: '51ef06a2-5de2-4400-8a54-067846bacd64', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 51ef06a2-5de2-4400-8a54-067846bacd64<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: '441de6b6-aa4a-4ac1-8a04-466c8ab13f9a', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 441de6b6-aa4a-4ac1-8a04-466c8ab13f9a<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: '822d8681-005a-4ea9-94c9-59e4fad3c29e', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: 822d8681-005a-4ea9-94c9-59e4fad3c29e<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '441de6b6-aa4a-4ac1-8a04-466c8ab13f9a', to: '822d8681-005a-4ea9-94c9-59e4fad3c29e'},
{from: '22e17a14-1956-4778-a7c0-69287336edc9', to: '51ef06a2-5de2-4400-8a54-067846bacd64'}
                            ]);