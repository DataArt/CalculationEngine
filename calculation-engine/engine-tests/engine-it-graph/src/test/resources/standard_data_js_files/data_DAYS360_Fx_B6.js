var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd4f912b1-cac3-4916-b3ad-df1ae4ef6379', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: d4f912b1-cac3-4916-b3ad-df1ae4ef6379<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@222eb8aa'},
{id: '480970bf-b1fb-401c-a14e-552f4b3b4719', label: 'B6\n154.0', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 154.0<br>Type: CELL_WITH_FORMULA<br>Id: 480970bf-b1fb-401c-a14e-552f4b3b4719<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: 42184.0, 42029.0 DAYS360 ; Ptgs: A3, A2 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@222eb8aa'},
{id: '37e83a5b-68b6-4e6d-9812-0816ccf1fa7e', label: 'DAYS360\n154.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 154.0<br>Type: FUNCTION<br>Id: 37e83a5b-68b6-4e6d-9812-0816ccf1fa7e<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@222eb8aa'},
{id: 'cce31d88-4cb1-431f-8774-25414e78b421', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: cce31d88-4cb1-431f-8774-25414e78b421<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@222eb8aa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd4f912b1-cac3-4916-b3ad-df1ae4ef6379', to: '37e83a5b-68b6-4e6d-9812-0816ccf1fa7e'},
{from: 'cce31d88-4cb1-431f-8774-25414e78b421', to: '37e83a5b-68b6-4e6d-9812-0816ccf1fa7e'},
{from: '37e83a5b-68b6-4e6d-9812-0816ccf1fa7e', to: '480970bf-b1fb-401c-a14e-552f4b3b4719'}
                            ]);