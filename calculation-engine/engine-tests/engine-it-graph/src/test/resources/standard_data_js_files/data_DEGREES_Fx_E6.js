var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9a7b668-bdbe-4b23-8b70-7f272641dc4c', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: d9a7b668-bdbe-4b23-8b70-7f272641dc4c<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c5945a7'},
{id: 'f427b49b-5f20-42e9-a008-57df05958f29', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: f427b49b-5f20-42e9-a008-57df05958f29<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c5945a7'},
{id: '8b8e20d0-ef82-4892-9301-ced8969454ec', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 8b8e20d0-ef82-4892-9301-ced8969454ec<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c5945a7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8b8e20d0-ef82-4892-9301-ced8969454ec', to: 'f427b49b-5f20-42e9-a008-57df05958f29'},
{from: 'd9a7b668-bdbe-4b23-8b70-7f272641dc4c', to: '8b8e20d0-ef82-4892-9301-ced8969454ec'}
                            ]);