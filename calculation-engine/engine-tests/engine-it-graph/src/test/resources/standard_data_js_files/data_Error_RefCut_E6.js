var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '492c80b9-a1e8-4797-a491-e87ee6260ec5', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 492c80b9-a1e8-4797-a491-e87ee6260ec5<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1bc715b8'},
{id: '325cc884-097a-4589-ba8f-f8645c85bb5e', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 325cc884-097a-4589-ba8f-f8645c85bb5e<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1bc715b8'},
{id: '65ab5582-5d7c-4b42-b79e-b8fa4c3c2d4a', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 65ab5582-5d7c-4b42-b79e-b8fa4c3c2d4a<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1bc715b8'},
{id: '451c775f-2829-4f20-87e2-aa0f6abd1012', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #REF!<br>Type: FUNCTION<br>Id: 451c775f-2829-4f20-87e2-aa0f6abd1012<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1bc715b8'},
{id: '883ab7a8-4b80-438e-afbb-b3df0333a26e', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 883ab7a8-4b80-438e-afbb-b3df0333a26e<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1bc715b8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '451c775f-2829-4f20-87e2-aa0f6abd1012', to: '65ab5582-5d7c-4b42-b79e-b8fa4c3c2d4a'},
{from: '492c80b9-a1e8-4797-a491-e87ee6260ec5', to: '451c775f-2829-4f20-87e2-aa0f6abd1012'},
{from: '883ab7a8-4b80-438e-afbb-b3df0333a26e', to: '451c775f-2829-4f20-87e2-aa0f6abd1012'},
{from: '325cc884-097a-4589-ba8f-f8645c85bb5e', to: '451c775f-2829-4f20-87e2-aa0f6abd1012'}
                            ]);