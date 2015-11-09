var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ae55e116-b4fd-4283-a330-dd36d33771f4', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: ae55e116-b4fd-4283-a330-dd36d33771f4<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: 9.0, #REF!, #REF! SUM ; Ptgs: D5, VALUE, VALUE SUM  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: '6fc0d70e-5eec-4a47-a56d-9f5c081af321', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: 6fc0d70e-5eec-4a47-a56d-9f5c081af321<br>Formula Expression: Formula String: SUM(D5, VALUE, VALUE); Formula Values: SUM(9.0, #REF!, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: 'c6543952-6bf2-4e97-9bca-06d82b05de53', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: c6543952-6bf2-4e97-9bca-06d82b05de53<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: '136a5371-a159-4a2b-af1f-a5325a053dfc', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 136a5371-a159-4a2b-af1f-a5325a053dfc<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'},
{id: '83c25e34-f4be-4ace-b4e2-dc150fca9c37', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 83c25e34-f4be-4ace-b4e2-dc150fca9c37<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71676e5f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '136a5371-a159-4a2b-af1f-a5325a053dfc', to: '6fc0d70e-5eec-4a47-a56d-9f5c081af321'},
{from: '83c25e34-f4be-4ace-b4e2-dc150fca9c37', to: '6fc0d70e-5eec-4a47-a56d-9f5c081af321'},
{from: 'c6543952-6bf2-4e97-9bca-06d82b05de53', to: '6fc0d70e-5eec-4a47-a56d-9f5c081af321'},
{from: '6fc0d70e-5eec-4a47-a56d-9f5c081af321', to: 'ae55e116-b4fd-4283-a330-dd36d33771f4'}
                            ]);