var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '95dcf6e3-292e-40b9-9991-cdc4a9cd39d6', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 95dcf6e3-292e-40b9-9991-cdc4a9cd39d6<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '1640cba5-62c2-4944-9474-1170f7d079ef', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 1640cba5-62c2-4944-9474-1170f7d079ef<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '859fbec2-beef-4db5-b138-6c35c799f18c', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 859fbec2-beef-4db5-b138-6c35c799f18c<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '047c5c40-a79c-4872-8822-b634fe39cb1a', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 047c5c40-a79c-4872-8822-b634fe39cb1a<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: 'a1a3168a-a697-4e00-9fb2-e1e551d59c23', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: a1a3168a-a697-4e00-9fb2-e1e551d59c23<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '3390220d-71c5-4139-9575-6009ca3dae6d', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 3390220d-71c5-4139-9575-6009ca3dae6d<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a1a3168a-a697-4e00-9fb2-e1e551d59c23', to: '95dcf6e3-292e-40b9-9991-cdc4a9cd39d6'},
{from: '3390220d-71c5-4139-9575-6009ca3dae6d', to: 'a1a3168a-a697-4e00-9fb2-e1e551d59c23'},
{from: '859fbec2-beef-4db5-b138-6c35c799f18c', to: '047c5c40-a79c-4872-8822-b634fe39cb1a'},
{from: '047c5c40-a79c-4872-8822-b634fe39cb1a', to: '1640cba5-62c2-4944-9474-1170f7d079ef'}
                            ]);