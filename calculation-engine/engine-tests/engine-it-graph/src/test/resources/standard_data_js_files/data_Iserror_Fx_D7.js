var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bbd2bc55-edf9-46b4-ad6f-959f2ac7f1b4', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Value: #REF!<br>Type: FUNCTION<br>Id: bbd2bc55-edf9-46b4-ad6f-959f2ac7f1b4<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'},
{id: '2f8a1a5f-fcb2-4c7a-8f8c-a090bdbf402c', label: 'D7\nTRUE', color: '#31b0d5', title: 'Name: D7<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2f8a1a5f-fcb2-4c7a-8f8c-a090bdbf402c<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: 6.0, #REF! SUM  ISERROR ; Ptgs: B2, VALUE SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'},
{id: '43a81fc6-469a-4521-9511-09645873a3ec', label: 'D2\n#REF!', color: '#31b0d5', title: 'Name: D2<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 43a81fc6-469a-4521-9511-09645873a3ec<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: 6.0, #REF! SUM ; Ptgs: B2, VALUE SUM  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'},
{id: 'f8d1cae5-c1a2-456b-b1f5-9dbd63d727dd', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Value: TRUE<br>Type: FUNCTION<br>Id: f8d1cae5-c1a2-456b-b1f5-9dbd63d727dd<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'},
{id: '24b2188f-824f-4d10-bcd2-b49ddc6cc088', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 24b2188f-824f-4d10-bcd2-b49ddc6cc088<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'},
{id: 'e15dc574-8428-43a6-93ea-9acadd218937', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: e15dc574-8428-43a6-93ea-9acadd218937<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e008f36'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bbd2bc55-edf9-46b4-ad6f-959f2ac7f1b4', to: '43a81fc6-469a-4521-9511-09645873a3ec'},
{from: '24b2188f-824f-4d10-bcd2-b49ddc6cc088', to: 'bbd2bc55-edf9-46b4-ad6f-959f2ac7f1b4'},
{from: 'f8d1cae5-c1a2-456b-b1f5-9dbd63d727dd', to: '2f8a1a5f-fcb2-4c7a-8f8c-a090bdbf402c'},
{from: 'e15dc574-8428-43a6-93ea-9acadd218937', to: 'bbd2bc55-edf9-46b4-ad6f-959f2ac7f1b4'},
{from: '43a81fc6-469a-4521-9511-09645873a3ec', to: 'f8d1cae5-c1a2-456b-b1f5-9dbd63d727dd'}
                            ]);