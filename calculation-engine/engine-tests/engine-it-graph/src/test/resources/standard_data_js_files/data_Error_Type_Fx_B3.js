var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a70de3bc-07a3-4e87-8884-5641433b9256', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: a70de3bc-07a3-4e87-8884-5641433b9256<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@194152cf'},
{id: '3b4d519b-5473-4018-8778-cf6ab6bf24b0', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 3b4d519b-5473-4018-8778-cf6ab6bf24b0<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@194152cf'},
{id: '2acbe54a-4a71-4fca-85e5-4a28fbd789ec', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 2acbe54a-4a71-4fca-85e5-4a28fbd789ec<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@194152cf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a70de3bc-07a3-4e87-8884-5641433b9256', to: '2acbe54a-4a71-4fca-85e5-4a28fbd789ec'},
{from: '3b4d519b-5473-4018-8778-cf6ab6bf24b0', to: 'a70de3bc-07a3-4e87-8884-5641433b9256'}
                            ]);