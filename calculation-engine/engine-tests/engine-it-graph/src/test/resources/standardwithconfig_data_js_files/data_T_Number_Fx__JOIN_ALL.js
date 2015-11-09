var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4b53551f-4350-4e98-8f45-18ea7d9b9acc', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 4b53551f-4350-4e98-8f45-18ea7d9b9acc<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: 'cc9d41db-e26c-4a46-9ff6-c74668433d97', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: cc9d41db-e26c-4a46-9ff6-c74668433d97<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '86b8a653-3b64-46fb-b1fb-faeb248091b0', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 86b8a653-3b64-46fb-b1fb-faeb248091b0<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '157abef2-0e59-4ec2-aeda-43c2a8d08319', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 157abef2-0e59-4ec2-aeda-43c2a8d08319<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '53f3a389-7d37-41c5-b7c0-4ccf8c2a1893', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 53f3a389-7d37-41c5-b7c0-4ccf8c2a1893<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '539ee3ef-34e4-4fad-8b37-e3db09c898dc', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 539ee3ef-34e4-4fad-8b37-e3db09c898dc<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '157e2bcc-0114-4caf-a807-a89e6576535d', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 157e2bcc-0114-4caf-a807-a89e6576535d<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '7e2e4b43-741e-4005-9b50-bd3ae81a1b9e', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 7e2e4b43-741e-4005-9b50-bd3ae81a1b9e<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '42f03295-0775-41bb-b06f-e0aaef4dec96', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 42f03295-0775-41bb-b06f-e0aaef4dec96<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '53f3a389-7d37-41c5-b7c0-4ccf8c2a1893', to: '42f03295-0775-41bb-b06f-e0aaef4dec96'},
{from: '157abef2-0e59-4ec2-aeda-43c2a8d08319', to: '86b8a653-3b64-46fb-b1fb-faeb248091b0'},
{from: '7e2e4b43-741e-4005-9b50-bd3ae81a1b9e', to: '86b8a653-3b64-46fb-b1fb-faeb248091b0'},
{from: '539ee3ef-34e4-4fad-8b37-e3db09c898dc', to: 'cc9d41db-e26c-4a46-9ff6-c74668433d97'},
{from: '42f03295-0775-41bb-b06f-e0aaef4dec96', to: '157e2bcc-0114-4caf-a807-a89e6576535d'},
{from: '4b53551f-4350-4e98-8f45-18ea7d9b9acc', to: '539ee3ef-34e4-4fad-8b37-e3db09c898dc'},
{from: '86b8a653-3b64-46fb-b1fb-faeb248091b0', to: '539ee3ef-34e4-4fad-8b37-e3db09c898dc'}
                            ]);