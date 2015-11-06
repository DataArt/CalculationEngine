var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '740fcc15-de53-492a-9a36-d967b8e79325', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 740fcc15-de53-492a-9a36-d967b8e79325<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51d143a1'},
{id: 'ae972a3c-e799-4d8d-96a5-69146f5cac6b', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: ae972a3c-e799-4d8d-96a5-69146f5cac6b<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51d143a1'},
{id: '8c79717a-7636-4382-998e-fb04e5afbb36', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 8c79717a-7636-4382-998e-fb04e5afbb36<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51d143a1'},
{id: 'cf9a3548-780b-4814-bb03-96a2134f74f5', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: cf9a3548-780b-4814-bb03-96a2134f74f5<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: 4.0 ISBLANK  ISBLANK ; Ptgs: A6 ISBLANK  ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51d143a1'},
{id: 'aae7759c-ba3a-4e1e-8da8-76ff722192c0', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: aae7759c-ba3a-4e1e-8da8-76ff722192c0<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51d143a1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ae972a3c-e799-4d8d-96a5-69146f5cac6b', to: '740fcc15-de53-492a-9a36-d967b8e79325'},
{from: '8c79717a-7636-4382-998e-fb04e5afbb36', to: 'aae7759c-ba3a-4e1e-8da8-76ff722192c0'},
{from: '740fcc15-de53-492a-9a36-d967b8e79325', to: 'cf9a3548-780b-4814-bb03-96a2134f74f5'},
{from: 'aae7759c-ba3a-4e1e-8da8-76ff722192c0', to: 'ae972a3c-e799-4d8d-96a5-69146f5cac6b'}
                            ]);