var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e264ed30-a199-4395-8a38-13976fea79fc', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: e264ed30-a199-4395-8a38-13976fea79fc<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6010d0d1'},
{id: '3ee1c4a3-876f-43f4-86e4-ed6f6c596fbf', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 3ee1c4a3-876f-43f4-86e4-ed6f6c596fbf<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6010d0d1'},
{id: '9be34ebd-c60c-4693-830f-e6ac3aca058b', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 9be34ebd-c60c-4693-830f-e6ac3aca058b<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6010d0d1'},
{id: 'dfc6d921-beac-4854-9649-8eb8e6ba289d', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: dfc6d921-beac-4854-9649-8eb8e6ba289d<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6010d0d1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9be34ebd-c60c-4693-830f-e6ac3aca058b', to: '3ee1c4a3-876f-43f4-86e4-ed6f6c596fbf'},
{from: 'dfc6d921-beac-4854-9649-8eb8e6ba289d', to: '3ee1c4a3-876f-43f4-86e4-ed6f6c596fbf'},
{from: '3ee1c4a3-876f-43f4-86e4-ed6f6c596fbf', to: 'e264ed30-a199-4395-8a38-13976fea79fc'}
                            ]);