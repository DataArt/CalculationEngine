var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b8bc2c3c-2131-46dc-bac3-990806923d57', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: b8bc2c3c-2131-46dc-bac3-990806923d57<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@749f539e'},
{id: '3d1d082c-954a-41c7-ae75-d602a4671e70', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 3d1d082c-954a-41c7-ae75-d602a4671e70<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@749f539e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3d1d082c-954a-41c7-ae75-d602a4671e70', to: 'b8bc2c3c-2131-46dc-bac3-990806923d57'}
                            ]);