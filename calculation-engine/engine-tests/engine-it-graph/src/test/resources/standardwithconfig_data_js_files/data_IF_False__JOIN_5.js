var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f3b4c91c-397a-48c0-98be-e931b7ce4b7a', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: f3b4c91c-397a-48c0-98be-e931b7ce4b7a<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '87bc9d9f-348b-4ade-926f-34d6a6b4a9c8', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 87bc9d9f-348b-4ade-926f-34d6a6b4a9c8<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: 'a61fc327-7cdf-4ada-b760-cb1f143fac89', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: a61fc327-7cdf-4ada-b760-cb1f143fac89<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: 'b132f652-a2b0-454a-87ef-21bc50fcfaf0', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: b132f652-a2b0-454a-87ef-21bc50fcfaf0<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '717c95d4-0a50-4323-a3fd-7f9328577201', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 717c95d4-0a50-4323-a3fd-7f9328577201<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '1543ae00-1f9d-4acc-98d0-7a781a69a7b3', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 1543ae00-1f9d-4acc-98d0-7a781a69a7b3<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1543ae00-1f9d-4acc-98d0-7a781a69a7b3', to: 'f3b4c91c-397a-48c0-98be-e931b7ce4b7a'},
{from: 'f3b4c91c-397a-48c0-98be-e931b7ce4b7a', to: '717c95d4-0a50-4323-a3fd-7f9328577201'},
{from: '87bc9d9f-348b-4ade-926f-34d6a6b4a9c8', to: '1543ae00-1f9d-4acc-98d0-7a781a69a7b3'},
{from: 'b132f652-a2b0-454a-87ef-21bc50fcfaf0', to: 'f3b4c91c-397a-48c0-98be-e931b7ce4b7a'},
{from: 'a61fc327-7cdf-4ada-b760-cb1f143fac89', to: '1543ae00-1f9d-4acc-98d0-7a781a69a7b3'}
                            ]);