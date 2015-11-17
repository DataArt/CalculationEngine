var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '61d93706-51e6-43ff-98cd-72bacb6a9025', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 61d93706-51e6-43ff-98cd-72bacb6a9025<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@738a815c'},
{id: '29fb7b47-7cd6-4cfc-8ace-7e3b8b84af9e', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 29fb7b47-7cd6-4cfc-8ace-7e3b8b84af9e<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@738a815c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '61d93706-51e6-43ff-98cd-72bacb6a9025', to: '29fb7b47-7cd6-4cfc-8ace-7e3b8b84af9e'}
                            ]);