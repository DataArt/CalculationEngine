var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9b4e3eed-922f-4c6f-90a5-f7854cbe8474', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 9b4e3eed-922f-4c6f-90a5-f7854cbe8474<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5438fa43'},
{id: 'c7d4c2ae-6044-4032-ab89-7f781e58119e', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: c7d4c2ae-6044-4032-ab89-7f781e58119e<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5438fa43'},
{id: '6b571642-6ca4-439d-ae83-17b3359d3cfc', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 6b571642-6ca4-439d-ae83-17b3359d3cfc<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5438fa43'},
{id: '6edbbeee-418f-4f45-82f3-f5017eb750cb', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 6edbbeee-418f-4f45-82f3-f5017eb750cb<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5438fa43'},
{id: '51b51ad5-1392-4538-8cd2-46978b0b2f02', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 51b51ad5-1392-4538-8cd2-46978b0b2f02<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5438fa43'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6edbbeee-418f-4f45-82f3-f5017eb750cb', to: '51b51ad5-1392-4538-8cd2-46978b0b2f02'},
{from: '6b571642-6ca4-439d-ae83-17b3359d3cfc', to: '6edbbeee-418f-4f45-82f3-f5017eb750cb'},
{from: '9b4e3eed-922f-4c6f-90a5-f7854cbe8474', to: '6edbbeee-418f-4f45-82f3-f5017eb750cb'},
{from: 'c7d4c2ae-6044-4032-ab89-7f781e58119e', to: '6edbbeee-418f-4f45-82f3-f5017eb750cb'}
                            ]);