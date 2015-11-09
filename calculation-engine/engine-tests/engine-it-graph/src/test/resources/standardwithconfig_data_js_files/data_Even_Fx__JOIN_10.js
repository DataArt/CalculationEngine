var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4b13b335-e759-41de-ac29-6bdbdbf094e8', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 4b13b335-e759-41de-ac29-6bdbdbf094e8<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: 'a8b7df14-d7d1-4f90-b1d3-4323776550c8', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: a8b7df14-d7d1-4f90-b1d3-4323776550c8<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '218f02c7-89ee-466a-8882-c17c10d39bd3', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 218f02c7-89ee-466a-8882-c17c10d39bd3<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '8e5e201c-c595-4fc2-83b1-fbe509450dac', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 8e5e201c-c595-4fc2-83b1-fbe509450dac<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '17b66ea7-8c9f-49e2-bcba-51176e50fadb', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 17b66ea7-8c9f-49e2-bcba-51176e50fadb<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'},
{id: '84d38771-7483-4d46-ba03-4dacf7e63841', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: 84d38771-7483-4d46-ba03-4dacf7e63841<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64921450'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8e5e201c-c595-4fc2-83b1-fbe509450dac', to: '84d38771-7483-4d46-ba03-4dacf7e63841'},
{from: '218f02c7-89ee-466a-8882-c17c10d39bd3', to: 'a8b7df14-d7d1-4f90-b1d3-4323776550c8'},
{from: 'a8b7df14-d7d1-4f90-b1d3-4323776550c8', to: '4b13b335-e759-41de-ac29-6bdbdbf094e8'},
{from: '84d38771-7483-4d46-ba03-4dacf7e63841', to: '17b66ea7-8c9f-49e2-bcba-51176e50fadb'}
                            ]);