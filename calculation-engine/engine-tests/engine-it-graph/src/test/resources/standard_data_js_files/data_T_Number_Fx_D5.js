var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '03719e83-d3e1-4d81-90e8-5b5bfb6aeb13', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 03719e83-d3e1-4d81-90e8-5b5bfb6aeb13<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42561fba'},
{id: '2d30db8b-aa66-4a8c-935e-2e9e5a86564c', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 2d30db8b-aa66-4a8c-935e-2e9e5a86564c<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42561fba'},
{id: '5f90e76f-b178-42f9-9a2f-1282e3016883', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 5f90e76f-b178-42f9-9a2f-1282e3016883<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42561fba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5f90e76f-b178-42f9-9a2f-1282e3016883', to: '2d30db8b-aa66-4a8c-935e-2e9e5a86564c'},
{from: '2d30db8b-aa66-4a8c-935e-2e9e5a86564c', to: '03719e83-d3e1-4d81-90e8-5b5bfb6aeb13'}
                            ]);