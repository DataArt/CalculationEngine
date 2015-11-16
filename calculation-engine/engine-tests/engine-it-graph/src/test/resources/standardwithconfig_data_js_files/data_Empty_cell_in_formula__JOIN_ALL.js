var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '97901dab-40ef-48de-907b-eaf7bdea5bce', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 97901dab-40ef-48de-907b-eaf7bdea5bce<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '970ef48c-f0db-4616-a3b7-5fafa44c8f6a', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 970ef48c-f0db-4616-a3b7-5fafa44c8f6a<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: 'aef01db6-9e0b-4af4-892e-7fb29b0504c0', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: aef01db6-9e0b-4af4-892e-7fb29b0504c0<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: 'e44883b8-82b2-4599-8cfb-02ca00936263', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: e44883b8-82b2-4599-8cfb-02ca00936263<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '2437f609-7546-4da3-b49f-1d9877d59ab6', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 2437f609-7546-4da3-b49f-1d9877d59ab6<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '755aaae5-0f6c-4ea8-88f1-366586eafd96', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 755aaae5-0f6c-4ea8-88f1-366586eafd96<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: 'ef7bdf04-6e58-4fc1-b68d-24c4c2d1969c', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: ef7bdf04-6e58-4fc1-b68d-24c4c2d1969c<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '27964cbc-e758-4143-91ec-24446719e61f', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 27964cbc-e758-4143-91ec-24446719e61f<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '27964cbc-e758-4143-91ec-24446719e61f', to: '970ef48c-f0db-4616-a3b7-5fafa44c8f6a'},
{from: 'aef01db6-9e0b-4af4-892e-7fb29b0504c0', to: '970ef48c-f0db-4616-a3b7-5fafa44c8f6a'},
{from: 'ef7bdf04-6e58-4fc1-b68d-24c4c2d1969c', to: '2437f609-7546-4da3-b49f-1d9877d59ab6'},
{from: '970ef48c-f0db-4616-a3b7-5fafa44c8f6a', to: '2437f609-7546-4da3-b49f-1d9877d59ab6'},
{from: '97901dab-40ef-48de-907b-eaf7bdea5bce', to: '27964cbc-e758-4143-91ec-24446719e61f'},
{from: '2437f609-7546-4da3-b49f-1d9877d59ab6', to: '755aaae5-0f6c-4ea8-88f1-366586eafd96'},
{from: 'e44883b8-82b2-4599-8cfb-02ca00936263', to: '27964cbc-e758-4143-91ec-24446719e61f'}
                            ]);