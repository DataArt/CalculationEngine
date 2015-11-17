var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9cbfdada-3664-4dab-88cb-bfd9cad6de2b', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 9cbfdada-3664-4dab-88cb-bfd9cad6de2b<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '803f8077-b269-4350-9e03-377a6c4972e5', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 803f8077-b269-4350-9e03-377a6c4972e5<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '37b9b378-d941-489f-ace1-26e78a576ac4', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 37b9b378-d941-489f-ace1-26e78a576ac4<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'da661a13-e1b9-4872-b181-1e64314b26ff', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: da661a13-e1b9-4872-b181-1e64314b26ff<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3', to: 'da661a13-e1b9-4872-b181-1e64314b26ff'},
{from: '9cbfdada-3664-4dab-88cb-bfd9cad6de2b', to: 'a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3'},
{from: '37b9b378-d941-489f-ace1-26e78a576ac4', to: 'a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3'},
{from: '803f8077-b269-4350-9e03-377a6c4972e5', to: 'a6843c5e-e9b9-47bf-abc4-7bfeb0a6d8c3'}
                            ]);