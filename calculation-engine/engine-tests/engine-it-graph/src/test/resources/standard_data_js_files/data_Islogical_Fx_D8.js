var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c77901f0-f60f-453c-9658-71727667bb09', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: c77901f0-f60f-453c-9658-71727667bb09<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59d77850'},
{id: '46f39359-4615-46cf-806a-0a2b3e2ddf62', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 46f39359-4615-46cf-806a-0a2b3e2ddf62<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: VALUE ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59d77850'},
{id: '4b9ea513-bddd-4843-9e3d-dac60837a1d5', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 4b9ea513-bddd-4843-9e3d-dac60837a1d5<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59d77850'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c77901f0-f60f-453c-9658-71727667bb09', to: '46f39359-4615-46cf-806a-0a2b3e2ddf62'},
{from: '4b9ea513-bddd-4843-9e3d-dac60837a1d5', to: 'c77901f0-f60f-453c-9658-71727667bb09'}
                            ]);