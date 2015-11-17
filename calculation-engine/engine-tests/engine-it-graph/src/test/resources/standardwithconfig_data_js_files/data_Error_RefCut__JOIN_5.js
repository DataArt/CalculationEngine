var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dd9dd6dd-f023-44c4-bd19-22bab6cd9e1b', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: dd9dd6dd-f023-44c4-bd19-22bab6cd9e1b<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: 'a6713f61-3940-4252-972e-447b548dadd2', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: a6713f61-3940-4252-972e-447b548dadd2<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: 'd9f9ad4d-3cb7-422a-a38c-3b16d81d5c16', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: d9f9ad4d-3cb7-422a-a38c-3b16d81d5c16<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: '5c8159da-6999-4151-a74d-12e7b5616a25', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 5c8159da-6999-4151-a74d-12e7b5616a25<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: 'b8aac846-44f6-49aa-8936-82d451664ead', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: b8aac846-44f6-49aa-8936-82d451664ead<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5c8159da-6999-4151-a74d-12e7b5616a25', to: 'a6713f61-3940-4252-972e-447b548dadd2'},
{from: 'b8aac846-44f6-49aa-8936-82d451664ead', to: 'a6713f61-3940-4252-972e-447b548dadd2'},
{from: 'd9f9ad4d-3cb7-422a-a38c-3b16d81d5c16', to: 'a6713f61-3940-4252-972e-447b548dadd2'},
{from: 'a6713f61-3940-4252-972e-447b548dadd2', to: 'dd9dd6dd-f023-44c4-bd19-22bab6cd9e1b'}
                            ]);