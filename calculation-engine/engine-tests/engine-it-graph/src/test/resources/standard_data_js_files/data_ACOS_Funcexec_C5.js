var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7f12236e-9f78-45df-aa0d-2b6f63006882', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 7f12236e-9f78-45df-aa0d-2b6f63006882<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b5d6a01'},
{id: '925dc47e-35eb-45f7-ba6f-488bee7fbe24', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 925dc47e-35eb-45f7-ba6f-488bee7fbe24<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b5d6a01'},
{id: 'bdc922e6-ef24-44dc-93f7-24b9ac717ac1', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: bdc922e6-ef24-44dc-93f7-24b9ac717ac1<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b5d6a01'},
{id: 'e5f98972-5807-49dc-ad6e-071304546cfd', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: e5f98972-5807-49dc-ad6e-071304546cfd<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: 0.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b5d6a01'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '925dc47e-35eb-45f7-ba6f-488bee7fbe24', to: 'e5f98972-5807-49dc-ad6e-071304546cfd'},
{from: 'bdc922e6-ef24-44dc-93f7-24b9ac717ac1', to: '925dc47e-35eb-45f7-ba6f-488bee7fbe24'},
{from: '7f12236e-9f78-45df-aa0d-2b6f63006882', to: '925dc47e-35eb-45f7-ba6f-488bee7fbe24'}
                            ]);