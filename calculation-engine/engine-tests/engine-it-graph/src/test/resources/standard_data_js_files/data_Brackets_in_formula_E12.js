var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4724b36-8972-4527-92d0-77c965bd71c9', label: 'E12\n41686.049999999996', color: '#31b0d5', title: 'Name: E12<br>Alias: null<br>Value: 41686.049999999996<br>Type: CELL_WITH_FORMULA<br>Id: f4724b36-8972-4527-92d0-77c965bd71c9<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: 107.3 77.7 0.2 / *; Ptgs: E5 E4 VALUE / * Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'},
{id: '12c36a31-c1b4-4690-b5de-b14ab1eb3896', label: 'VALUE\n0.2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.2<br>Type: CONSTANT_VALUE<br>Id: 12c36a31-c1b4-4690-b5de-b14ab1eb3896<br>Formula Expression: Formula String: VALUE; Formula Values: 0.2; Formula Ptg: 0.2; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'},
{id: '057e5e77-b582-416c-ae52-d1915a9f52f2', label: 'E5\n107.3', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 107.3<br>Type: CELL_WITH_VALUE<br>Id: 057e5e77-b582-416c-ae52-d1915a9f52f2<br>Formula Expression: Formula String: E5; Formula Values: 107.3; Formula Ptg: 107.3; Ptgs: E5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'},
{id: 'fd3eef36-cd1b-4e77-84a4-33dbe334ae7f', label: '/\n388.5', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 388.5<br>Type: OPERATOR<br>Id: fd3eef36-cd1b-4e77-84a4-33dbe334ae7f<br>Formula Expression: Formula String: E4 / VALUE; Formula Values: 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'},
{id: '4ddfd33a-2aa3-497f-9bed-6fe5bc54a410', label: 'E4\n77.7', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 4ddfd33a-2aa3-497f-9bed-6fe5bc54a410<br>Formula Expression: Formula String: E4; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: E4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'},
{id: '9afcb32b-f516-4391-9d8b-3fb305364764', label: '*\n41686.049999999996', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 41686.049999999996<br>Type: OPERATOR<br>Id: 9afcb32b-f516-4391-9d8b-3fb305364764<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70e38ce1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9afcb32b-f516-4391-9d8b-3fb305364764', to: 'f4724b36-8972-4527-92d0-77c965bd71c9'},
{from: 'fd3eef36-cd1b-4e77-84a4-33dbe334ae7f', to: '9afcb32b-f516-4391-9d8b-3fb305364764'},
{from: '057e5e77-b582-416c-ae52-d1915a9f52f2', to: '9afcb32b-f516-4391-9d8b-3fb305364764'},
{from: '4ddfd33a-2aa3-497f-9bed-6fe5bc54a410', to: 'fd3eef36-cd1b-4e77-84a4-33dbe334ae7f'},
{from: '12c36a31-c1b4-4690-b5de-b14ab1eb3896', to: 'fd3eef36-cd1b-4e77-84a4-33dbe334ae7f'}
                            ]);