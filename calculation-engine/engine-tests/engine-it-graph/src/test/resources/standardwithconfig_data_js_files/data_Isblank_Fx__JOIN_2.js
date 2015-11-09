var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9f21ad43-bd3a-4ac7-9d2e-069ca59e1244', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 9f21ad43-bd3a-4ac7-9d2e-069ca59e1244<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '2b079753-cc31-407f-9df8-4e85d41edd59', label: 'D7\n#NAME?', color: '#31b0d5', title: 'Name: D7<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 2b079753-cc31-407f-9df8-4e85d41edd59<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: #NAME? ISBLANK ; Ptgs: C5 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '922d79c6-575b-429b-b5ed-98fd15c6fe26', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 922d79c6-575b-429b-b5ed-98fd15c6fe26<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '10196327-099c-4224-9ec1-8ec1c76534b2', label: 'ISBLANK\n#NAME?', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 10196327-099c-4224-9ec1-8ec1c76534b2<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: 'c96d67bf-f1d6-4f58-b181-0ce477e04d57', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: c96d67bf-f1d6-4f58-b181-0ce477e04d57<br>Formula Expression: Formula String: C5; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: 'ad51f2e1-ec19-4f61-b036-b5e9d9a876dc', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: ad51f2e1-ec19-4f61-b036-b5e9d9a876dc<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '23bb96de-56cc-4ae8-b393-bab687870a24', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 23bb96de-56cc-4ae8-b393-bab687870a24<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: 'e9bbc794-ab16-4593-9e17-fcfd9b1bd988', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: e9bbc794-ab16-4593-9e17-fcfd9b1bd988<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '18e02561-7e65-4d5d-a655-2cebf837b8eb', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 18e02561-7e65-4d5d-a655-2cebf837b8eb<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: 4.0 ISBLANK  ISBLANK ; Ptgs: A6 ISBLANK  ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: 'd3822907-beb6-4ff2-9f2e-99afc83d62bb', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: d3822907-beb6-4ff2-9f2e-99afc83d62bb<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '9cfb0ff1-135d-4df0-830e-ddb28c5c92b3', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 9cfb0ff1-135d-4df0-830e-ddb28c5c92b3<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '10267c6a-debe-4440-9dad-effde94378d5', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 10267c6a-debe-4440-9dad-effde94378d5<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: #REF! ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: 'bc722354-3b6c-409e-97b9-111203db80bc', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: bc722354-3b6c-409e-97b9-111203db80bc<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'},
{id: '71454ea2-1721-4fb2-b0df-40df4e5075c1', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 71454ea2-1721-4fb2-b0df-40df4e5075c1<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: 6.0 ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d3cce46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bc722354-3b6c-409e-97b9-111203db80bc', to: '18e02561-7e65-4d5d-a655-2cebf837b8eb'},
{from: '922d79c6-575b-429b-b5ed-98fd15c6fe26', to: '71454ea2-1721-4fb2-b0df-40df4e5075c1'},
{from: 'ad51f2e1-ec19-4f61-b036-b5e9d9a876dc', to: '10267c6a-debe-4440-9dad-effde94378d5'},
{from: '9cfb0ff1-135d-4df0-830e-ddb28c5c92b3', to: 'ad51f2e1-ec19-4f61-b036-b5e9d9a876dc'},
{from: '9f21ad43-bd3a-4ac7-9d2e-069ca59e1244', to: 'bc722354-3b6c-409e-97b9-111203db80bc'},
{from: 'c96d67bf-f1d6-4f58-b181-0ce477e04d57', to: '10196327-099c-4224-9ec1-8ec1c76534b2'},
{from: '10196327-099c-4224-9ec1-8ec1c76534b2', to: '2b079753-cc31-407f-9df8-4e85d41edd59'},
{from: '23bb96de-56cc-4ae8-b393-bab687870a24', to: 'd3822907-beb6-4ff2-9f2e-99afc83d62bb'},
{from: 'e9bbc794-ab16-4593-9e17-fcfd9b1bd988', to: '922d79c6-575b-429b-b5ed-98fd15c6fe26'},
{from: 'd3822907-beb6-4ff2-9f2e-99afc83d62bb', to: '9f21ad43-bd3a-4ac7-9d2e-069ca59e1244'}
                            ]);