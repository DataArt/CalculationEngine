var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9e17bdf-1f4a-4370-8d70-035026097100', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: d9e17bdf-1f4a-4370-8d70-035026097100<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: 'cbb56cd8-9440-4744-b612-d5c855434577', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: cbb56cd8-9440-4744-b612-d5c855434577<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: '5ecddf8f-c183-4b7e-ad92-4105b7fdcd9d', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 5ecddf8f-c183-4b7e-ad92-4105b7fdcd9d<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: 'a892c510-4c22-4932-91a0-159b7aceac8f', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: a892c510-4c22-4932-91a0-159b7aceac8f<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: '8c82b704-0727-4029-994b-a0f0ab9c4105', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 8c82b704-0727-4029-994b-a0f0ab9c4105<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: '69ffd809-f13a-459b-853a-3ccc8b8cb110', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 69ffd809-f13a-459b-853a-3ccc8b8cb110<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: '68ff96a3-a146-4e4e-8ac1-339a53bbe91d', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 68ff96a3-a146-4e4e-8ac1-339a53bbe91d<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'},
{id: '833c4f1c-d33e-4842-a892-67c658d958b2', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 833c4f1c-d33e-4842-a892-67c658d958b2<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49872d67'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '69ffd809-f13a-459b-853a-3ccc8b8cb110', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'},
{from: '68ff96a3-a146-4e4e-8ac1-339a53bbe91d', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'},
{from: 'cbb56cd8-9440-4744-b612-d5c855434577', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'},
{from: '5ecddf8f-c183-4b7e-ad92-4105b7fdcd9d', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'},
{from: 'd9e17bdf-1f4a-4370-8d70-035026097100', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'},
{from: 'a892c510-4c22-4932-91a0-159b7aceac8f', to: '8c82b704-0727-4029-994b-a0f0ab9c4105'},
{from: '833c4f1c-d33e-4842-a892-67c658d958b2', to: 'a892c510-4c22-4932-91a0-159b7aceac8f'}
                            ]);