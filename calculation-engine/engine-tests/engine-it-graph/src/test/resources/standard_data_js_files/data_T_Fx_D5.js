var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7ea8c39d-8354-46c0-8f80-7d2d83c16baa', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 7ea8c39d-8354-46c0-8f80-7d2d83c16baa<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@38600b'},
{id: '5e58108a-d40e-4f68-8106-e6e022e599bc', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 5e58108a-d40e-4f68-8106-e6e022e599bc<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: why not? T ; Ptgs: C3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@38600b'},
{id: '4270cc13-dc0c-4758-9da6-bcfc421538db', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Value: why not?<br>Type: FUNCTION<br>Id: 4270cc13-dc0c-4758-9da6-bcfc421538db<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@38600b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7ea8c39d-8354-46c0-8f80-7d2d83c16baa', to: '4270cc13-dc0c-4758-9da6-bcfc421538db'},
{from: '4270cc13-dc0c-4758-9da6-bcfc421538db', to: '5e58108a-d40e-4f68-8106-e6e022e599bc'}
                            ]);