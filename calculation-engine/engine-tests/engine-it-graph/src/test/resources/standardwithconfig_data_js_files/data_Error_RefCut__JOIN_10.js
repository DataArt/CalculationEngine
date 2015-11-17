var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ff7181bb-9797-4f5c-8a28-6e9248e2b882', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: ff7181bb-9797-4f5c-8a28-6e9248e2b882<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: 'bb48bd1e-1a69-4758-ba3e-d79d30752ab7', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: bb48bd1e-1a69-4758-ba3e-d79d30752ab7<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: '5bf78723-545d-4dcf-9537-e7cc535c10d0', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 5bf78723-545d-4dcf-9537-e7cc535c10d0<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: 'a4a00b0f-1920-4da3-83bc-4415a57d7495', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: a4a00b0f-1920-4da3-83bc-4415a57d7495<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'},
{id: '3321dbf2-6180-4fd3-9efd-6026a236e188', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 3321dbf2-6180-4fd3-9efd-6026a236e188<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4850d66b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a4a00b0f-1920-4da3-83bc-4415a57d7495', to: '3321dbf2-6180-4fd3-9efd-6026a236e188'},
{from: 'ff7181bb-9797-4f5c-8a28-6e9248e2b882', to: '3321dbf2-6180-4fd3-9efd-6026a236e188'},
{from: '5bf78723-545d-4dcf-9537-e7cc535c10d0', to: '3321dbf2-6180-4fd3-9efd-6026a236e188'},
{from: '3321dbf2-6180-4fd3-9efd-6026a236e188', to: 'bb48bd1e-1a69-4758-ba3e-d79d30752ab7'}
                            ]);