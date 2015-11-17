var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7a3f248b-3067-4963-a703-67a94069dc78', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 7a3f248b-3067-4963-a703-67a94069dc78<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: 'f10ca1ed-757e-423e-924e-70ff02dfd24a', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: f10ca1ed-757e-423e-924e-70ff02dfd24a<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: 'dbebcbbe-954a-47a9-a713-ac619a5043e6', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: dbebcbbe-954a-47a9-a713-ac619a5043e6<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: '90037339-b3e7-4dc5-89d0-caa150137969', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 90037339-b3e7-4dc5-89d0-caa150137969<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'},
{id: 'b35fa613-7292-47a4-9e49-1f3049efdccd', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: b35fa613-7292-47a4-9e49-1f3049efdccd<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b8e6981'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b35fa613-7292-47a4-9e49-1f3049efdccd', to: '7a3f248b-3067-4963-a703-67a94069dc78'},
{from: 'f10ca1ed-757e-423e-924e-70ff02dfd24a', to: '7a3f248b-3067-4963-a703-67a94069dc78'},
{from: '90037339-b3e7-4dc5-89d0-caa150137969', to: '7a3f248b-3067-4963-a703-67a94069dc78'},
{from: '7a3f248b-3067-4963-a703-67a94069dc78', to: 'dbebcbbe-954a-47a9-a713-ac619a5043e6'}
                            ]);